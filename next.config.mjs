// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, // Active le mode strict de React pour aider à détecter les problèmes potentiels
    swcMinify: true, // Utilise le compresseur SWC pour des temps de build plus rapides
    images: {
      domains: ['couleurdeson.fr'], // Autorise les images provenant de ces domaines
    },
    i18n: {
      locales: ['fr', 'en'], // Définit les langues disponibles
      defaultLocale: 'fr', // Définit la langue par défaut
    },
  };
  
  export default nextConfig;