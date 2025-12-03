export interface Project {
  name: string;
  slug: string;
  description: string;
  stack: string[];
  linkDemo?: string;
  linkCode?: string;
  image?: string;
  images?: string[];
  status?: 'Terminé' | 'En cours';
}

export const projects: Project[] = [
  {
    name: 'CodeCraft Studio',
    slug: 'code-craft-studio',
    description: 'IDE web complet avec file manager, preview live, zip & GitHub sync',
    stack: ['React', 'CodeMirror', 'LocalStorage', 'GitHub API'],
    linkDemo: 'https://code-craft-studio-omega.vercel.app/',
    linkCode: 'https://github.com/javachrist/code-craft-studio',
    image: '💻',
    images: [
      '/images/projects/codecraft-studio-previsualisation.webp',
      '/images/projects/codecraft-studio.webp',
      '/images/projects/codecraft-studio-clair.webp'
    ],
    status: 'Terminé'
  },
  {
    name: 'SmartBoard',
    slug: 'smartboard',
    description: 'Dashboard d\'apps et raccourcis pour poste de travail (PC & cloud sync)',
    stack: ['Flutter', 'Firebase', 'Auth', 'Cloud Firestore'],
    linkDemo: 'https://smartboard-app.vercel.app',
    linkCode: 'https://github.com/javachrist/smartboard',
    image: '📱',
    images: [
      '/images/projects/smartboard-1.svg',
      '/images/projects/smartboard-2.svg',
    ],
    status: 'En cours'
  },
  {
    name: 'Sync-app',
    slug: 'sync-pro',
    description: 'App Next.js pro utilisée chez EDF, stockage fichiers via NAS',
    stack: ['Next.js', 'Firebase Auth', 'API interne sécurisée'],
    linkDemo: 'https://sync-pro.javachrist.eu/login',
    linkCode: 'https://github.com/javachrist/sync-app',
    image: '⚡',
    images: [
      '/images/projects/sync-pro.webp',
      '/images/projects/sync-pro-compte.webp',
      '/images/projects/sync-pro-dashboard.webp',
      '/images/projects/sync-pro-dashboard-dark.webp',
      '/images/projects/sync-pro-documents.webp'
    ],
    status: 'Terminé'
  },
  {
    name: 'WebMail',
    slug: 'webmail',
    description: 'Client mail personnel avec calendrier & carnet de contacts, gestion des contacts, gestion des événements, gestion des tâches, gestion des messages, gestion des pièces jointes.',
    stack: ['React', 'TailwindCSS', 'TypeScript', 'Firebase', 'emailJS', 'Fullcalendar'],
    linkDemo: 'https://webmail.javachrist.eu/login',
    linkCode: 'https://github.com/javachrist/webmail',
    image: '📧',
    images: [
      '/images/projects/webmail-clair.webp',
      '/images/projects/webmail-calendrier.webp',
      '/images/projects/webmail-contact.webp'
    ],
    status: 'Terminé'
  },
  {
    name: 'TimeMate',
    slug: 'timemate',
    description: 'Suivi du temps passé par affaire/technicien (app de gestion terrain)',
    stack: ['React', 'Firebase', 'export CSV'],
    linkDemo: 'https://timemate-app.vercel.app',
    linkCode: 'https://github.com/javachrist/timemate',
    image: '⏱️',
    images: [
      '/images/projects/timemate-1.svg',
    ],
    status: 'En cours'
  },
  {
    name: 'SaaS de Facturation',
    slug: 'saas-facturation',
    description: 'Plateforme avec abonnements Stripe, factures PDF, tableau de bord client, gestion clients, factures, utilisateurs, paramètres entreprises, personalisation des factures.',
    stack: ['React', 'Firebase', 'Stripe', 'React Hook Form'],
    linkDemo: 'https://facturation.javachrist.eu/login',
    linkCode: 'https://github.com/JavaChrist/saas-facturation-v1',
    image: '💰',
    images: [
      '/images/projects/facturation-tableau-de-bord.webp',
      '/images/projects/facturation-tableau-de-bord-2.webp',
      '/images/projects/clients.webp',
      '/images/projects/factures-mode-clair.webp',
      '/images/projects/factures.webp',
      '/images/projects/parametres.webp',
      '/images/projects/utilisateurs.webp',
      '/images/projects/abonnements.webp'
    ],
    status: 'Terminé'
  },
  {
    name: 'Application Plombier',
    slug: 'app-plombier',
    description: 'App pour gestion de planning, relance de visites annuelles, fiche client, factures, entreprise, interventions, services',
    stack: ['React', 'Firebase', 'système de relances automatiques'],
    linkDemo: 'https://plombier-new-one.vercel.app/',
    linkCode: 'https://github.com/JavaChrist/Plombier-new',
    image: '🔧',
    images: [
      '/images/projects/site-plombier-accueil.webp',
      '/images/projects/site-plombier-services.webp',
      '/images/projects/site-plombier-entreprise.webp',
      '/images/projects/site-plombier-articles.webp',
      '/images/projects/site-plombier-factures.webp',
      '/images/projects/site-plombier-factures.webp',
      '/images/projects/site-plombier-interventions.webp'
    ],
    status: 'Terminé'
  },
  {
    name: 'Environnement Manager',
    slug: 'app-env-manager',
    description: 'App pour gestion des environnements de développement pour les différents projets. Sauvegarde des variables, et des fichiers readme.',
    stack: ['React', 'Firebase', 'système de relances automatiques'],
    linkDemo: 'https://plombier-new-one.vercel.app/',
    linkCode: 'https://github.com/JavaChrist/Plombier-new',
    image: '🔧',
    images: [
      '/images/projects/env-manager-login.webp',
      '/images/projects/env-manager-projets.webp'
    ],
    status: 'Terminé'
  },
  {
    name: 'JavaChrist Web Pro',
    slug: 'site-javachrist',
    description: 'Site vitrine bilingue (français/anglais) destiné aux artisans et PME, offrant une présentation claire des services, un blog intégré pour partager des actualités, une section FAQ pour répondre aux questions fréquentes, des témoignages clients pour renforcer la crédibilité, et un système de chat en ligne pour une interaction directe avec les visiteurs.',

    stack: ['HTML', 'CSS', 'JavaScript', 'EmailJS', 'Firebase'],
    linkDemo: 'https://www.javachrist.fr/',
    linkCode: 'https://github.com/JavaChrist/New-JavaChrist',
    image: '🔧',
    images: [
      '/images/projects/siteJavaChrist.webp',
      '/images/projects/sitejavaChrist-blog.webp',
      '/images/projects/siteJavaChrist-faq.webp',
      '/images/projects/sitejavaChrist-forum.webp',
      '/images/projects/siteJavaChrist-services.webp',
      '/images/projects/sitejavaChrist-login.webp'
    ],
    status: 'Terminé'
  },
    {
    name: 'SuiviChantier',
    slug: 'suivi-chantier',
      description: 'Application web et mobile pour le suivi de chantier : gestion des tâches, des événements, des pièces jointes, des commentaires, des documents, des contacts, des entreprises, des clients, des factures, des devis, des commandes, des réceptions, des livraisons, des paiements, des réclamations et des garanties. Intégrant un chat en ligne pour une interaction directe avec les clients pour la validation des commandes.',
    stack: ['React','GitHub', 'Firebase'],
      linkDemo: 'https://crafted-by-java-christ.vercel.app/projects',
    linkCode: 'https://github.com/JavaChrist/MyChantier',
    image: '💻',
    images: [
      '/images/projects/SuiviChantier-1.webp',
      '/images/projects/SuiviChantier-2.webp',
      '/images/projects/SuiviChantier-3.webp',
      '/images/projects/SuiviChantier-4.webp'
    ],
    status: 'Terminé'
  }, 
  {
    name: 'KeyBox',
    slug: 'key-box',
    description: 'KeyBoxest une application sécurisée pour stocker, organiser et retrouver facilement tous ses mots de passe. Elle combine chiffrement, synchronisation cloud via Firebase et sauvegarde locale automatique vers ton NAS pour garantir une disponibilité totale. L’interface épurée permet d’ajouter, classer et rechercher ses accès en quelques secondes, avec une expérience fiable et simple au quotidien.',
    stack: ['React', 'GitHub', 'Firebase'],
    linkDemo: 'https://paaswoord-vault.vercel.app/vault',
    linkCode: 'https://github.com/JavaChrist/Paaswoord-Vault',
    image: '💻',
    images: [
      '/images/projects/KeyBox-1.webp',
      '/images/projects/KeyBox-2.webp',
      '/images/projects/KeyBox-3.webp',
      '/images/projects/KeyBox-4.webp'
    ],
    status: 'Terminé'
  },
  {
    name: 'CardBox',
    slug: 'card-box',
    description: 'CardBox est une application moderne pour gérer et centraliser toutes tes cartes de fidélité, garanties, abonnements et documents associés. Elle remplace les portefeuilles encombrés en offrant un espace organisé, sécurisé et accessible partout. Grâce au scan rapide, aux rappels de fin de validité et à une interface claire, CardBox simplifie réellement la gestion du quotidien.',
    stack: ['React', 'GitHub', 'Firebase'],
    linkDemo: 'https://vercel.com/javachrist-projects/cardbox',
    linkCode: 'https://github.com/JavaChrist/CardBox',
    image: '💻',
    images: [
      '/images/projects/CardBox-1.webp',
      '/images/projects/CardBox-2.webp',
      '/images/projects/CardBox-3.webp',
      '/images/projects/CardBox-4.webp'
    ],
    status: 'Terminé'
  },
  {
    name: 'MySafeBox',
    slug: 'my-safe-box',
    description: 'MySafeBox est un coffre-fort numérique familial sécurisé, conçu pour centraliser les documents importants (identités, fiches de paie, factures, papiers officiels). Chaque membre peut déposer, organiser et consulter ses documents à tout moment — avec un stockage local sur NAS et une interface simple pour garantir confidentialité, accessibilité et tranquillité d\'esprit.',
    stack: ['React', 'GitHub', 'Firebase'],
    linkDemo: 'https://www.mysafebox.fr',
    linkCode: 'https://github.com/JavaChrist/MySafeBox',
    image: '💻',
    images: [
      '/images/projects/MySafeBox-1.webp',
      '/images/projects/MySafeBox-2.webp',
      '/images/projects/MySafeBox-3.webp',
      '/images/projects/MySafeBox-4.webp'
    ],
    status: 'Terminé'
  },
  {
    name: 'InShape',
    slug: 'in-shape',
    description: 'InShape est une application web & mobile pensée pour centraliser et simplifier la remise en forme : création et suivi d’objectifs, plan d’entraînement, historique des séances, et vue synthétique des progrès.UI claire, données sécurisées, et suivi intuitif pour rendre le fitness accessible au quotidien — idéal pour rester motivé, structuré et sur la bonne voie.',
    stack: ['React', 'GitHub', 'Firebase'],
    linkDemo: 'https://in-shape.vercel.app/',
    linkCode: 'https://github.com/JavaChrist/in-shape',
    image: '💻',
    images: [
      '/images/projects/InShape-1.webp',
      '/images/projects/InShape-2.webp',
      '/images/projects/InShape-3.webp',
      '/images/projects/InShape-4.webp'
    ],
    status: 'Terminé'
  }
]; 