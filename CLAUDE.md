# CLAUDE.md — caveman

## Le README est un artefact produit

README = porte d'entrée du produit. Les non-techniciens le lisent pour décider si caveman vaut l'installation. Traiter comme une copie d'interface utilisateur.

**Règles pour tout changement README :**

- Lisible par les utilisateurs non-agents-IA. Si vous écrivez "Le hook SessionStart injecte le contexte système", invisible pour la plupart — traduire.
- Garder les exemples Avant/Après en premier. C'est l'argument de vente.
- Le tableau d'installation toujours complet + précis. Une commande d'installation cassée coûte un vrai utilisateur.
- Le tableau "Ce que vous obtenez" doit être synchronisé avec le code réel. Fonctionnalité livrée ou supprimée → mettre à jour le tableau.
- Préserver la voix. Homme des cavernes parle dans le README exprès. "Cerveau toujours grand." "Coût diminue pour toujours." "Une pierre. C'est tout." — marque intentionnelle. Ne pas normaliser.
- Les chiffres de benchmark viennent de vraies exécutions dans `benchmarks/` et `evals/`. Ne jamais inventer ou arrondir. Relancer si doute.
- Ajouter un nouvel agent au tableau d'installation → ajouter un bloc détail dans la section `<details>` ci-dessous.
- Vérification lisibilité avant tout commit README : un non-programmeur comprendrait-il et installerait-il en 60 secondes ?

---

## Aperçu du projet

Caveman fait répondre les agents de codage IA en prose compressée style homme des cavernes — réduit ~65-75% des tokens de sortie, précision technique complète. Livré comme plugin Claude Code, plugin Codex, extension Gemini CLI, fichiers de règles agent pour Cursor, Windsurf, Cline, Copilot, 40+ autres via `npx skills`.

---

## Ce qui se trouve où

Structure post-nettoyage. Sources de vérité en haut, miroirs de distribution en dessous, artefacts de build dans `dist/`, docs humaines à côté de chaque skill.

```
caveman/
├── README.md                    # Porte d'entrée (pitch produit)
├── INSTALL.md                   # Commandes d'installation par agent
├── CONTRIBUTING.md              # Guide dev
├── CLAUDE.md                    # Ce fichier (instructions mainteneur)
├── AGENTS.md / GEMINI.md        # Fichiers autodiscovery (doivent rester à la racine)
│
├── install.sh / install.ps1     # Shims 30 lignes → bin/install.js
│
├── bin/                         # Installateur unifié
│   ├── install.js               # Source unique pour tous les 30+ agents (tableau PROVIDERS)
│   └── lib/settings.js          # Lecteur/écrivain settings.json tolérant JSONC
│
├── skills/                      # TOUS les skills, source unique de vérité
│   ├── caveman/{SKILL.md, README.md}
│   ├── caveman-commit/{SKILL.md, README.md}
│   ├── caveman-review/{SKILL.md, README.md}
│   ├── caveman-help/{SKILL.md, README.md}
│   ├── caveman-stats/{SKILL.md, README.md}
│   ├── caveman-compress/{SKILL.md, README.md, scripts/}
│   └── cavecrew/{SKILL.md, README.md}
│
├── agents/                      # Sous-agents cavecrew (source unique — gardés à la racine pour auto-découverte plugin)
├── commands/                    # Stubs de commandes TOML Codex/Gemini (racine pour auto-découverte plugin)
│
├── src/                         # Source interne — pas auto-découvert par plugin
│   ├── hooks/                   # Hooks Claude Code (installateur lit ici)
│   ├── rules/                   # Corps de règle d'auto-activation (source unique)
│   ├── tools/                   # caveman-init.js (écrivain de règle par-repo)
│   └── mcp-servers/             # Middleware MCP caveman-shrink publié sur npm
│
├── .claude-plugin/              # Manifeste plugin Claude Code (REQUIS à la racine)
├── plugins/caveman/             # Distribution plugin Claude Code (mirroré par CI)
│   ├── skills/                  # ← depuis skills/
│   └── agents/                  # ← depuis agents/
│
├── dist/                        # Artefacts de build (gitignored)
│   └── caveman.skill            # ZIP de skills/caveman/, reconstruit par CI
│
├── tests/                       # Tous les tests (Node + Python)
├── benchmarks/                  # Vraies mesures de tokens via API Claude
├── evals/                       # Harnais d'évaluation à trois bras
├── docs/                        # Site de docs utilisateur
└── .github/workflows/           # Sync CI
```

---

## Structure des fichiers et qui possède quoi

### Fichiers sources uniques de vérité — éditer uniquement ceux-ci

