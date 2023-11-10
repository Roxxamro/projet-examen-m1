## Projet Techno Web Bibliothèque
## Groupe : Quentin Ambroziewicz | Rémi Protin | Simon Demeilliers | Titoine Farthouat | Louis Landouzy 

## OBJECTIF
Créer une application web de gestion de bibliothèque en utilisant les technologies suivantes :
- React
- NestJS
- TypeScript
- Tailwind CSS
- ESLint
- Prettier

## Lancement du projet 6/11


## BASE DE DONNEES
- Authors
- Books
- Users
- BookGenres
- Genres

## FONCTIONNEMENT

### Back-end
- Lancer le back-end avec la commande `npm run api:start:dev`
- L'API est disponible à l'adresse `http://localhost:3000`

Le back-end permet d'utiliser la DB et de récupérer les données pour les afficher sur le front-end.
Il est décomposé en plusieurs dossier:
- entities: contient les entités de la DB
- controllers: contient les controllers de l'API
- models : contient les modèles des entités
- repositories: contient les repositories de l'API


### Front-end
- Lancer le front-end avec la commande `npm run site:dev`
- L'application est disponible à l'adresse `http://localhost:3001`

## Fonctionnalités


# Back end
Nous utilisons des bases de données pour lister les auteurs, utilisateurs, livres et genres des livres.

# Front end

## Utilisation
Lors de la connexion, on arrive sur la page d'accueil
/!\ Il faut être en mode clair sinon le menu hamburger en haut à gauche n'est pas visible.

En cliquant sur le menu, 4 choix apparaissent:
- Accueil
- Auteurs
- Livres
- Utilisateurs
/!\ Si vous cliquez sur la page sur laquelle vous êtes, rien ne se passe

Les différentes options sont expliquées ci-dessous:
- Accueil: reviens au menu avec le texte d'accueil

- Auteurs: la liste des auteurs apparaît et un bouton "Ajouter un auteur" se trouve en haut à droite. Si ce bouton est cliqué, une modale apparaît demandant diverses informations afin d'ajouter un auteur dans la base de données.
Si on souhaite trouver un auteur particulier, une barre de recherche a été implémentée pour cette exacte fonction.

- Livres: 
On peut filtrer les livres selon leur nom grâce à une barre de recherche 

- Utilisateurs: la liste des utilisateurs apparaît et un bouton "Ajouter un utilisateur" se trouve en haut à droite. Si ce bouton est cliqué, une modale apparaît demandant diverses informations afin d'ajouter un utilisateur dans la base de données.
On peut filtrer les utilisateurs selon leur nom grâce à une barre de recherche.


## Sources
Utilisation du répertoire projet-examen-m1 de Gerald Gallet
