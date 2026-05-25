# CLAUDE.md — caveman

## Le README est un artefact produit

README = porte d'entrée du produit. Les non-techniciens le lisent pour décider si caveman vaut l'installation. Traiter comme une copie d'interface utilisateur.

**Règles pour tout changement README :**

- Lisible par les utilisateurs non-agents-IA.
- Garder les exemples Avant/Après en premier. C'est l'argument de vente.
- Le tableau d'installation toujours complet + précis.
- Le tableau "Ce que vous obtenez" doit être synchronisé avec le code réel.
- Préserver la voix. Homme des cavernes parle dans le README exprès. "Cerveau toujours grand." "Coût diminue pour toujours." — marque intentionnelle. Ne pas normaliser.
- Les chiffres de benchmark viennent de vraies exécutions dans `benchmarks/` et `evals/`. Ne jamais inventer ou arrondir.

---

## Aperçu du projet

Caveman fait répondre les agents de codage IA en prose compressée style homme des cavernes — réduit ~65-75% des tokens de sortie, précision technique complète. Livré comme plugin Claude Code, plugin Codex, extension Gemini CLI, fichiers de règles agent pour Cursor, Windsurf, Cline, Copilot, 40+ autres via `npx skills`.

---

## Ce qui se trouve où

```
caveman/
├── README.md                    # Porte d'entrée (pitch produit)
├── INSTALL.md                   # Commandes d'installation par agent
├── CONTRIBUTING.md              # Guide dev
├── CLAUDE.md                    # Ce fichier (instructions mainteneur)
├── AGENTS.md / GEMINI.md        # Fichiers autodiscovery
├── install.sh / install.ps1     # Shims 30 lignes → bin/install.js
├── bin/                         # Installateur unifié
├── skills/                      # TOUS les skills, source unique
├── agents/                      # Sous-agents cavecrew
├── src/                         # Source interne
└── .github/workflows/           # Sync CI
```

---

## Système de hooks (Claude Code)

Trois hooks dans `src/hooks/` plus un module partagé `caveman-config.js`. Communiquent via fichier drapeau à `$CLAUDE_CONFIG_DIR/.caveman-active`.

- **caveman-activate.js** — Hook SessionStart : écrit mode actif, émet règles caveman en stdout caché
- **caveman-mode-tracker.js** — Hook UserPromptSubmit : gère slash-commands et activation langage naturel
- **caveman-statusline.sh** — Badge barre de statut : affiche `[CAVEMAN]` (orange)

---

## Règles clés pour les agents travaillant ici

- Éditer `skills/<nom>/SKILL.md` pour les changements de comportement. Ne jamais éditer les copies synchronisées sous `plugins/caveman/skills/`.
- Les artefacts de build vont dans `dist/`. Ne jamais vérifier des fichiers dans `dist/` manuellement.
- README est le fichier le plus important pour l'impact utilisateur. Optimiser pour les lecteurs non-techniques. Préserver la voix caveman.
- Les chiffres de benchmark et d'éval doivent être réels. Ne jamais fabriquer ou estimer.
- Les fichiers de hook doivent être silencieux sur toutes les erreurs système de fichiers.
- Toute nouvelle écriture de fichier drapeau doit passer par `safeWriteFlag()` dans `caveman-config.js`.
- Les hooks doivent respecter la variable d'environnement `CLAUDE_CONFIG_DIR`, pas coder en dur `~/.claude`.
