<p align="center">
  <img src="https://em-content.zobj.net/source/apple/391/rock_1faa8.png" width="120" />
</p>

<h1 align="center">caveman</h1>

<p align="center">
  <strong>pourquoi utiliser beaucoup de tokens quand peu suffire</strong>
</p>

<p align="center">
  <a href="https://github.com/JuliusBrussee/caveman/stargazers"><img src="https://img.shields.io/github/stars/JuliusBrussee/caveman?style=flat&color=yellow" alt="Étoiles"></a>
  <a href="https://github.com/JuliusBrussee/caveman/commits/main"><img src="https://img.shields.io/github/last-commit/JuliusBrussee/caveman?style=flat" alt="Dernier commit"></a>
  <a href="LICENSE"><img src="https://img.shields.io/github/license/JuliusBrussee/caveman?style=flat" alt="Licence"></a>
</p>

<p align="center">
  <a href="#avant--après">Avant/Après</a> •
  <a href="#installation">Installation</a> •
  <a href="#ce-que-vous-obtenez">Ce que vous obtenez</a> •
  <a href="#benchmarks">Benchmarks</a> •
  <a href="./INSTALL.md">Guide d'installation complet</a>
</p>

---

Un skill/plugin [Claude Code](https://docs.anthropic.com/en/docs/claude-code) (aussi Codex, Gemini, Cursor, Windsurf, Cline, Copilot, 30+ autres) qui fait parler l'agent comme un homme des cavernes — réduit **~75% des tokens de sortie**, garde toute la précision technique. Cerveau toujours grand. Bouche petite.

## Avant / Après

<table>
<tr>
<td width="50%">

### 🗣️ Claude Normal (69 tokens)

> "La raison pour laquelle votre composant React se re-rend est probablement parce que vous créez une nouvelle référence d'objet à chaque cycle de rendu. Quand vous passez un objet inline comme prop, la comparaison superficielle de React le voit comme un objet différent à chaque fois, ce qui déclenche un re-rendu. Je vous recommande d'utiliser useMemo pour mémoïser l'objet."

</td>
<td width="50%">

### <img src="docs/assets/dancing-rock.svg" width="20" height="20" alt="pierre"/> Claude Homme des Cavernes (19 tokens)

> "Nouvelle ref objet à chaque rendu. Objet inline en prop = nouvelle ref = re-rendu. Envelopper dans `useMemo`."

</td>
</tr>
<tr>
<td>

### 🗣️ Claude Normal

> "Bien sûr ! Je serais ravi de vous aider avec ça. Le problème que vous rencontrez est très probablement causé par votre middleware d'authentification qui ne valide pas correctement l'expiration du token. Laissez-moi regarder et suggérer un correctif."

</td>
<td>

### <img src="docs/assets/dancing-rock.svg" width="20" height="20" alt="pierre"/> Claude Homme des Cavernes

> "Bug dans middleware auth. Vérification expiration token utilise `<` pas `<=`. Correctif :"

</td>
</tr>
</table>

**Même correctif. 75% moins de mots. Cerveau toujours grand.**

```
┌─────────────────────────────────────┐
│  TOKENS ÉCONOMISÉS     ████████ 75% │
│  PRÉCISION TECHNIQUE   ████████ 100%│
│  GAIN DE VITESSE       ████████ ~3x │
│  AMBIANCE              ████████ OOG │
└─────────────────────────────────────┘
```

Choisissez votre niveau de grognement — `lite` (supprimer le remplissage), `full` (mode homme des cavernes par défaut), `ultra` (télégraphique), ou `wenyan` (chinois classique, encore plus court). Un seul commande pour changer. Coût diminue pour toujours.

<table align="center">
<tr><td>

### <img src="docs/assets/dancing-rock.svg" width="22" height="22" alt="pierre"/> Vous aimez cette astuce ? Obtenez maintenant l'agent complet — **caveman-code**

Ce skill réduit ce que l'agent **dit**. **[caveman-code](https://github.com/JuliusBrussee/caveman-code)** réduit **tout** — agent de codage terminal complet, homme des cavernes de la tête aux pieds. **~2× moins de tokens que Codex** sur des tâches identiques. 20+ fournisseurs · mode plan · boucle de but autopilote · MIT.

```bash
npm install -g @juliusbrussee/caveman-code
```

[**▶ Essayer caveman-code maintenant →**](https://github.com/JuliusBrussee/caveman-code) — *pourquoi utiliser beaucoup tokens quand agent entier économiser*

</td></tr>
</table>

## Installation

Une ligne. Trouve chaque agent. Installe pour chacun.

```bash
# macOS / Linux / WSL / Git Bash
curl -fsSL https://raw.githubusercontent.com/JuliusBrussee/caveman/main/install.sh | bash

# Windows (PowerShell 5.1+)
irm https://raw.githubusercontent.com/JuliusBrussee/caveman/main/install.ps1 | iex
```

~30 secondes. Nécessite Node ≥18. Ignorer les agents non installés. Sûr à relancer.

**Déclenchement :** tapez `/caveman` ou dites "parle comme homme des cavernes". Arrêter avec "mode normal".

Un seul agent, commande manuelle, ou l'un des 30+ autres agents → [**INSTALL.md**](./INSTALL.md)
Installation échouée ? Ouvrir agent, dire *"Lis CLAUDE.md et INSTALL.md, installe caveman pour moi."* Agent répare son propre cerveau.

## Ce que vous obtenez

| Skill | Description |
|---|---|
| `/caveman [lite\|full\|ultra\|wenyan]` | Compresse chaque réponse. Niveaux persistants jusqu'à fin de session. |
| `/caveman-commit` | Messages de commit Conventional Commit, sujet ≤50 caractères. Pourquoi plutôt que quoi. |
| `/caveman-review` | Commentaires PR en une ligne : `L42: 🔴 bug: user null. Ajouter garde.` |
| `/caveman-stats` | Utilisation réelle des tokens + économies cumulées + USD. Ligne tweetable via `--share`. |
| `/caveman-compress <fichier>` | Réécrit fichier mémoire (ex. `CLAUDE.md`) en mode homme des cavernes. Réduit ~46% des tokens d'entrée à chaque session. Code/URLs/chemins préservés octet par octet. |
| `caveman-shrink` | Middleware MCP. Enveloppe tout serveur MCP, compresse les descriptions d'outils. [npm](https://www.npmjs.com/package/caveman-shrink). |
| `cavecrew-*` | Sous-agents homme des cavernes (investigateur/constructeur/réviseur). ~60% moins de tokens que vanille, contexte principal dure plus longtemps. |

**Badge barre de statut** — Claude Code affiche `[CAVEMAN] ⛏ 12.4k` (tokens économisés à vie). Mis à jour à chaque `/caveman-stats`. Définir `CAVEMAN_STATUSLINE_SAVINGS=0` pour désactiver.

Auto-activation à chaque session : Claude Code, Codex, Gemini (intégré). Cursor / Windsurf / Cline / Copilot obtiennent des fichiers de règles toujours actifs via `--with-init`. Autres agents déclenchent avec `/caveman` par session. Matrice complète des fonctionnalités dans [INSTALL.md](./INSTALL.md#ce-que-vous-obtenez).

## Benchmarks

Comptages réels de tokens depuis l'API Claude. Réduction moyenne de **65% des tokens de sortie** sur 10 prompts (fourchette 22-87%).

<!-- BENCHMARK-TABLE-START -->
| Tâche | Normal | Caveman | Économisé |
|------|-------:|--------:|------:|
| Expliquer bug re-rendu React | 1180 | 159 | 87% |
| Corriger expiration token middleware auth | 704 | 121 | 83% |
| Configurer pool de connexions PostgreSQL | 2347 | 380 | 84% |
| Expliquer git rebase vs merge | 702 | 292 | 58% |
| Refactoriser callback en async/await | 387 | 301 | 22% |
| Architecture : microservices vs monolithe | 446 | 310 | 30% |
| Réviser PR pour problèmes de sécurité | 678 | 398 | 41% |
| Build multi-étapes Docker | 1042 | 290 | 72% |
| Déboguer condition de course PostgreSQL | 1200 | 232 | 81% |
| Implémenter Error Boundary React | 3454 | 456 | 87% |
| **Moyenne** | **1214** | **294** | **65%** |
<!-- BENCHMARK-TABLE-END -->

Données brutes et script de reproduction : [`benchmarks/`](./benchmarks/). Harnais d'évaluation à trois bras (baseline / terse / skill) dans [`evals/`](./evals/) — caveman comparé à `Répondre de manière concise.` pas au défaut verbeux, donc le delta est honnête.

**Résultats caveman-compress** (vrais fichiers mémoire) :

| Fichier | Original | Compressé | Économisé |
|---|---:|---:|---:|
| `claude-md-preferences.md` | 706 | 285 | **59,6%** |
| `project-notes.md` | 1145 | 535 | **53,3%** |
| `claude-md-project.md` | 1122 | 636 | **43,3%** |
| `todo-list.md` | 627 | 388 | **38,1%** |
| `mixed-with-code.md` | 888 | 560 | **36,9%** |
| **Moyenne** | **898** | **481** | **46%** |

> [!IMPORTANT]
> Caveman affecte uniquement les tokens de sortie — tokens de réflexion/raisonnement intacts. Caveman pas rendre cerveau plus petit. Caveman rendre *bouche* plus petite. Plus grand gain est **lisibilité et vitesse**, économies de coût en bonus.

Un article de mars 2026 ["Brevity Constraints Reverse Performance Hierarchies in Language Models"](https://arxiv.org/abs/2604.00025) a trouvé que contraindre les grands modèles à des réponses brèves **améliorait la précision de 26 points** sur certains benchmarks. Verbeux pas toujours mieux. Parfois moins de mots = plus correct.

## Comment ça marche

1. Installation dépose fichier skill dans l'agent.
2. Skill dit à l'agent : supprimer remplissage, garder substance, utiliser fragments.
3. Pour Claude Code, hook écrit aussi petit fichier drapeau à chaque session — agent voit drapeau, parle homme des cavernes depuis message un. Pas besoin dire `/caveman`.
4. Commande stats lit journal de session Claude Code, compte tokens économisés, écrit nombre dans barre de statut.
5. Sous-skill caveman-compress réécrit fichiers mémoire (CLAUDE.md, notes projet) pour que chaque session démarre avec contexte plus petit. Économise tokens pour toujours, pas seulement une réponse.

Détails mainteneur (architecture hooks, propriété fichiers, sync CI) dans [CLAUDE.md](./CLAUDE.md).

## Homard, rencontre Pierre 🦞 <img src="docs/assets/dancing-rock.svg" width="22" height="22" alt="pierre"/>

[**OpenClaw**](https://openclaw.ai) la passerelle auto-hébergée. Une boîte, beaucoup d'agents dedans (Claude Code, Codex, Pi, OpenCode), connectés à votre Slack / Discord / iMessage / Telegram / peu importe. Slogan : *"La voie du homard."* Homard fort. Homard intelligent. Homard aussi parle beaucoup.

Caveman enseigne la brièveté au homard — même installateur canonique, limité à un agent :

```bash
# macOS / Linux / WSL
curl -fsSL https://raw.githubusercontent.com/JuliusBrussee/caveman/main/install.sh | bash -s -- --only openclaw

# Windows (PowerShell) : pas de Node ? installer Node ≥18 d'abord, puis
npx -y github:JuliusBrussee/caveman -- --only openclaw
```

Deux choses se passent, pas plus :

1. **Dépôt skill** dans `~/.openclaw/workspace/skills/caveman/SKILL.md` — frontmatter conforme spec (`version`, `always: true`), découvrable par `openclaw skills list`. Skill pas auto-injecté (OpenClaw charge skill à la demande) — c'est pourquoi on fait aussi l'étape 2.
2. **Nudge SOUL.md.** Petit bloc délimité par marqueur ajouté à `~/.openclaw/workspace/SOUL.md`. OpenClaw injecte SOUL.md dans *chaque tour* sous "Contexte Projet" (12K-par-fichier, 60K total — bloc bien en dessous). Homard concis depuis message un. Pas de `/caveman` par session. Pas de rappel.

```
~/.openclaw/workspace/
├── skills/caveman/SKILL.md   ← ensemble complet de règles, chargement à la demande
└── SOUL.md                    ← <!-- caveman-begin --> ... <!-- caveman-end -->
                                  ↑ auto-injecté chaque tour
```

Chemin de workspace personnalisé ? `OPENCLAW_WORKSPACE=/votre/chemin` avant la commande. Désinstallation : même commande avec `--uninstall` — dossier skill supprimé, bloc SOUL.md retiré proprement, reste du contenu workspace intact. Réexécutions idempotentes (frontmatter pas doublé, bloc marqueur pas dupliqué).

Pince de homard toujours affûtée. Bouche de homard maintenant petite. Cerveau toujours grand.

## Écosystème Caveman

Cinq outils. Une philosophie : **agent fait plus avec moins**.

| Dépôt | Description |
|------|------|
| [**caveman**](https://github.com/JuliusBrussee/caveman) *(vous êtes ici)* | Compression sortie — *pourquoi utiliser beaucoup tokens quand peu suffire* |
| [**caveman-code**](https://github.com/JuliusBrussee/caveman-code) | Agent de codage terminal complet — *pourquoi utiliser beaucoup tokens quand agent entier peut économiser* |
| [**cavemem**](https://github.com/JuliusBrussee/cavemem) | Mémoire inter-agents — *pourquoi agent oublier quand agent peut se souvenir* |
| [**cavekit**](https://github.com/JuliusBrussee/cavekit) | Boucle de construction pilotée par spec — *pourquoi agent deviner quand agent peut savoir* |
| [**cavegemma**](https://github.com/JuliusBrussee/finetune-caveman) | Gemma 4 31B fine-tuné sur paires caveman — *pourquoi prompter chaque tour quand poids se souviennent* |

Composer : cavekit pilote construction, caveman compresse ce que agent *dit*, cavemem compresse ce que agent *se rappelle*, cavegemma intègre compression dans les poids, caveman-code livre tout comme un seul agent terminal. Une pierre. Deux pierres. Trois pierres. Quatre pierres. Cinq pierres. C'est tout.

## Liens

- [INSTALL.md](./INSTALL.md) — matrice d'installation complète, tous les drapeaux, détails par agent
- [CONTRIBUTING.md](./CONTRIBUTING.md) — comment envoyer un patch
- [CLAUDE.md](./CLAUDE.md) — guide mainteneur (propriété fichiers, architecture hooks, CI)
- [docs/](./docs/) — guides supplémentaires (installation Windows, etc.)
- [Issues](https://github.com/JuliusBrussee/caveman/issues) — bug, fonctionnalité, comportement étrange

## Mettre une étoile à ce dépôt

Caveman vous économise des tokens, vous économise de l'argent. Étoile ne coûte rien. Échange équitable. ⭐

[![Graphique historique des étoiles](https://api.star-history.com/svg?repos=JuliusBrussee/caveman&type=Date)](https://star-history.com/#JuliusBrussee/caveman&Date)

## Aussi par Julius Brussee

- **[Revu](https://github.com/JuliusBrussee/revu-swift)** — application d'étude macOS locale avec répétition espacée FSRS. [revu.cards](https://revu.cards)

## Licence

MIT — libre comme grand mammouth dans plaine ouverte.
