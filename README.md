# TeachRNative
Une application test en React Native sur la base d'une maquette donnée et sur Symfony.
Cette page utilisera la librairie react-native-snap-carousel. Ce carrousel contiendra 10 Teach’rs favoris, avec des informations (prénom, nom etc) que j'ai inventé.
Avec une API Restful qui propose 3 routes (GET, POST, PUT) permettant de gérer différentes instances de l’objet Teachr.
Cet objet Teachr sera composé de 3 attributes :
●	Un identifiant unique
●	Un prénom (maximum 255 caractères)
●	La date de création de l’objet dans la base de données

A chaque insertion d’un Teachr dans la base de données teachr, l’API devra incrémenter un compteur se trouvant dans la table Statistics.