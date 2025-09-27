# PYPYSKILL - Plateforme d'apprentissage avec authentification

Une plateforme d'apprentissage moderne avec un système d'authentification complet incluant la double vérification et la confirmation d'email.

## 🚀 Fonctionnalités

- ✅ **Authentification sécurisée** avec NextAuth.js
- ✅ **Inscription avec confirmation d'email** obligatoire
- ✅ **Connexion protégée** - seuls les utilisateurs vérifiés peuvent se connecter
- ✅ **Interface flip card animée** pour login/register
- ✅ **Base de données SQLite** avec Prisma ORM
- ✅ **Protection des routes** avec middleware
- ✅ **Design cosmique** avec animations

## 📋 Prérequis

- Node.js 18+ 
- npm ou yarn

## 🛠️ Installation

1. **Cloner le projet**
```bash
git clone <votre-repo>
cd pypy-skill
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Configuration de l'environnement**

Créez un fichier `.env` à la racine du projet :

```env
# Database
DATABASE_URL="file:./dev.db"

# NextAuth.js
NEXTAUTH_URL="http://localhost:3001"
NEXTAUTH_SECRET="votre-clé-secrète-très-longue-et-complexe"

# Email Configuration (Gmail SMTP)
EMAIL_SERVER_HOST="smtp.gmail.com"
EMAIL_SERVER_PORT=587
EMAIL_SERVER_USER="votre-email@gmail.com"
EMAIL_SERVER_PASSWORD="votre-mot-de-passe-application"
EMAIL_FROM="votre-email@gmail.com"
```

### 🔧 Configuration Email (Gmail)

1. Activez l'authentification à 2 facteurs sur votre compte Gmail
2. Générez un "mot de passe d'application" :
   - Allez dans Paramètres Google > Sécurité
   - Cliquez sur "Mots de passe d'application"
   - Générez un nouveau mot de passe pour "Mail"
   - Utilisez ce mot de passe dans `EMAIL_SERVER_PASSWORD`

4. **Initialiser la base de données**
```bash
npx prisma migrate dev
npx prisma generate
```

5. **Lancer l'application**
```bash
npm run dev
```

L'application sera disponible sur `http://localhost:3001`

## 🔐 Flux d'authentification

### Inscription
1. L'utilisateur remplit le formulaire d'inscription
2. Un email de vérification est envoyé automatiquement
3. L'utilisateur clique sur le lien dans l'email
4. Son compte est activé

### Connexion
1. L'utilisateur ne peut se connecter que si son email est vérifié
2. Les mots de passe sont hashés avec bcrypt
3. Sessions sécurisées avec JWT

### Protection des routes
- Les routes protégées nécessitent une authentification
- Redirection automatique vers `/login` si non connecté

## 📁 Structure du projet

```
src/
├── app/
│   ├── api/auth/          # API routes d'authentification
│   ├── login/             # Page de connexion
│   ├── register/          # Page d'inscription
│   ├── verify-email/      # Page de vérification email
│   └── layout.tsx         # Layout principal
├── components/
│   └── FlipCardForm.tsx   # Composant formulaire animé
├── lib/
│   ├── auth.ts            # Configuration NextAuth
│   ├── prisma.ts          # Client Prisma
│   ├── email.ts           # Service email
│   └── config.ts          # Configuration
└── middleware.ts          # Protection des routes
```

## 🎨 Personnalisation

### Modifier le design
- Les styles CSS sont dans `src/app/globals.css`
- Le composant flip card est dans `src/components/FlipCardForm.tsx`

### Ajouter des champs utilisateur
1. Modifiez le schéma Prisma dans `prisma/schema.prisma`
2. Exécutez `npx prisma migrate dev`
3. Mettez à jour les formulaires d'inscription/connexion

## 🚨 Sécurité

- Mots de passe hashés avec bcrypt (12 rounds)
- Tokens de vérification avec expiration (24h)
- Protection CSRF avec NextAuth.js
- Validation côté serveur de tous les inputs
- Middleware de protection des routes

## 🐛 Dépannage

### Problèmes d'email
- Vérifiez les credentials Gmail
- Assurez-vous que l'authentification 2FA est activée
- Utilisez un mot de passe d'application, pas votre mot de passe normal

### Problèmes de base de données
```bash
# Réinitialiser la base de données
rm prisma/dev.db
npx prisma migrate dev
```

### Problèmes d'authentification
- Vérifiez que `NEXTAUTH_SECRET` est défini
- Assurez-vous que `NEXTAUTH_URL` correspond à votre URL

## 📝 Scripts disponibles

```bash
npm run dev          # Développement
npm run build        # Build de production
npm run start        # Démarrage production
npm run lint         # Linting
npx prisma studio    # Interface graphique de la DB
```

## 🤝 Contribution

1. Fork le projet
2. Créez une branche feature (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.
