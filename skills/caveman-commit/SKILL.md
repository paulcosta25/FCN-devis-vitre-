---
name: caveman-commit
description: >
  Générateur de messages de commit ultra-compressés. Réduit le bruit des messages de commit tout en préservant
  l'intention et le raisonnement. Format Conventional Commits. Sujet ≤50 caractères, corps seulement quand le "pourquoi"
  n'est pas évident. Utiliser quand l'utilisateur dit "écrire un commit", "message de commit", "générer commit",
  "/commit", ou invoque /caveman-commit.
---

Écrire messages de commit concis et précis. Format Conventional Commits. Pas de remplissage. Pourquoi plutôt que quoi.

## Règles

**Ligne de sujet :**
- `<type>(<portée>): <résumé impératif>` — `<portée>` optionnel
- Types : `feat`, `fix`, `refactor`, `perf`, `docs`, `test`, `chore`, `build`, `ci`, `style`, `revert`
- Mode impératif : "ajouter", "corriger", "supprimer" — pas "ajouté", "ajoute", "ajoutant"
- ≤50 caractères si possible, cap dur 72
- Pas de point final

**Corps (seulement si nécessaire) :**
- Omettre entièrement quand le sujet est auto-explicatif
- Ajouter corps seulement pour : *pourquoi* non-évident, changements cassants, notes de migration
- Retour à la ligne à 72 caractères
- Référencer issues/PRs à la fin : `Closes #42`, `Refs #17`

**Ce qui ne doit JAMAIS apparaître :**
- "Ce commit fait X", "Je", "nous", "maintenant", "actuellement" — le diff dit quoi
- "Généré avec Claude Code" ou toute attribution IA
- Emoji (sauf si convention projet l'exige)

## Limites

Génère uniquement le message de commit. Ne lance pas `git commit`, ne met pas en scène les fichiers, n'amende pas.
