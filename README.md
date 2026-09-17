# Portfolio personnel - Jean Cabrel Houafo

Portfolio premium, moderne et professionnel construit avec Nuxt 4, Vue 3, TypeScript et Tailwind CSS.

Ce projet a été pensé comme un produit digital sérieux et non comme un simple CV transformé en page web. Il suit une architecture claire et maintenable :

- Données → composables → composants → pages
- logique métier séparée de l’interface
- contenu éditable dans des fichiers de données centralisés
- design premium avec mode sombre, sections narratives et interaction fluide

---

## 1. Stack technique

- Nuxt 4
- Vue 3
- TypeScript
- Tailwind CSS
- Composition API
- SEO meta intégré via Nuxt

---

## 2. Prérequis

- Node.js version 20+ recommandée
- npm

---

## 3. Installation

```bash
npm install
```

---

## 4. Développement

```bash
npm run dev -- --host 0.0.0.0
```

Le site est accessible localement sur :

```text
http://localhost:3000
```

---

## 5. Production

```bash
npm run build
npm run preview
```

---

## 6. Structure du projet

```bash
portfolio/
├── app/
│   ├── app.vue
│   ├── assets/
│   │   └── css/
│   │       └── main.css
│   ├── components/
│   │   ├── home/
│   │   ├── layout/
│   │   ├── projects/
│   │   ├── ui/
│   │   └── icons/
│   ├── composables/
│   │   ├── useContact.ts
│   │   ├── useProjects.ts
│   │   ├── useScroll.ts
│   │   └── useTheme.ts
│   ├── data/
│   │   ├── personal.ts
│   │   ├── skills.ts
│   │   ├── experiences.ts
│   │   ├── education.ts
│   │   └── projects.ts
│   └── pages/
│       └── index.vue
├── public/
│   └── robots.txt
├── nuxt.config.ts
├── package.json
├── tsconfig.json
├── README.md
└── app.config.ts
```

---

## 7. Description des fichiers racine

### package.json
Contient les scripts du projet et les dépendances Nuxt et Tailwind.

Scripts principaux :

- `npm run dev` : démarre le serveur de développement
- `npm run build` : construit la version de production
- `npm run preview` : prévisualise le build compilé
- `npm run generate` : génération statique

### nuxt.config.ts
Configuration principale de Nuxt.

Rôle :

- activation du module Tailwind
- ajout du CSS global
- définition du head HTML et des métadonnées SEO
- chargement des polices externes

### tsconfig.json
Configuration TypeScript pour le projet.

### public/robots.txt
Fichier de robots SEO pour le référencement du site.

### README.md
Documentation du projet. Sert à expliquer l’architecture, les composants et la logique de personnalisation du portfolio.

---

## 8. Fichiers de base de l’application

### app/app.vue
Point d’entrée racine de l’application Nuxt.

Il contient le shell global avec :

- `NuxtRouteAnnouncer`
- `NuxtPage`

Son rôle est minimaliste : il laisse Nuxt gérer le routage et le rendu des pages.

### app/assets/css/main.css
Fichier CSS global du projet.

Il contient :

- les directives Tailwind
- les variables de couleur du design système
- les classes utilitaires personnalisées comme `container-shell`, `glass-panel`, `primary-button`, `secondary-button`
- le style global du body, du thème sombre, et les animations légères

---

## 9. Dossier app/data

Ce dossier contient les données métier du portfolio. C’est la source de vérité du contenu.

### app/data/personal.ts
Contient les informations personnelles du profil :

- nom
- titre professionnel
- email
- téléphone
- liens GitHub et LinkedIn
- résumé professionnel
- texte de présentation
- liens de navigation

Le modifier permet de mettre à jour la vraie identité du portfolio sans toucher aux composants.

### app/data/skills.ts
Définit les catégories de compétences et les technologies exposées.

Exemples :

- Frontend
- Backend
- Database
- Tools

### app/data/experiences.ts
Contient le parcours professionnel et les expériences significatives.

Chaque entrée décrit :

- la période
- le poste
- l’entreprise
- le contexte
- les missions ou responsabilités

### app/data/education.ts
Regroupe les formations, diplômes ou parcours académiques.

### app/data/projects.ts
Contient le catalogue de projets.

Chaque projet contient :

- id
- titre
- catégorie
- description
- contexte
- fonctionnalités
- technologies
- image
- GitHub
- lien démonstration

Ce fichier est essentiel pour la galerie de projets et la modal de détails.

---

## 10. Dossier app/composables

Les composables centralisent la logique réutilisable et évitent de surcharger les composants.

### app/composables/useTheme.ts
Gère le thème clair / sombre.

Fonctions principales :

- lecture du thème sauvegardé
- alternance clair/sombre
- ajout/suppression de la classe `dark` sur le document
- persistance dans le navigateur

### app/composables/useProjects.ts
Gère l’état des projets :

- filtre actif
- liste filtrée
- sélection d’un projet
- ouverture et fermeture de la modale

### app/composables/useScroll.ts
Gère le suivi du scroll et la détection de section active.

Il permet notamment :

- savoir quelle section est visible
- mettre à jour l’état du navbar
- déclencher le comportement de navigation interne

### app/composables/useContact.ts
Contient la logique du formulaire de contact.

Il prend en charge :

- validation des champs
- état de soumission
- message de succès ou d’erreur
- feedback visuel

---

## 11. Dossier app/components/layout

Composants de mise en page et de structure globale.

