# Contributing to caveman

Thanks for considering a contribution. Caveman is a multi-agent skill that
makes 30+ AI coding agents talk in compressed caveman-style prose. Most
contributions fall into one of three buckets:

1. **Editing skill prose** — change how caveman speaks, what intensity levels do, what slash commands trigger.
2. **Adding a new agent** — wire a fresh editor/CLI/IDE into the unified installer.
3. **Fixing the hooks or installer** — Claude Code hooks, the Node installer, the per-repo init script.

Caveman like simple. Small focused PR > big rewrite.

---

## Quick orientation

The repo distributes one skill (caveman) plus a handful of sub-skills
(caveman-commit, caveman-review, caveman-compress, cavecrew-*) to many
agents through different distribution mechanisms (Claude Code plugin, Codex
plugin, Gemini extension, Cursor/Windsurf/Cline rule files, `npx skills` for
the long tail). A single Node installer at `bin/install.js` detects which
agents are on the user's machine and installs the right thing for each.

Sources of truth live at the **top level** of the repo. Agent-specific
copies live under `plugins/caveman/` and similar mirror dirs — those are
**rebuilt by CI** and edits there are reverted.

---

## What to edit (sources of truth)

| I want to change... | Edit this file |
|---|---|
| Caveman behavior (intensity levels, voice, rules) | `skills/caveman/SKILL.md` |
| Caveman commit-message format | `skills/caveman-commit/SKILL.md` |
| Caveman code-review format | `skills/caveman-review/SKILL.md` |
| Caveman compress logic | `skills/caveman-compress/SKILL.md` and `skills/caveman-compress/scripts/` |
| Caveman quick-reference card | `skills/caveman-help/SKILL.md` |
| Cavecrew decision guide | `skills/cavecrew/SKILL.md` |
| cavecrew subagent definitions | `agents/cavecrew-investigator.md`, `agents/cavecrew-builder.md`, `agents/cavecrew-reviewer.md` |
| Auto-activation rule body | `src/rules/caveman-activate.md` |
| Add support for a new agent | `bin/install.js` (PROVIDERS array) |
| Per-repo init script | `src/tools/caveman-init.js` |
| Claude Code hooks | `src/hooks/caveman-activate.js`, etc. |

---

## Running tests

```bash
npm test
python3 -m unittest tests.test_compress_safety
node tests/test_caveman_init.js
node tests/test_symlink_flag.js
```

---

## Pull-request guidelines

- **Conventional Commits** for the commit subject.
- **One concern per PR.**
- **Show before/after** for prose changes to any `SKILL.md`.

Caveman like contribution. You bring rock, caveman put rock in pile.
