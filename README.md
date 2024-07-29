# SFTP to SSH pour VS Code

## Introduction

**SFTP to SSH** est une extension pour Visual Studio Code qui vous permet de vous connecter rapidement à un serveur SSH en utilisant les informations de connexion stockées dans un fichier `sftp.json`. Cette extension facilite le processus de connexion SSH directement depuis l'éditeur de code.

Le sftp.json est généré via l'extension SFTP https://marketplace.visualstudio.com/items?itemName=satiromarra.code-sftp


## Fonctionnalités

- **Connexion rapide** : Connectez-vous à un serveur SSH en utilisant les informations stockées dans un fichier `sftp.json`.
- **Mot de passe automatique** : Le mot de passe est copié automatiquement dans le presse-papiers pour une saisie facile.
- **Interface utilisateur** : Notifications informatives pour guider l'utilisateur à travers le processus de connexion.

## Utilisation

### Connexion SSH à partir d'un fichier `sftp.json`

1. **Préparez le fichier `sftp.json`** : Assurez-vous que votre fichier `sftp.json` est correctement configuré dans votre projet. Exemple de configuration :
    ```json
    [
        {
            "username": "votre_username",
            "host": "votre_serveur_ssh",
            "password": "votre_mot_de_passe"
        }
    ]
    ```

2. **Ouvrez le fichier dans VS Code** : Sélectionnez et ouvrez le fichier `sftp.json` dans l'éditeur de Visual Studio Code.

3. **Accédez au menu contextuel** : Faites un clic droit sur le fichier `sftp.json` dans l'explorateur de fichiers.

4. **Choisissez l'option "SSH Connect"** : Sélectionnez l'option "SSH Connect" dans le menu contextuel.

5. **Connexion automatique** : L'extension ouvrira un terminal, se connectera au serveur SSH, et copiera automatiquement le mot de passe dans le presse-papiers. Vous serez informé par une notification que le mot de passe est prêt à être collé dans le terminal.

6. **Collez le mot de passe** : Lorsque le terminal demande le mot de passe, collez-le à l'aide de `Ctrl+V` (ou `Cmd+V` sur macOS).

## Dépannage

- **Le fichier `sftp.json` n'est pas trouvé** : Assurez-vous que le fichier est bien nommé `sftp.json` et qu'il est ouvert dans l'éditeur actif.
- **Le mot de passe ne se colle pas automatiquement** : Vérifiez que le mot de passe est bien présent dans le fichier `sftp.json` et que vous avez les permissions nécessaires pour écrire dans le presse-papiers.

## Contribuer

Pour contribuer à cette extension, veuillez soumettre une demande de tirage (pull request) ou signaler des problèmes via le dépôt GitHub de l'extension.

## Licence

Ce projet est sous licence MIT - voir le fichier [LICENSE](LICENSE) pour plus de détails.

