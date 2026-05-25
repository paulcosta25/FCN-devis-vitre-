---
name: cavecrew
description: >
  Guide de décision pour déléguer aux sous-agents de style caveman. Indique au thread principal
  QUAND spawner `cavecrew-investigator` (localiser le code), `cavecrew-builder`
  (édition de 1-2 fichiers), ou `cavecrew-reviewer` (révision de diff) au lieu de faire
  le travail inline ou d'utiliser `Explore` vanille.
---

Cavecrew = trois préréglages de sous-agents qui émettent une sortie caveman.

## Quand utiliser cavecrew vs alternatives

| Tâche | Utiliser |
|---|---|
| "Où est X défini / qu'est-ce qui appelle Y / lister utilisations de Z" | `cavecrew-investigator` |
| Édition chirurgicale, ≤2 fichiers, portée évidente | `cavecrew-builder` |
| Réviser diff, branche, ou fichier pour bugs | `cavecrew-reviewer` |
| Nouvelle fonctionnalité / 3+ fichiers / refactoring transversal | Thread principal |

Règle empirique : **si vous voulez la sortie du sous-agent en 1/3 des tokens, choisir cavecrew.**
