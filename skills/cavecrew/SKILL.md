---
name: cavecrew
description: >
  Guide de décision pour déléguer aux sous-agents de style caveman. Indique au thread principal
  QUAND spawner `cavecrew-investigator` (localiser le code), `cavecrew-builder`
  (édition de 1-2 fichiers), ou `cavecrew-reviewer` (révision de diff).
  Déclenchement : "déléguer au sous-agent", "utiliser cavecrew", "spawner investigateur/constructeur/réviseur".
---

Cavecrew = trois préréglages de sous-agents qui émettent une sortie caveman. Même travail que les défauts Anthropic ; différence est le résultat d'outil retourné est compressé, donc contexte principal rétrécit par délégation.

## Quand utiliser cavecrew vs alternatives

| Tâche | Utiliser |
|---|---|
| "Où est X défini / qu'est-ce qui appelle Y / lister utilisations de Z" | `cavecrew-investigator` |
| Idem mais avec suggestions/commentaires architecturaux | `Explore` (vanille) |
| Édition chirurgicale, ≤2 fichiers, portée évidente | `cavecrew-builder` |
| Nouvelle fonctionnalité / 3+ fichiers / refactoring transversal | Thread principal |
| Réviser diff, branche, ou fichier pour bugs | `cavecrew-reviewer` |
| Revue de code approfondie avec rationale | `Code Reviewer` (vanille) |

Règle empirique : **si vous voulez la sortie en 1/3 des tokens, choisir cavecrew. Si vous voulez de la prose, choisir vanille.**

## Contrats de sortie

**`cavecrew-investigator`** : `chemin:ligne — symbole — note courte`
**`cavecrew-builder`** : `chemin:lignes — changement ≤10 mots. vérifié: OK.`
**`cavecrew-reviewer`** : `chemin:ligne: emoji sévérité: problème. correctif.`
