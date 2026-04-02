export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
  ariaLabel?: string;
}

export interface SocialLinks {
  github: string;
  linkedIn: string;
  email: string;
}

export interface SkillCategory {
  name: string;
  color: 'cyan' | 'violet' | 'pink' | 'emerald';
  items: Skill[];
}

export interface Skill {
  name: string;
  icon: string; // SVG path d=
  color: string; // hex ou rgb
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  visibility: 'public' | 'private';
  featured?: boolean;
}

export interface TimelineItem {
  type: 'experience' | 'education' | 'project';
  title: string;
  organization: string;
  period: string;
  description: string;
  tech?: string[];
  link?: string;
  current?: boolean;
}