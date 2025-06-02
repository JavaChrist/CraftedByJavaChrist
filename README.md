# 🚀 CraftedByJavaChrist - Portfolio Professionnel

> Portfolio moderne et interactif d'un développeur web & mobile freelance

[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black)](https://crafted-by-java-christ.vercel.app/)
[![React](https://img.shields.io/badge/React-18.0+-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.0+-blue)](https://tailwindcss.com/)

## 🌟 Aperçu

Portfolio personnel conçu pour présenter mon expertise en développement web et mobile. Design moderne inspiré de Vercel, avec des interactions fluides et une expérience utilisateur optimale.

**🔗 Voir en ligne :** [crafted-by-java-christ.vercel.app](https://crafted-by-java-christ.vercel.app/)

---

## ✨ Fonctionnalités

### 🏗️ **Architecture & Navigation**

- ✅ **Application multi-pages** avec React Router
- ✅ **Navigation fluide** entre les sections
- ✅ **Responsive design** (mobile, tablet, desktop)
- ✅ **Animations** avec Framer Motion

### 🎨 **Interface Utilisateur**

- ✅ **Design moderne** inspiré de Vercel
- ✅ **Galerie d'images en éventail** (fan layout)
- ✅ **Hover effects** et transitions fluides
- ✅ **Indicateurs visuels** et feedback utilisateur
- ✅ **Navigation au clavier** (flèches, espace, échap)

### 📧 **Formulaire de Contact**

- ✅ **Envoi d'emails** via Resend API
- ✅ **Validation côté client** et serveur
- ✅ **Feedback temps réel** (succès/erreur)
- ✅ **Design d'emails** professionnel
- ✅ **Protection anti-spam** intégrée

### 🖼️ **Galerie Interactive**

- ✅ **Mode éventail** : Images disposées en arc
- ✅ **Mode galerie** : Navigation linéaire
- ✅ **Plein écran** avec overlay sombre
- ✅ **Zoom et navigation** fluides
- ✅ **Indicateurs** (compteur, points, flèches)

---

## 🏆 Projets Présentés

| Projet                 | Description                       | Stack                         | Statut      |
| ---------------------- | --------------------------------- | ----------------------------- | ----------- |
| **CodeCraft Studio**   | IDE web complet avec file manager | React, CodeMirror, GitHub API | ✅ Terminé  |
| **SyncPro**            | App Next.js pro utilisée chez EDF | Next.js, Firebase Auth        | ✅ Terminé  |
| **WebMail**            | Client mail avec calendrier       | React, Firebase, emailJS      | ✅ Terminé  |
| **SaaS Facturation**   | Plateforme avec Stripe            | React, Firebase, Stripe       | ✅ Terminé  |
| **App Plombier**       | Gestion planning artisan          | React, Firebase               | ✅ Terminé  |
| **JavaChrist Web Pro** | Site vitrine bilingue             | HTML, CSS, JavaScript         | ✅ Terminé  |
| **SmartBoard**         | Dashboard d'apps                  | Flutter, Firebase             | 🟡 En cours |
| **TimeMate**           | Suivi temps terrain               | React, Firebase, CSV          | 🟡 En cours |

---

## 🛠️ Technologies Utilisées

### **Frontend**

- **React 18** - Interface utilisateur
- **TypeScript** - Typage statique
- **Tailwind CSS** - Styling utility-first
- **Framer Motion** - Animations fluides
- **React Router** - Navigation multi-pages

### **Backend & Services**

- **Vercel Functions** - API serverless
- **Resend** - Service d'envoi d'emails
- **Firebase** - Backend as a Service (projets)

### **Outils & Déploiement**

- **Vercel** - Déploiement automatique
- **Git** - Contrôle de version
- **npm** - Gestionnaire de paquets

---

## 🚀 Installation & Développement

### **Prérequis**

- Node.js 16+
- npm ou yarn
- Compte Resend (pour les emails)

### **Installation**

```bash
# Cloner le repository
git clone https://github.com/JavaChrist/CraftedByJavaChrist.git
cd CraftedByJavaChrist

# Installer les dépendances
npm install

# Configurer les variables d'environnement
cp .env.example .env.local
# Éditer .env.local avec vos clés API
```

### **Variables d'environnement**

```env
RESEND_API_KEY=re_xxxxxxxxxxxxxx
RESEND_FROM_EMAIL=noreply@javachrist.fr
RESEND_TO_EMAIL=contact@javachrist.fr
```

### **Développement**

```bash
# Lancer en mode développement
npm start

# Build de production
npm run build

# Prévisualiser le build
npx serve build
```

---

## 📁 Structure du Projet

```
src/
├── components/
│   ├── ui/
│   │   ├── ProjectCard.tsx      # Card de projet
│   │   ├── ImageCarousel.tsx    # Carrousel d'images
│   │   └── ImageGallery.tsx     # Galerie en éventail
│   ├── Navbar.tsx               # Navigation principale
│   └── Footer.tsx               # Pied de page
├── pages/
│   ├── Home.tsx                 # Page d'accueil
│   ├── Projects.tsx             # Liste des projets
│   ├── About.tsx                # À propos
│   └── Contact.tsx              # Formulaire de contact
├── data/
│   └── projects.ts              # Données des projets
└── api/
    └── contact.ts               # API d'envoi d'emails
```

---

## 🎯 Fonctionnalités Avancées

### **Galerie d'Images Interactive**

- **Clic sur image** → Ouverture en plein écran
- **Mode éventail** → Images disposées en arc avec rotations
- **Mode galerie** → Navigation linéaire traditionnelle
- **Navigation clavier** → Flèches, espace, échap
- **Responsive** → Adaptation mobile/desktop

### **Formulaire de Contact**

- **Validation temps réel** → Feedback immédiat
- **Email professionnel** → Template HTML stylé
- **Gestion d'erreurs** → Messages explicites
- **Anti-spam** → Protection intégrée

### **Performance & UX**

- **Lazy loading** → Images chargées à la demande
- **Animations optimisées** → 60fps avec Framer Motion
- **Build optimisé** → Code splitting automatique
- **SEO friendly** → Meta tags et structure

---

## 🔄 Roadmap & Améliorations

### **🎯 Prochaines étapes**

- [ ] **Mode sombre** avec toggle
- [ ] **Système de blog** intégré
- [ ] **Analytics** (Google Analytics)
- [ ] **PWA** (Progressive Web App)
- [ ] **i18n** (Français/Anglais)

### **🖼️ Projets en cours**

- [ ] **TimeMate** → Ajouter captures d'écran réelles
- [ ] **SmartBoard** → Screenshots desktop/mobile
- [ ] **Nouveaux projets** → Intégration continue

---

## 📈 Performances

- ⚡ **Lighthouse Score** : 95+ (Performance, Accessibilité, SEO)
- 🚀 **First Contentful Paint** : <1.5s
- 📱 **Mobile Responsive** : 100%
- ♿ **Accessibilité** : WCAG 2.1 AA

---

## 🤝 Contact & Support

- **Portfolio** : [crafted-by-java-christ.vercel.app](https://crafted-by-java-christ.vercel.app/)
- **Email** : [contact@javachrist.fr](mailto:contact@javachrist.fr)
- **GitHub** : [@javachrist](https://github.com/javachrist)
- **LinkedIn** : [JavaChrist](https://linkedin.com/in/javachrist)

---

## 📄 Licence

Ce projet est sous licence **MIT**. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

---

_Créé avec ❤️ par **JavaChrist** - Développeur Web & Mobile Freelance_
