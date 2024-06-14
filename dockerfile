# Utiliser une image de base officielle de Node.js
FROM node:18-alpine AS base

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers package.json et package-lock.json (si disponible)
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers de l'application
COPY . .

# Construire l'application Next.js pour la production
RUN npm run build

# Utiliser une image plus légère pour la phase de production
FROM node:18-alpine AS production

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier uniquement les fichiers nécessaires depuis le build précédent
COPY --from=base /app/package*.json ./
COPY --from=base /app/node_modules ./node_modules
COPY --from=base /app/.next ./.next
COPY --from=base /app/public ./public

# Installer les dépendances de production
RUN npm install --only=production

# Exposer le port que l'application va utiliser
EXPOSE 3000

# Démarrer l'application Next.js
CMD ["npm", "start"]