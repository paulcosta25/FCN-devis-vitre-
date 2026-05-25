#!/bin/bash
# caveman — one-command hook installer for Claude Code
set -e

FORCE=0
for arg in "$@"; do
  case "$arg" in
    --force|-f) FORCE=1 ;;
  esac
done

if ! command -v node >/dev/null 2>&1; then
  echo "ERROR: 'node' is required to install the caveman hooks."
  exit 1
fi

CLAUDE_DIR="${CLAUDE_CONFIG_DIR:-$HOME/.claude}"
HOOKS_DIR="$CLAUDE_DIR/hooks"
SETTINGS="$CLAUDE_DIR/settings.json"

HOOK_FILES=("package.json" "caveman-config.js" "caveman-activate.js" "caveman-mode-tracker.js" "caveman-stats.js" "caveman-statusline.sh")

SCRIPT_DIR=""
if [ -n "${BASH_SOURCE[0]:-}" ] && [ -f "${BASH_SOURCE[0]}" ]; then
  SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" 2>/dev/null && pwd)"
fi

mkdir -p "$HOOKS_DIR"

for hook in "${HOOK_FILES[@]}"; do
  if [ -n "$SCRIPT_DIR" ] && [ -f "$SCRIPT_DIR/$hook" ]; then
    cp "$SCRIPT_DIR/$hook" "$HOOKS_DIR/$hook"
  fi
  echo "  Installed: $HOOKS_DIR/$hook"
done

chmod +x "$HOOKS_DIR/caveman-statusline.sh"

echo ""
echo "Done! Restart Claude Code to activate."
