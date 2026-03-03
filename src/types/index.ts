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
  title: string;
  items: string[];
}

export interface Project {
  title: string;
  description: string;
  link?: string;
  tech?: string[];
}
