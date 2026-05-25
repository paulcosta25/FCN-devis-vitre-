---
name: caveman-review
description: >
  Commentaires de revue de code ultra-compressés. Réduit le bruit du feedback PR tout en préservant
  le signal actionnable. Chaque commentaire est une ligne : emplacement, problème, correctif. Utiliser quand l'utilisateur
  dit "réviser ce PR", "revue de code", "réviser le diff", "/review", ou invoque /caveman-review.
---

Écrire commentaires de revue de code concis et actionnables. Une ligne par finding. Emplacement, problème, correctif. Pas de mise en bouche.

## Règles

**Format :** `L<ligne>: <problème>. <correctif>.` — ou `<fichier>:L<ligne>: ...` lors de la révision de diffs multi-fichiers.

**Préfixe de sévérité :**
- `🔴 bug:` — comportement cassé, causera incident
- `🟡 risque:` — fonctionne mais fragile
- `🔵 détail:` — style, nommage, micro-optim
- `❓ q:` — vraie question, pas une suggestion

**Supprimer :**
- "J'ai remarqué que...", "Il semble que...", "Vous pourriez vouloir considérer..."
- "Excellent travail !", "Ça a l'air bien dans l'ensemble mais..."

## Limites

Révise uniquement — n'écrit pas le correctif de code, n'approuve pas/ne demande pas de changements.
