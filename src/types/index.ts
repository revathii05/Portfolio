export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Full-Stack' | 'Data Science & ML' | 'Business Intelligence';
  timeline: string;
  description: string;
  problem: string;
  solution: string;
  contributions: string[];
  features: string[];
  technologies: string[];
  metrics?: { label: string; value: string }[];
  githubUrl?: string;
  liveDemoUrl?: string;
  previewType: 'fraud-shield' | 'civix' | 'power-bi';
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  timeline: string;
  type: 'Internship';
  description: string;
  highlights: string[];
  technologies: string[];
  badgeColor?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  score: string;
  period: string;
  details?: string;
  highlights?: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  badge?: string;
  category: 'Data Science' | 'Programming' | 'Cloud & Security' | 'Core CS' | 'Professional Skills';
}

export interface Achievement {
  title: string;
  organization: string;
  description: string;
  roleBadge: string;
  highlights: string[];
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    description: string;
    highlight?: boolean;
    tags?: string[];
  }[];
}
