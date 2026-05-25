# caveman-stats

Real session token receipts. No AI estimation.

## What it does

Reads the current Claude Code session log directly and reports actual input/output token usage plus estimated savings versus a non-caveman baseline. Numbers come from the JSONL session log on disk — the model itself does not compute or estimate them.

Each run also writes a lifetime-savings suffix file used by the statusline badge (`⛏ 12.4k`).

## How to invoke

```
/caveman-stats
```

## See also

- [`SKILL.md`](./SKILL.md) — hook contract and mechanics
- [Caveman README](../../README.md) — repo overview
