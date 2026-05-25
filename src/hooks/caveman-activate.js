#!/usr/bin/env node
// caveman — Claude Code SessionStart activation hook
//
// Runs on every session start:
//   1. Writes flag file at $CLAUDE_CONFIG_DIR/.caveman-active (statusline reads this)
//   2. Emits caveman ruleset as hidden SessionStart context
//   3. Detects missing statusline config and emits setup nudge

const fs = require('fs');
const path = require('path');
const os = require('os');
const { getDefaultMode, safeWriteFlag } = require('./caveman-config');

const claudeDir = process.env.CLAUDE_CONFIG_DIR || path.join(os.homedir(), '.claude');
const flagPath = path.join(claudeDir, '.caveman-active');
const settingsPath = path.join(claudeDir, 'settings.json');

const mode = getDefaultMode();

// "off" mode — skip activation entirely, don't write flag or emit rules
if (mode === 'off') {
  try { fs.unlinkSync(flagPath); } catch (e) {}
  process.stdout.write('OK');
  process.exit(0);
}

// 1. Write flag file (symlink-safe)
safeWriteFlag(flagPath, mode);

// 2. Emit full caveman ruleset, filtered to the active intensity level.
const INDEPENDENT_MODES = new Set(['commit', 'review', 'compress']);

if (INDEPENDENT_MODES.has(mode)) {
  process.stdout.write('CAVEMAN MODE ACTIVE — level: ' + mode + '. Behavior defined by /caveman-' + mode + ' skill.');
  process.exit(0);
}

const modeLabel = mode === 'wenyan' ? 'wenyan-full' : mode;

let skillContent = '';
try {
  skillContent = fs.readFileSync(
    path.join(__dirname, '..', 'skills', 'caveman', 'SKILL.md'), 'utf8'
  );
} catch (e) { /* standalone install — will use fallback below */ }

let output;

if (skillContent) {
  const body = skillContent.replace(/^---[\s\S]*?---\s*/, '');
  const filtered = body.split('\n').reduce((acc, line) => {
    const tableRowMatch = line.match(/^\|\s*\*\*(\S+?)\*\*\s*\|/);
    if (tableRowMatch) {
      if (tableRowMatch[1] === modeLabel) acc.push(line);
      return acc;
    }
    const exampleMatch = line.match(/^- (\S+?):\s/);
    if (exampleMatch) {
      if (exampleMatch[1] === modeLabel) acc.push(line);
      return acc;
    }
    acc.push(line);
    return acc;
  }, []);
  output = 'CAVEMAN MODE ACTIVE — level: ' + modeLabel + '\n\n' + filtered.join('\n');
} else {
  output =
    'CAVEMAN MODE ACTIVE — level: ' + modeLabel + '\n\n' +
    'Respond terse like smart caveman. All technical substance stay. Only fluff die.\n\n' +
    '## Persistence\n\n' +
    'ACTIVE EVERY RESPONSE. No revert after many turns. No filler drift.\n\n' +
    '## Rules\n\n' +
    'Drop: articles (a/an/the), filler (just/really/basically/actually/simply), pleasantries, hedging. ' +
    'Fragments OK. Short synonyms. Technical terms exact. Code blocks unchanged.\n\n' +
    'Pattern: `[thing] [action] [reason]. [next step].`\n\n' +
    '## Auto-Clarity\n\n' +
    'Drop caveman for: security warnings, irreversible action confirmations, multi-step sequences where fragment order risks misread. Resume caveman after clear part done.\n\n' +
    '## Boundaries\n\n' +
    'Code/commits/PRs: write normal. "stop caveman" or "normal mode": revert. Level persist until changed or session end.';
}

// 3. Detect missing statusline config
try {
  let hasStatusline = false;
  if (fs.existsSync(settingsPath)) {
    const settings = JSON.parse(fs.readFileSync(settingsPath, 'utf8'));
    if (settings.statusLine) hasStatusline = true;
  }
  if (!hasStatusline) {
    const isWindows = process.platform === 'win32';
    const scriptName = isWindows ? 'caveman-statusline.ps1' : 'caveman-statusline.sh';
    const scriptPath = path.join(__dirname, scriptName);
    const command = isWindows
      ? `powershell -ExecutionPolicy Bypass -File "${scriptPath}"`
      : `bash "${scriptPath}"`;
    const statusLineSnippet =
      '"statusLine": { "type": "command", "command": ' + JSON.stringify(command) + ' }';
    output += "\n\n" +
      "STATUSLINE SETUP NEEDED: The caveman plugin includes a statusline badge showing active mode " +
      "(e.g. [CAVEMAN], [CAVEMAN:ULTRA]). It is not configured yet. " +
      "To enable, add this to " + path.join(claudeDir, 'settings.json') + ": " +
      statusLineSnippet + " " +
      "Proactively offer to set this up for the user on first interaction.";
  }
} catch (e) {
  // Silent fail
}

process.stdout.write(output);
