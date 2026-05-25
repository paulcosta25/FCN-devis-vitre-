# cavecrew

Decision guide. When to delegate to caveman subagents instead of doing the work inline.

## What it does

Tells the main thread when to spawn a caveman-style subagent versus the vanilla equivalent.

Three subagents:

| Subagent | Job | Use when |
|----------|-----|----------|
| `cavecrew-investigator` | Locate code (read-only) | "Where is X defined / what calls Y" |
| `cavecrew-builder` | Surgical edit, 1-2 files | Scope is obvious, ≤2 files. |
| `cavecrew-reviewer` | Diff/file review | One-line findings with severity emoji |

## See also

- [`SKILL.md`](./SKILL.md) — full decision matrix
- [Caveman README](../../README.md) — repo overview
