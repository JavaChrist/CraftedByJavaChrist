# Configuration du Formulaire de Contact avec Resend

## 🚀 Configuration nécessaire

### 1. Créer un compte Resend

1. Va sur [https://resend.com](https://resend.com)
2. Crée un compte gratuit
3. Va dans **API Keys** et crée une nouvelle clé API

### 2. Configurer le domaine (optionnel mais recommandé)

1. Dans le dashboard Resend, va dans **Domains**
2. Ajoute ton domaine `javachrist.fr`
3. Configure les enregistrements DNS fournis par Resend
4. Vérifie le domaine

### 3. Variables d'environnement

Crée un fichier `.env.local` à la racine de ton projet avec :

```env
# Clé API Resend (obligatoire)
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

### 4. Configuration dans Vercel

1. Va dans ton dashboard Vercel
2. Sélectionne ton projet portfolio
3. Va dans **Settings** > **Environment Variables**
4. Ajoute : `RESEND_API_KEY` avec ta clé API

## 📧 Configuration des emails

Dans le fichier `api/contact.ts`, modifie ces valeurs selon tes besoins :

```typescript
from: 'contact@javachrist.fr',        // Email expéditeur (domaine vérifié)
to: ['contact@javachrist.fr'],        // Ton email de réception
```

## 🔄 Déploiement

Après avoir configuré les variables d'environnement :

1. Push ton code sur GitHub
2. Vercel va automatiquement redéployer
3. Le formulaire sera fonctionnel !

## ✅ Test

- Remplis le formulaire sur ton site
- Tu devrais recevoir l'email dans ta boîte de réception
- Si ça ne marche pas, vérifie les logs dans Vercel Dashboard > Functions

## 🆘 Troubleshooting

- **403/401 Error** : Vérifie ta clé API Resend
- **Email non reçu** : Vérifie que les domaines sont corrects
- **Erreur de déploiement** : Vérifie que toutes les variables d'environnement sont définies dans Vercel
