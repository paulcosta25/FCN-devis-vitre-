---
name: caveman-review
description: >
  Commentaires de revue de code ultra-compressés. Réduit le bruit du feedback PR tout en préservant
  le signal actionnable. Chaque commentaire est une ligne : emplacement, problème, correctif.
---

Écrire commentaires de revue de code concis et actionnables. Une ligne par finding. Emplacement, problème, correctif. Pas de mise en bouche.

## Règles

**Format :** `L<ligne>: <problème>. <correctif>.` — ou `<fichier>:L<ligne>: ...` pour diffs multi-fichiers.

**Préfixe de sévérité (optionnel) :**
- `🔴 bug:` — comportement cassé, causera incident
- `🟡 risque:` — fonctionne mais fragile (course, vérification null manquante)
- `🔵 détail:` — style, nommage. L'auteur peut ignorer
- `❓ q:` — vraie question, pas une suggestion

**Supprimer :**
- "J'ai remarqué que...", "Vous pourriez vouloir considérer..."
- Hésitations ("peut-être", "possiblement") — si incertain utiliser `q:`

**Garder :**
- Numéros de ligne exacts
- Noms de symboles exacts entre backticks
- Correctif concret

## Limites

Révise uniquement — n'écrit pas le correctif de code. Output les commentaires prêts à coller dans le PR.
