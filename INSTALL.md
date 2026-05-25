# Installer caveman

Une installation. Fonctionne pour chaque agent de codage IA sur votre machine.

Si vous voulez juste que ça marche, exécutez la commande en une ligne. Si vous voulez savoir ce qui est touché, faites défiler vers le bas.

## Commande en une ligne

**macOS / Linux / WSL / Git Bash**

```bash
curl -fsSL https://raw.githubusercontent.com/JuliusBrussee/caveman/main/install.sh | bash
```

**Windows (PowerShell 5.1+)**

```powershell
irm https://raw.githubusercontent.com/JuliusBrussee/caveman/main/install.ps1 | iex
```

Ce qu'elle fait :

- Auto-détecte chaque agent supporté installé sur votre machine.
- Pour chacun, exécute le chemin d'installation natif de cet agent.
- Câble les hooks Claude Code, le badge de barre de statut, et le middleware MCP `caveman-shrink`.
- Ignore ce que vous n'avez pas. Sûr à relancer. ~30 secondes du début à la fin.

## Installation par agent

| Agent | Commande d'installation | Auto-activation ? |
|---|---|:-:|
| **Claude Code** | `claude plugin marketplace add JuliusBrussee/caveman && claude plugin install caveman@caveman` | Oui |
| **Gemini CLI** | `gemini extensions install https://github.com/JuliusBrussee/caveman` | Oui |
| **Codex CLI** | `npx skills add JuliusBrussee/caveman -a codex` | Par session : `/caveman` |
| **Cursor** | `npx skills add JuliusBrussee/caveman -a cursor` | Par session par défaut |
| **Windsurf** | `npx skills add JuliusBrussee/caveman -a windsurf` | Par session par défaut |
| **Cline** | `npx skills add JuliusBrussee/caveman -a cline` | Par session par défaut |

**Déclenchement :** tapez `/caveman` ou dites "parle comme homme des cavernes". Arrêter avec "mode normal".

## Désinstallation

```bash
npx -y github:JuliusBrussee/caveman -- --uninstall
```

## Dépannage

**"Le script d'installation a planté. Et maintenant ?"**

Ouvrir votre agent dans ce dépôt et dire :

> "Lis CLAUDE.md et INSTALL.md. Installe caveman pour moi."

Encore cassé ? [Ouvrir une issue](https://github.com/JuliusBrussee/caveman/issues).

---

Bloqué ? Ouvrir une issue : <https://github.com/JuliusBrussee/caveman/issues>
