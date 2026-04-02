import type { TimelineItem } from '../types';

export const EXPERIENCES: TimelineItem[] = [
  {
    type: 'experience',
    title: 'Contributeur Fullstack',
    organization: 'WeTheNew — Headless',
    period: '2024',
    description:
      'Participation au développement de l\'infrastructure headless de wethenew.com, plateforme e-commerce premium de sneakers et streetwear.',
    tech: ['TypeScript', 'SCSS'],
  },
  {
    type: 'project',
    title: 'Fondateur & Développeur',
    organization: 'SIKY E-commerce',
    period: '2024 — présent',
    description:
      'Conception et développement d\'une plateforme e-commerce multi-vendeurs pour le marché malgache. Architecture fullstack, gestion produits, commandes et paiements.',
    tech: ['Node.js', 'EJS', 'MongoDB', 'JavaScript'],
    link: 'https://siky-ecom.onrender.com',
    current: true,
  },
  {
    type: 'project',
    title: 'Créateur',
    organization: 'SIS — Smart Intel System',
    period: '2024 — présent',
    description:
      'Agent IA autonome de veille technologique. Scraping, analyse avec Groq/Llama 3, notifications Telegram et dashboard de visualisation.',
    tech: ['Node.js', 'Docker', 'Datadog', 'Groq API'],
    current: true,
  },
];

export const EDUCATION: TimelineItem[] = [
  {
    type: 'education',
    title: 'Développement Fullstack',
    organization: 'En cours d\'officialisation',
    period: '2023 — présent',
    description:
      'Formation en développement web fullstack. Spécialisation JavaScript, architecture backend, bases de données et intégration IA.',
    current: true,
  },
  {
    type: 'education',
    title: 'Auto-formation continue',
    organization: 'Open source & projets personnels',
    period: '2022 — présent',
    description:
      'Apprentissage autodidacte via projets concrets : C++, Python, Astro, Docker, IA générative. Philosophie : apprendre en construisant.',
    current: true,
  },
];