import type { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    title: 'SIKY',
    description:
      'Plateforme e-commerce multi-vendeurs conçue pour le marché malgache. Architecture fullstack avec gestion des stocks, commandes, vendeurs et paiements.',
    tech: ['Node.js', 'EJS', 'JavaScript', 'CSS', 'MongoDB'],
    demo: 'https://siky-ecom.onrender.com',
    visibility: 'private',
    featured: true,
  },
  {
    title: 'SIS — Smart Intel System',
    description:
      'Agent de veille technologique autonome alimenté par l\'IA. Scrape les meilleures sources tech, analyse chaque article avec Groq (Llama 3), notifie sur Telegram — avec dashboard web pour tout visualiser.',
    tech: ['Node.js', 'HTML', 'CSS', 'JavaScript', 'Docker', 'Datadog', 'SLSA'],
    github: 'https://github.com/rachidruffin19-source/SIS',
    visibility: 'public',
    featured: true,
  },
  {
    title: 'Mon Portfolio',
    description:
      'Portfolio professionnel conçu avec Astro, TypeScript et Tailwind CSS v4. Glassmorphism design, StarField animé, scroll reveal, accessible WCAG 2.1 AA.',
    tech: ['Astro', 'TypeScript', 'Tailwind CSS', 'JavaScript'],
    github: 'https://github.com/rachidruffin19-source/mon-portfolio',
    demo: 'https://rachidruffin.vercel.app',
    visibility: 'public',
    featured: true,
  },
  {
    title: 'WeTheNew — Headless',
    description:
      'Contribution au développement headless de wethenew.com, plateforme e-commerce de sneakers et streetwear premium.',
    tech: ['TypeScript', 'SCSS'],
    visibility: 'private',
    featured: false,
  },
];