---
name: caveman-compress
description: >
  Compresse les fichiers mémoire en langage naturel (CLAUDE.md, todos, préférences) au format caveman
  pour économiser les tokens d'entrée. Préserve toute la substance technique, le code, les URLs et la structure.
  La version compressée écrase le fichier original. Sauvegarde lisible enregistrée sous FILE.original.md.
  Déclenchement : /caveman-compress CHEMIN ou "compresser fichier mémoire"
---

# Caveman Compress

## Objectif

Compresser les fichiers en langage naturel (CLAUDE.md, todos, préférences) en style homme des cavernes pour réduire les tokens d'entrée.

## Déclenchement

`/caveman-compress <chemin_fichier>` ou quand l'utilisateur demande de compresser un fichier mémoire.

## Processus

1. Les scripts de compression se trouvent dans `scripts/` (adjacent à ce SKILL.md).
2. Depuis le répertoire contenant ce SKILL.md, exécuter :

python3 -m scripts <chemin_absolu_fichier>

## Règles de compression

### Supprimer
- Articles : un, une, le, la, les, des
- Remplissage : juste, vraiment, basiquement, simplement
- Politesses : "bien sûr", "certainement", "avec plaisir"
- Hésitations : "il pourrait valoir la peine", "vous pourriez considérer"

### Préserver EXACTEMENT
- Blocs de code (``` et indentés)
- Code inline (`backtick`)
- URLs et liens
- Chemins de fichiers
- Commandes
- Termes techniques
- Variables d'environnement

### Limites

- Compresser UNIQUEMENT les fichiers en langage naturel (.md, .txt)
- NE JAMAIS modifier : .py, .js, .ts, .json, .yaml, .toml, .env
- Fichier original sauvegardé sous FILE.original.md avant écrasement
