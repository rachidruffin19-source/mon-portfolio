// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

/**
 * 📚 LEÇON — La propriété `site` dans Astro
 *
 * Elle sert à deux choses importantes :
 * 1. Elle alimente `import.meta.env.SITE` dans tout ton code
 * 2. Elle permet à Astro de générer des URLs absolues correctes (sitemap, RSS, canonical)
 *
 * En dev : tu vois localhost dans le navigateur, mais les meta tags utilisent cette valeur
 * En prod : tu déploies et tout est correct automatiquement
 *
 * ⚠️ À FAIRE : remplacer l'URL par ta vraie URL après le deploy Netlify/Vercel
 */
export default defineConfig({
  site: 'https://rachidruffin.netlify.app',
  vite: {
    plugins: [tailwindcss()],
  },
});
