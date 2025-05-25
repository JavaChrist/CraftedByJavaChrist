# Projet : CraftedByJavaChrist

## 🔧 Objectif
Ce projet est un portfolio personnel pour présenter mes projets en tant que développeur web & mobile freelance. Il doit refléter mon expertise technique avec un design sobre et professionnel (style Vercel). Le site est déployé sur Vercel.

---

## ✅ Fonctionnalités déjà en place
- Landing page simple avec React + TypeScript + TailwindCSS
- Présentation de deux projets : Code Craft Studio et SmartBoard
- Section À propos et contact
- Responsive de base OK
- Déploiement opérationnel sur https://crafted-by-java-christ.vercel.app/

---

## 🎯 Objectifs des prochaines étapes

### 1. 🔄 Passer à une architecture multi-pages
Utiliser **React Router** pour séparer :
- `/` → Accueil avec présentation rapide
- `/projects` → Tous les projets affichés dans des `ProjectCard`
- `/about` → Parcours, stack, certifications
- `/contact` → Email, LinkedIn, etc.

### 2. 📁 Organiser les projets via un fichier `projects.ts`
Créer un fichier `src/data/projects.ts` contenant les projets ci-dessous, chacun avec :
```ts
export interface Project {
  name: string;
  slug: string;
  description: string;
  stack: string[];
  linkDemo?: string;
  linkCode?: string;
  image?: string;
  status?: 'Terminé' | 'En cours';
}
Liste des projets à ajouter :
Code Craft Studio

IDE web complet avec file manager, preview live, zip & GitHub sync

Stack : React, CodeMirror, LocalStorage, GitHub API

SmartBoard

Dashboard d’apps et raccourcis pour poste de travail (PC & cloud sync)

Stack : Flutter, Firebase, Auth, Cloud Firestore

Unitep

App Next.js pro utilisée chez EDF, stockage fichiers via NAS

Stack : Next.js, Firebase Auth, API interne sécurisée

WebMail

Client mail personnel avec calendrier & carnet de contacts

Stack : React, Firebase, emailJS, Fullcalendar

TimeMate

Suivi du temps passé par affaire/technicien (app de gestion terrain)

Stack : React, Firebase, export CSV

SaaS de Facturation

Plateforme avec abonnements Stripe, factures PDF, tableau de bord client

Stack : React, Firebase, Stripe, React Hook Form

Application Plombier

App pour gestion de planning, relance de visites annuelles, fiche client

Stack : React, Firebase, système de relances automatiques

3. 📦 Composants à créer/modifier
✅ ProjectCard.tsx
Un composant réutilisable pour afficher les projets dynamiquement depuis projects.ts.

✅ Navbar.tsx
Navigation sticky avec ancres ou routing :

Accueil

Projets

À propos

Contact

✅ Footer.tsx
Simple, avec lien GitHub, LinkedIn, copyright.

🧠 Instruction à l’IA de Cursor
Merci de :

Structurer le projet en routing React (react-router-dom)

Générer les fichiers de page Home.tsx, Projects.tsx, About.tsx, Contact.tsx

Afficher dynamiquement les projets dans Projects.tsx via ProjectCard et projects.ts

Styliser les composants avec Tailwind en restant sobre et lisible

Ajouter les données des projets listés dans ce script

Bonus (optionnel)
Dark mode toggle

Favicon + image par projet

Animation légère sur les cards au hover (framer-motion)