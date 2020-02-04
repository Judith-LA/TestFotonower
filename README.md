# TestFotonower

L'objectif de ce test était de créer une page HTML sur laquelle il est affiché l'image renvoyée par la webcam de l'ordinateur.
Deux options ont été programmés : la possibilité de faire une capture de l'image  et la possibilité de tourner la caméra.

## Composition du dossier

Ce dossier contient : - un fichier python permettant de lancer un serveur local
- un fichier html
- un script js complétant le fichier html
- deux images utilisées pour illustrer les boutons dans le fichier html

## Fonctionnement du code

Dans un premier temps, il faut exécuter le fichier serveur.py qui lance un serveur local sur le port 8000.
On entre dans son navigateur l'url : localhost:8000/testFotonower.html
Lors du chargement du fichier html, la fonction affichageWebcam() du fichier JavaScript est directement appelée. Elle permet d'activer la webcam de l'ordinateur et d'afficher la vidéo en direct sur la page.
Cliquer sur le bouton "appareil_photo" appelle la fonction captureImage() du fichier JavaScript. Cette fonction permet au canvas de récupérer les dimensions de la vidéo et d'y placer une capture d'écran de la vidéo.
Enfin, cliquer sur le bouton "rotation_appareil_photo" appelle la fonction rotationCamera qui permet de changer de caméra en modifiant les paramètres utilisés pour allumer la caméra dans la fonction affichageWebcam().
