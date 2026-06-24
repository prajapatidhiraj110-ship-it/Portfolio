export interface HeroData {
  name: string;
  title: string;
  summary: string;
  resumeUrl: string;
  projectsUrl: string;
  contactUrl: string;
  rolePills: string[];
}

export interface AboutSection {
  overview: string;
  summary: string;
  strengths: string[];
  value: string;
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface AngularExpertise {
  name: string;
  level: number;
}

export interface ExperienceEntry {
  company: string;
  role: string;
  dates: string;
  location: string;
  responsibilities: string[];
}

export interface ProjectCard {
  title: string;
  overview: string;
  technologies: string[];
  features: string[];
  architecture: string[];
  github: string;
  demo: string;
}

export interface JourneyItem {
  version: string;
  timeline: string;
  summary: string;
}

export interface Achievement {
  title: string;
  detail: string;
}

export interface ContactLink {
  name: string;
  icon: string;
  href: string;
  label: string;
}

export interface ResumeCard {
  label: string;
  description: string;
  downloadUrl: string;
}