| Fichier | Ce qu'il contrôle |
|------|-----------------||
| `skills/caveman/SKILL.md` | Comportement Caveman : niveaux d'intensité, règles, mode wenyan, auto-clarté, persistance. Seul fichier à éditer pour les changements de comportement. |
| `src/rules/caveman-activate.md` | Corps de règle d'auto-activation toujours active. Consommé par `src/tools/caveman-init.js` quand un utilisateur lance `npx caveman --with-init` (fichiers de règles IDE par-repo). Éditer ici, pas dans aucune copie de règle par-agent. |
| `src/rules/caveman-openclaw-bootstrap.md` | Extrait bootstrap délimité par marqueur ajouté à `~/.openclaw/workspace/SOUL.md` par `bin/lib/openclaw.js`. Pilote caveman toujours actif via la passerelle OpenClaw. Doit inclure le SENTINEL `Respond terse like smart caveman` et rester bien en dessous du cap 12K-par-fichier-bootstrap d'OpenClaw. |
| `bin/lib/openclaw.js` | Aide installation/désinstallation OpenClaw. Fusion frontmatter (`version`, `always: true`), ajout/suppression marqueur SOUL.md, idempotent. Partagé par `bin/install.js` et `src/tools/caveman-init.js`. |
| `skills/caveman-commit/SKILL.md` | Comportement message de commit Caveman. Skill entièrement indépendant. |
| `skills/caveman-review/SKILL.md` | Comportement revue de code Caveman. Skill entièrement indépendant. |
| `skills/caveman-help/SKILL.md` | Carte de référence rapide. Affichage unique, pas un mode persistant. |
| `skills/caveman-compress/SKILL.md` | Comportement sous-skill de compression. |
| `skills/cavecrew/SKILL.md` | Guide de décision Cavecrew — quand déléguer aux sous-agents caveman vs vanille. Éditer uniquement ici. |
| `agents/cavecrew-investigator.md` | Sous-agent localisateur en lecture seule (haiku). Contrat de sortie : `chemin:ligne — symbole — note`. |
| `agents/cavecrew-builder.md` | Sous-agent éditeur chirurgical 1-2 fichiers. Refuse portée 3+ fichiers. |
| `agents/cavecrew-reviewer.md` | Sous-agent réviseur diff/fichier (haiku). Findings en une ligne avec emoji sévérité. |
| `src/plugins/opencode/plugin.js` | Plugin natif opencode. Module Bun ESM — `session.created` écrit drapeau, `tui.prompt.append` parse activation slash/langage-naturel et ajoute renforcement par-prompt. Réutilise `caveman-config.js` via `createRequire`. |
| `src/plugins/opencode/commands/*.md` | Six templates de commande slash opencode (`/caveman`, `/caveman-{commit,review,compress,stats,help}`). |

### Auto-généré / auto-synchronisé — ne pas éditer directement

Nous avons supprimé les miroirs dotdir spécifiques aux agents à la racine du dépôt (`.cursor/`, `.windsurf/`, `.clinerules/`, `.github/copilot-instructions.md`, `caveman/SKILL.md` racine). Ils n'ont jamais été lus par l'installateur — utilisés uniquement pour auto-appliquer caveman à ce dépôt quand un mainteneur l'ouvrait dans Cursor/Windsurf/Cline. Les devs qui veulent caveman dans leur éditeur lors de l'édition de ce dépôt devraient lancer `npx caveman --with-init` une fois (écrit les fichiers de règles par-repo depuis `src/rules/caveman-activate.md` via `src/tools/caveman-init.js`). Pour les installations par-utilisateur via le CLI skills upstream, `npx caveman --only <agent>` lance `npx skills add ... -a <profil>`.

Quelques restes dotdir (`.junie/`, `.kiro/`, `.roo/`, `.agents/`) contiennent encore un miroir `cavecrew/SKILL.md` périmé d'avant le nettoyage. Ils ne sont lus par rien dans le chemin d'installation actuel ; supprimer à vue, pas de migration nécessaire.

Ce qui reste est la distribution du plugin Claude Code (requis par le chargeur de plugin) et le ZIP de release.

| Fichier | Synchronisé depuis |
|------|-------------|
| `plugins/caveman/skills/caveman/SKILL.md` | `skills/caveman/SKILL.md` |
| `plugins/caveman/skills/caveman-compress/SKILL.md` (+ `scripts/`) | `skills/caveman-compress/SKILL.md` (+ `scripts/`) |
| `plugins/caveman/skills/cavecrew/SKILL.md` | `skills/cavecrew/SKILL.md` |
| `plugins/caveman/agents/cavecrew-*.md` | `agents/cavecrew-*.md` |
| `dist/caveman.skill` | ZIP du répertoire `skills/caveman/` (gitignored ; reconstruit par CI à la release) |

---

## Workflow de sync CI

`.github/workflows/sync-skill.yml` se déclenche sur push main quand `skills/**/SKILL.md` ou `agents/cavecrew-*.md` change.

Ce qu'il fait :
1. Copie `skills/caveman/SKILL.md` et `skills/cavecrew/SKILL.md` dans leurs miroirs `plugins/caveman/skills/<nom>/` pour que le chargeur de plugin Claude Code voit le comportement le plus récent.
2. Copie `skills/caveman-compress/SKILL.md` et ses `scripts/` dans `plugins/caveman/skills/caveman-compress/`.
3. Copie `agents/cavecrew-*.md` dans `plugins/caveman/agents/`.
4. Reconstruit `dist/caveman.skill` (ZIP de `skills/caveman/`) pour l'artefact de release.
5. Commit et push avec `[skip ci]` pour éviter les boucles.

---

## Système de hooks (Claude Code)

Trois hooks dans `src/hooks/` plus un module partagé `caveman-config.js` et un marqueur CommonJS `package.json`.

---

## Règles clés pour les agents travaillant ici

- Éditer `skills/<nom>/SKILL.md` pour les changements de comportement. Ne jamais éditer les copies synchronisées sous `plugins/caveman/skills/`.
- Éditer `src/rules/caveman-activate.md` pour les changements de règle d'auto-activation.
- Les docs humaines par-skill se trouvent dans `skills/<nom>/README.md`. Le corps orienté LLM est dans `SKILL.md`. Ne pas les fusionner.
- Les artefacts de build vont dans `dist/`. Ne jamais vérifier des fichiers dans `dist/` manuellement.
- README est le fichier le plus important pour l'impact utilisateur.
- Les chiffres de benchmark et d'éval doivent être réels. Ne jamais fabriquer ou estimer.
