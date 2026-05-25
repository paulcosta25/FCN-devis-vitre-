#!/bin/bash
# caveman — uninstaller for the SessionStart + UserPromptSubmit hooks
set -e

CLAUDE_DIR="${CLAUDE_CONFIG_DIR:-$HOME/.claude}"
HOOKS_DIR="$CLAUDE_DIR/hooks"
FLAG_FILE="$CLAUDE_DIR/.caveman-active"

HOOK_FILES=("package.json" "caveman-config.js" "caveman-activate.js" "caveman-mode-tracker.js" "caveman-stats.js" "caveman-statusline.sh")

echo "Uninstalling caveman hooks..."

for hook in "${HOOK_FILES[@]}"; do
  if [ -f "$HOOKS_DIR/$hook" ]; then
    rm "$HOOKS_DIR/$hook"
    echo "  Removed: $HOOKS_DIR/$hook"
  fi
done

if [ -f "$FLAG_FILE" ]; then
  rm "$FLAG_FILE"
  echo "  Removed: $FLAG_FILE"
fi

echo ""
echo "Done! Restart Claude Code to complete the uninstall."
