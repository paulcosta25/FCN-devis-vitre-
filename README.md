# FCN Devis Vitres

Application web de génération de devis pour travaux de vitrerie.

## Fonctionnalités

- Saisie des dimensions et type de vitrage
- Calcul automatique du prix (main-d'œuvre + fournitures)
- Génération d'un devis PDF imprimable
- Historique des devis

## Installation

```bash
npm install
npm run dev
```

## Structure du projet

```
FCN-devis-vitre-/
├── CLAUDE.md              # Instructions pour Claude Code
├── README.md
├── package.json
├── .claude/
│   └── skills/            # Skills Claude Code personnalisés
│       ├── handoff/
│       └── review-claudemd/
├── src/
│   ├── index.html
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   ├── app.js
│   │   ├── calcul-prix.js
│   │   └── devis-form.js
│   └── assets/
└── tests/
```

## Tarifs de référence

Les prix sont configurables dans `src/js/calcul-prix.js` :

| Type de vitrage | Prix/m² (fourniture) |
|----------------|----------------------|
| Simple vitrage | 30 €/m² |
| Double vitrage | 80 €/m² |
| Triple vitrage | 120 €/m² |
| Vitrage feuilleté | 100 €/m² |

Main-d'œuvre : 50 €/h (configurable)
