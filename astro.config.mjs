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
 * ✅ URL de production : https://mon-portfolio-rachid-ruffin.vercel.app
 */
export default defineConfig({
  site: 'https://mon-portfolio-rachid-ruffin.vercel.app',
  vite: {
    plugins: [tailwindcss()],
  },
});
