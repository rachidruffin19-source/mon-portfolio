export const siteTitle = 'Rachid Ruffin | Développeur Fullstack';
export const siteDescription =
  'Portfolio Rachid Ruffin — Développeur Fullstack. Je conçois des applications web modernes — du front au back.';

/**
 * 📚 LEÇON — import.meta.env.SITE
 * Astro expose automatiquement la valeur de `site:` dans astro.config.mjs
 * comme variable d'environnement gérée par Vite.
 * ✔ En dev : prend la valeur de astro.config.mjs
 * ✔ En prod (Netlify/Vercel) : la plateforme peut surcharger via SITE env var
 * Résultat : canonical tag correct en toutes circonstances
 */
export const siteUrl = import.meta.env.SITE ?? 'https://rachidruffin.netlify.app';

export const ogImage = '/og-image.svg';
export const twitterHandle = '@rachidruffin';