### app/components/layout/AppNavbar.vue
Barre de navigation principale.

Fonctions :

- logo
- navigation interne
- bouton de changement de thème
- menu mobile
- position sticky / sticky header

### app/components/layout/AppFooter.vue
Pied de page global du portfolio.

Il sert à clôturer la page et à réafficher les informations de contact et les liens sociaux.

### app/components/layout/MobileMenu.vue
Menu mobile rétractable pour les écrans plus petits.

---

## 12. Dossier app/components/home

Ce dossier regroupe les grandes sections de la landing page.

### app/components/home/HeroSection.vue
Section d’introduction principale.

Elle contient :

- le nom du profil
- le titre principal
- la phrase d’accroche
- les boutons d’action
- les liens vers GitHub / LinkedIn
- le badge de stack technique

### app/components/home/AboutSection.vue
Section “À propos”.

Elle présente :

- l’identité du profil
- l’approche de travail
- les valeurs professionnelles
- le parcours et le style de développement

### app/components/home/StatsSection.vue
Section de statistiques qui donne une impression de crédibilité et de résultat.

### app/components/home/SkillsSection.vue
Présentation des compétences techniques.

Elle affiche les savoir-faire par catégorie :

- Frontend
- Backend
- Database
- Tools

### app/components/home/ExperienceSection.vue
Timeline de l’expérience professionnelle.

Elle présente les missions, entreprises et responsabilités sous forme chronologique.

### app/components/home/ProjectsSection.vue
Section galerie de projets.

Elle contient :

- les filtres de catégories
- la grille de cartes de projets
- l’appel à la modale pour voir plus de détails

### app/components/home/EducationSection.vue
Section parcours scolaire et formation.

### app/components/home/ServicesSection.vue
Section qui expose les services ou types de prestations que le profil peut proposer.

### app/components/home/ProcessSection.vue
Présente la méthode de travail ou le processus de production.

### app/components/home/ContactSection.vue
Section de contact finale.

Elle inclut :

- formulaire de contact
- validation
- état de soumission
- liens externes pour GitHub / LinkedIn

---

## 13. Dossier app/components/projects

Composants spécialisés pour la gestion des projets.

### app/components/projects/ProjectCard.vue
Carte individuelle d’un projet.

Elle affiche :

- image du projet
- titre
- description courte
- technologies clés
- bouton “Voir le projet”
- lien GitHub / Live si présent

### app/components/projects/ProjectFilter.vue
Boutons de filtrage des projets par catégorie.

### app/components/projects/ProjectModal.vue
Modale de détails d’un projet.

Elle affiche le projet sélectionné avec :

- contexte
- fonctionnalités
- technologies
- liens utiles
- fermeture via bouton ou touche ESC

---

## 14. Dossier app/components/ui

Composants atomiques et réutilisables.

### app/components/ui/BaseButton.vue
Bouton de base réutilisable avec un style cohérent.

### app/components/ui/SectionTitle.vue
Composant de titre de section standardisé.

### app/components/ui/Badge.vue
Badge ou label visuel réutilisable pour les tags, catégories ou labels.

### app/components/ui/GlassCard.vue
Carte avec effet verre dépoli pour un rendu premium.

### app/components/ui/ScrollToTop.vue
Bouton flottant permettant de remonter en haut de page.

---

## 15. Dossier app/components/icons

Ce dossier est prévu pour contenir les icônes SVG et éléments visuels réutilisables.

Dans l’état actuel, il est vide ou prêt à accueillir des icônes personnalisées.

---

## 16. Fichier app/pages/index.vue

Page principale du portfolio.

Elle orchestre l’ensemble des sections :

- `LayoutAppNavbar`
- `HomeHeroSection`
- `HomeAboutSection`
- `HomeStatsSection`
- `HomeSkillsSection`
- `HomeExperienceSection`
- `HomeProjectsSection`
- `HomeEducationSection`
- `HomeServicesSection`
- `HomeProcessSection`
- `HomeContactSection`
- `LayoutAppFooter`
- `UiScrollToTop`
- `ProjectsProjectModal`

C’est le fichier central de composition de la page d’accueil.

---

## 17. Personnalisation du contenu

Pour modifier le portfolio, il faut principalement agir dans les fichiers de données :

- `app/data/personal.ts`
- `app/data/skills.ts`
- `app/data/experiences.ts`
- `app/data/education.ts`
- `app/data/projects.ts`

C’est la manière la plus propre de mettre à jour les informations sans casser les composants.

---

## 18. Bonnes pratiques de maintenance

- garder les données dans le dossier `app/data`
- éviter d’écrire toute la logique dans `app/pages/index.vue`
- privilégier les composables pour les fonctionnalités réutilisables
- créer des composants dédiés pour chaque section ou bloc UI
- utiliser les fichiers de données pour le contenu éditable par le client ou l’auteur

---

## 19. Contact

- Email : houafojean@gmail.com
- Téléphone : 674 491 694 / 695 863 845
- GitHub : https://github.com/jeancode1234
- LinkedIn : https://linkedin.com/in/HOUAFO-jean

---

## 20. Conclusion

Ce projet est organisé selon une architecture propre, lisible et extensible. Il permet de maintenir facilement le contenu, les sections, les interactions et l’identité visuelle du portfolio sans surcharger la page principale.

Le code est prêt pour :

- ajouter de nouveaux projets
- modifier le parcours professionnel
- enrichir les compétences
- améliorer les sections de services ou de méthodologie
- faire évoluer le design sans casser l’architecture
