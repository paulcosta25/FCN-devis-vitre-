# FCN Devis Vitres - Instructions Claude Code

## Projet
Application de génération de devis pour travaux de vitrerie (remplacement de vitres, fenêtres, portes vitrées).

## Stack technique
- **Frontend** : HTML/CSS/JS (vanilla) ou framework léger
- **Backend** : Node.js / Express (à définir selon besoin)
- **Base de données** : SQLite (local) ou PostgreSQL

## Conventions de code
- Nommer les fichiers en kebab-case : `devis-form.js`, `calcul-prix.js`
- Commits en français, clairs et concis
- Pas de commentaires évidents - seulement si le POURQUOI n'est pas clair
- Pas d'abstractions prématurées - trois lignes similaires valent mieux qu'une abstraction inutile

## Comportement attendu
- Après un changement UI, tester le chemin nominal ET les cas limites
- Toujours valider les entrées utilisateur aux frontières du système (formulaires, API)
- Ne pas ajouter de gestion d'erreurs pour des cas impossibles

## Workflow Git
- Développer sur une branche feature, jamais directement sur `main`
- Vérifier `git status` et `git diff` avant chaque commit
- Mettre à jour la table des matières si le README est modifié

## Commandes utiles
```bash
# Installer les dépendances
npm install

# Lancer en développement
npm run dev

# Lancer les tests
npm test
```

## Sécurité
- Ne jamais commiter de fichiers `.env` ou de secrets
- Échapper toutes les données utilisateur affichées en HTML (XSS)
- Valider et assainir les entrées côté serveur
