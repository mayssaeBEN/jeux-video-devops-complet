# jeux-video-devops-complet


Plateforme de jeux vidéo rétro avec pipelines CI/CD automatisés.

## Jeux disponibles

- *Space Invaders* — Défendez la Terre contre les envahisseurs
- *SpaceWord* — Tapez les mots pour détruire les ennemis

##  Vitrine en ligne

[mayssaeben.github.io/jeux-video-devops-complet](https://mayssaeben.github.io/jeux-video-devops-complet)

## Pipelines CI/CD

### Intégration Continue (CI)

Chaque jeu possède son propre workflow GitHub Actions déclenché :
- Sur chaque push (toutes branches)
- Sur les Pull Requests vers main
- Manuellement via workflow_dispatch

Chaque pipeline exécute :
- *Linter* — ESLint avec le Google JavaScript Style Guide
- *Tests unitaires* — tests fournis + 5 tests supplémentaires
- *Tests fonctionnels* — 3 tests avec Puppeteer
- *Audit de sécurité* — npm audit
- *Résumé* — annotations et résumé dans GitHub Actions

### Déploiement Continu (CD)

- Dockerfile basé sur nginx:alpine
- Déploiement automatique sur GitHub Pages à chaque push sur main
- Credentials sécurisés via GitHub Secrets

##  Tests

| Jeu | Tests unitaires | Tests fonctionnels | Total |
|-----|----------------|-------------------|-------|
| Space Invaders | 16 | 3 | 19 |
| SpaceWord | 13 | 3 | 16 |
| *Total* | *29* | *6* | *35* |

##  Équipe

- *Maysa* — CI/CD Space Invaders, déploiement GitHub Pages
- *Teddy* — CI/CD SpaceWord, Dockerfile
