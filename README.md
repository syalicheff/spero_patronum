# Spero Patronum Counter

Une application magique de compteur avec intégration YouTube pour compter vos sorts Spero Patronum.

## Fonctionnalités

- **Compteur interactif** avec boutons +1, +5, +10 et -1, -5, -10
- **Lecteur YouTube intégré** avec la musique Spero Patronum
- **Incrémentation automatique** : +1 au compteur quand la vidéo est écoutée à 95% ou jusqu'à la fin
- **Persistance** : Le compteur est sauvegardé dans le localStorage
- **Fond d'écran personnalisé** avec image Spero Patronum

## Installation

1. Clonez le repository
2. Installez les dépendances :
   ```bash
   npm install
   ```
3. Lancez le serveur de développement :
   ```bash
   npm run dev
   ```
4. Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur

## Technologies utilisées

- **Next.js 16** - Framework React
- **TypeScript** - Typage statique
- **Mantine UI** - Composants d'interface
- **YouTube IFrame API** - Lecteur vidéo intégré

## Utilisation

1. Utilisez les boutons verts pour augmenter le compteur
2. Utilisez les boutons rouges pour diminuer le compteur
3. Lancez la vidéo YouTube pour écouter la musique
4. Quand la vidéo atteint 95% ou se termine, le compteur s'incrémente automatiquement de +1
5. Votre compteur est sauvegardé automatiquement

## Configuration

Aucune configuration nécessaire! L'application fonctionne directement sans clé API ni authentification.

## Déploiement

Pour déployer en production :

```bash
npm run build
npm start
```

Ou déployez sur Vercel en un clic :

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

## Licence

MIT
