---
name: review-claudemd
description: Analyser les conversations récentes pour trouver des améliorations pour les fichiers CLAUDE.md.
---

# Révision du CLAUDE.md depuis l'historique des conversations

Analyse les conversations récentes pour améliorer les fichiers CLAUDE.md global (~/.claude/CLAUDE.md) et local (projet).

## Étape 1 : Trouver l'historique des conversations

L'historique des conversations du projet est dans `~/.claude/projects/`. Le nom du dossier est le chemin du projet avec les slashes remplacés par des tirets.

```bash
PROJECT_PATH=$(pwd | sed 's|/|-|g' | sed 's|^-||')
CONVO_DIR=~/.claude/projects/-${PROJECT_PATH}
ls -lt "$CONVO_DIR"/*.jsonl | head -20
```

## Étape 2 : Extraire les conversations récentes

Extraire les 15-20 conversations les plus récentes dans un répertoire temporaire.

## Étape 3 : Analyser

Pour chaque batch de conversations, analyser :
1. Les instructions existantes qui ont été violées (besoin de renforcement)
2. Les patterns à ajouter au CLAUDE.md LOCAL (spécifiques au projet)
3. Les patterns à ajouter au CLAUDE.md GLOBAL (s'applique partout)
4. Ce qui semble obsolète ou inutile

## Étape 4 : Agréger les résultats

Présenter les résultats sous forme de tableaux ou de points. Demander à l'utilisateur s'il veut que les modifications soient rédigées.
