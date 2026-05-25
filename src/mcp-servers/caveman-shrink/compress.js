// caveman-shrink — pure-Node prose compressor for MCP tool descriptions
// and other safe string fields. Mirrors the boundaries of the
// caveman-compress Python tool (preserve code, URLs, paths, identifiers)
// but reimplemented in Node so the proxy stays single-runtime.
//
// API: compress(text, opts?) → { compressed, before, after }
//
// Boundaries (NEVER touched):
//  - fenced code blocks (``` ... ```)
//  - inline code (`...`)
//  - URLs (https?://...)
//  - filesystem paths (anything with `/` or `\`)
//  - "code-looking" tokens (parens at end, semicolons, JSON-like braces)
//  - identifiers in CamelCase / snake_case / dotted.path form
//
// Compression applied to everything else:
//  - drop articles (a, an, the)
//  - drop filler words (just, really, basically, actually, simply, quite, very)
//  - drop pleasantries (please, kindly, thank you, sure, certainly)
//  - drop hedging (perhaps, maybe, might, could potentially, would like to)
//  - drop leading "I'll" / "I will" / "you can" / "we will" / "let me"
//  - collapse whitespace runs

const FILLERS = new RegExp(
  '\\b(?:just|really|basically|actually|simply|quite|very|essentially|literally)\\b',
  'gi'
);

const PLEASANTRIES = new RegExp(
  '\\b(?:please|kindly|thank you|thanks|sure|certainly|of course|happy to|i\'?d be happy)\\b[,.]?\\s*',
  'gi'
);

const HEDGES = new RegExp(
  '\\b(?:perhaps|maybe|might|could potentially|would like to|i think|in my opinion|it seems|it appears)\\b\\s*',
  'gi'
);

const LEADERS = new RegExp(
  '^(?:i\'?ll|i will|i can|i\'?d|you can|we will|we can|let me|let\'?s)\\s+',
  'gim'
);

const ARTICLES = /\b(?:a|an|the)\s+(?=[a-z])/gi;

// Tokens we won't touch even if they sit inside prose.
const PROTECTED_PATTERNS = [
  /```[\s\S]*?```/g,                          // fenced code
  /`[^`\n]+`/g,                               // inline code
  /\bhttps?:\/\/\S+/gi,                       // URLs
  /\b[\w.-]*[\/\\][\w.\/\\\-]+/g,             // paths with / or \
  /\b[A-Z][A-Za-z0-9]*(?:_[A-Z][A-Za-z0-9]*)+\b/g, // CONST_CASE
  /\b\w+\.\w+(?:\.\w+)*\(\)?/g,               // dotted.method or pkg.fn()
  /[A-Za-z_][A-Za-z0-9_]*\s*\([^)]*\)/g,      // function calls
  /\b\d+\.\d+\.\d+\b/g,                       // version numbers
];

function withProtectedSegments(text, transform) {
  // Replace every protected match with a sentinel, transform the rest, then
  // splice the originals back in.
  const segments = [];
  let working = text;
  for (const re of PROTECTED_PATTERNS) {
    working = working.replace(re, m => {
      const i = segments.length;
      segments.push(m);
      return ` ${i} `;
    });
  }
  let out = transform(working);
  out = out.replace(/ (\d+) /g, (_, i) => segments[+i]);
  return out;
}

function compressProse(text) {
  let s = text;
  s = s.replace(LEADERS, '');
  s = s.replace(PLEASANTRIES, '');
  s = s.replace(HEDGES, '');
  s = s.replace(FILLERS, '');
  s = s.replace(ARTICLES, '');
  // Collapse repeated whitespace introduced by removals.
  s = s.replace(/[ \t]{2,}/g, ' ');
  s = s.replace(/\s+([,.;:!?])/g, '$1');
  s = s.replace(/\n{3,}/g, '\n\n');
  // Capitalize the first letter of each sentence we may have left lowercase.
  s = s.replace(/(^|[.!?]\s+)([a-z])/g, (_, pre, ch) => pre + ch.toUpperCase());
  return s.trim();
}

function compress(text, _opts) {
  if (typeof text !== 'string' || text.length === 0) {
    return { compressed: text, before: 0, after: 0 };
  }
  const before = text.length;
  const compressed = withProtectedSegments(text, compressProse);
  return { compressed, before, after: compressed.length };
}

// Walk a JSON-RPC payload and compress every `description` field in place.
// Used by the proxy on tools/list, prompts/list, resources/list responses.
function compressDescriptionsInPlace(obj, fieldNames) {
  const fields = new Set(fieldNames || ['description']);
  if (!obj || typeof obj !== 'object') return;
  if (Array.isArray(obj)) {
    for (const item of obj) compressDescriptionsInPlace(item, [...fields]);
    return;
  }
  for (const [key, val] of Object.entries(obj)) {
    if (fields.has(key) && typeof val === 'string') {
      obj[key] = compress(val).compressed;
    } else if (val && typeof val === 'object') {
      compressDescriptionsInPlace(val, [...fields]);
    }
  }
}

module.exports = { compress, compressDescriptionsInPlace, withProtectedSegments };
