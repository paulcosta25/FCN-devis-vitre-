# Contribuer à caveman

Merci de considérer une contribution. Caveman est un skill multi-agents qui
fait parler 30+ agents de codage IA en prose compressée style homme des cavernes. La plupart des
contributions tombent dans l'un de ces trois domaines :

1. **Éditer la prose du skill** — changer comment caveman parle, ce que font les niveaux d'intensité.
2. **Ajouter un nouvel agent** — câbler un nouvel éditeur/CLI/IDE dans l'installateur unifié.
3. **Corriger les hooks ou l'installateur** — hooks Claude Code, l'installateur Node.

Caveman aime simple. Petite PR focalisée > grande réécriture.

---

## Ce que modifier (sources de vérité)

| Je veux changer... | Éditer ce fichier |
|---|---|
| Comportement Caveman (niveaux d'intensité, voix, règles) | `skills/caveman/SKILL.md` |
| Format message de commit Caveman | `skills/caveman-commit/SKILL.md` |
| Format revue de code Caveman | `skills/caveman-review/SKILL.md` |
| Logique compress Caveman | `skills/caveman-compress/SKILL.md` et `skills/caveman-compress/scripts/` |
| Guide de décision Cavecrew | `skills/cavecrew/SKILL.md` |
| Définitions sous-agents cavecrew | `agents/cavecrew-*.md` |
| Ajouter support pour un nouvel agent | `bin/install.js` (tableau PROVIDERS) |

---

## Lancer les tests

```bash
# Tests unit + e2e installateur (Node)
npm test

# Tests de sécurité skill compress (Python)
python3 -m unittest tests.test_compress_safety
```

---

## Directives pull-request

- **Conventional Commits** pour le sujet du commit.
- **Un seul sujet par PR.**
- **Montrer avant/après** pour les changements de prose dans un `SKILL.md`.

Les descriptions de PR n'ont pas besoin d'être longues. Style caveman OK. Juste dire quoi changer, pourquoi.

---

Caveman aime contribution. Vous apportez pierre, caveman mettre pierre dans tas. Tas
grandir. Cerveau toujours grand.
