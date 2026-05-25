# Caveman Hooks

These hooks are **bundled with the caveman plugin** and activate automatically when the plugin is installed. No manual setup required.

## What's Included

### `caveman-activate.js` — SessionStart hook

- Runs once when Claude Code starts
- Writes `full` to `$CLAUDE_CONFIG_DIR/.caveman-active` via the symlink-safe `safeWriteFlag` helper
- Emits caveman rules as hidden SessionStart context

### `caveman-mode-tracker.js` — UserPromptSubmit hook

- Fires on every user prompt, checks for `/caveman` commands and natural-language activation/deactivation
- Writes the active mode to the flag file when a caveman command is detected

### `caveman-statusline.sh` / `caveman-statusline.ps1` — Statusline badge script

- Reads `$CLAUDE_CONFIG_DIR/.caveman-active` and outputs a colored badge
- Shows `[CAVEMAN]`, `[CAVEMAN:ULTRA]`, `[CAVEMAN:WENYAN]`, etc.

## Uninstall

```bash
npx -y github:JuliusBrussee/caveman -- --uninstall
# or, from a clone:
node bin/install.js --uninstall
```
