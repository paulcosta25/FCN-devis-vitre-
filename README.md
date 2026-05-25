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

### Claude Homme des Cavernes (19 tokens)

> "Nouvelle ref objet à chaque rendu. Objet inline en prop = nouvelle ref = re-rendu. Envelopper dans `useMemo`."

</td>
</tr>
<tr>
<td>

### 🗣️ Claude Normal

> "Bien sûr ! Je serais ravi de vous aider avec ça. Le problème que vous rencontrez est très probablement causé par votre middleware d'authentification qui ne valide pas correctement l'expiration du token. Laissez-moi regarder et suggérer un correctif."

</td>
<td>

### Claude Homme des Cavernes

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

## Ce que vous obtenez

| Skill | Description |
|---|---|
| `/caveman [lite\|full\|ultra\|wenyan]` | Compresse chaque réponse. Niveaux persistants jusqu'à fin de session. |
| `/caveman-commit` | Messages de commit Conventional Commit, sujet ≤50 caractères. Pourquoi plutôt que quoi. |
| `/caveman-review` | Commentaires PR en une ligne : `L42: 🔴 bug: user null. Ajouter garde.` |
| `/caveman-stats` | Utilisation réelle des tokens + économies cumulées + USD. |
| `/caveman-compress <fichier>` | Réécrit fichier mémoire en mode homme des cavernes. Réduit ~46% des tokens d'entrée. |
| `caveman-shrink` | Middleware MCP. Enveloppe tout serveur MCP, compresse les descriptions d'outils. |
| `cavecrew-*` | Sous-agents homme des cavernes. ~60% moins de tokens que vanille. |

## Benchmarks

Réduction moyenne de **65% des tokens de sortie** sur 10 prompts (fourchette 22-87%).

| Tâche | Normal | Caveman | Économisé |
|------|-------:|--------:|------:|
| Expliquer bug re-rendu React | 1180 | 159 | 87% |
| Corriger expiration token middleware auth | 704 | 121 | 83% |
| Configurer pool de connexions PostgreSQL | 2347 | 380 | 84% |
| **Moyenne** | **1214** | **294** | **65%** |

## Licence

MIT — libre comme grand mammouth dans plaine ouverte.
