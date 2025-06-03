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
      // À ajouter : captures d'écran de l'app en fonctionnement
      // '/images/projects/smartboard-desktop.webp',
      // '/images/projects/smartboard-mobile.webp',
      // '/images/projects/smartboard-settings.webp'
    ],
    status: 'En cours'
  },
  {
    name: 'SyncPro',
    slug: 'syncpro',
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
      // À ajouter : captures d'écran de l'app
      // '/images/projects/timemate-dashboard.webp',
      // '/images/projects/timemate-tracking.webp',
      // '/images/projects/timemate-reports.webp',
      // '/images/projects/timemate-mobile.webp'
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
  }
]; 