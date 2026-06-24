import {
  Achievement,
  AboutSection,
  ContactLink,
  HeroData,
  JourneyItem,
  ProjectCard,
  ResumeCard,
  SkillGroup,
  ExperienceEntry,
} from '../shared/models/portfolio.model';

export const heroData: HeroData = {
  name: 'Dhiraj Prajapati',
  title: 'Frontend Developer specializing in Angular Applications',
  summary:
    '4+ years of experience building scalable enterprise and fintech applications using Angular, TypeScript, RxJS, and modern frontend technologies.',
  resumeUrl: 'assets/resume/dhiraj-prajapati-resume.pdf',
  projectsUrl: '#projects',
  contactUrl: '#contact',
  rolePills: ['Angular Developer', 'Frontend Developer', 'Software Engineer'],
};

export const aboutSection: AboutSection = {
  overview:
    'I build enterprise-grade Angular applications with a strong focus on maintainable architecture, performance, and polished user experiences.',
  summary:
    'Over the last four years, I have partnered with product teams to deliver fintech and enterprise workflows, reusable component libraries, and API-driven experiences for high-value users.',
  strengths: [
    'Component-driven development with standalone Angular architecture',
    'Performance optimization and lazy-loading strategies',
    'Strong collaboration with product, designers, and backend teams',
    'Clean and accessible code with reusable UI systems',
  ],
  value:
    'I bring a practical mindset that balances speed, scalability, and quality to help organizations ship reliable Angular products on time.',
};

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    items: ['Angular', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'SCSS', 'Angular Material'],
  },
  {
    title: 'Angular Expertise',
    items: ['Reactive Forms', 'RxJS', 'Lazy Loading', 'Route Guards', 'Interceptors', 'State Management', 'Authentication', 'Performance Optimization'],
  },
  {
    title: 'Tools',
    items: ['Git', 'GitHub', 'VS Code', 'Postman'],
  },
];

export const experienceEntries: ExperienceEntry[] = [
  {
    company: 'Futurewise Technologies Pvt Ltd (IFANOW)',
    role: 'SDE-II',
    dates: 'Nov 2021 - Present',
    location: 'Gujarat, India',
    responsibilities: [
      'Developed enterprise fintech applications.',
      'Integrated 100+ APIs.',
      'Built investment workflows for SIPs and mandate setup.',
      'Created reusable Angular components and shared UI patterns.',
      'Improved application performance through profiling and lazy loading.',
      'Collaborated closely with product and backend teams.',
    ],
  },
];

export const projectCards: ProjectCard[] = [
  {
    title: 'Wealth Management Platform',
    overview:
      'Enterprise-grade wealth management application enabling investor onboarding, SIP management, mandate setup, portfolio tracking and transaction processing.',
    technologies: ['Angular', 'RxJS', 'Angular Material', 'SCSS', 'REST APIs'],
    features: ['Investor onboarding', 'Portfolio analytics', 'Transaction workflows', 'Secure authorization flows'],
    architecture: ['Modular lazy-loaded feature modules', 'Reusable component library', 'API-driven dashboards'],
    github: 'https://github.com/dhirajprajapati/wealth-management-platform',
    demo: 'https://demo.example.com/wealth-management',
  },
  {
    title: 'Angular Upgrade Journey',
    overview:
      'Demonstration project showcasing migration from Angular 14 to newer Angular versions while maintaining performance and compatibility.',
    technologies: ['Angular 14+', 'Standalone Components', 'TypeScript', 'NgRx', 'CI/CD'],
    features: ['Incremental upgrade strategy', 'Compatibility testing', 'Performance benchmarks'],
    architecture: ['Signal-friendly component design', 'Scoped route lazy loading', 'Automated upgrade validation'],
    github: 'https://github.com/dhirajprajapati/angular-upgrade-journey',
    demo: 'https://demo.example.com/angular-upgrade',
  },
  {
    title: 'Dynamic Form Builder',
    overview:
      'Config-driven form generation system with dynamic validations and reusable controls.',
    technologies: ['Angular Forms', 'Reactive Forms', 'SCSS', 'Angular Material'],
    features: ['Dynamic field generation', 'Validation engine', 'Reusable control library'],
    architecture: ['Config-first UX', 'Composable form controls', 'Central validation service'],
    github: 'https://github.com/dhirajprajapati/dynamic-form-builder',
    demo: 'https://demo.example.com/dynamic-form-builder',
  },
];

export const journeyItems: JourneyItem[] = [
  {
    version: 'Angular 14',
    timeline: 'Foundation',
    summary: 'Built robust enterprise foundations with reusable component libraries and reactive forms.',
  },
  {
    version: 'Angular 15',
    timeline: 'Modernization',
    summary: 'Adopted standalone components and streamlined routing patterns for faster apps.',
  },
  {
    version: 'Angular 16',
    timeline: 'Signals & Optimization',
    summary: 'Added signals-based state and performance improvements across workflows.',
  },
  {
    version: 'Angular 17',
    timeline: 'Modern Architecture',
    summary: 'Refined architecture with typed injectors, image optimization, and SEO focus.',
  },
  {
    version: 'Angular 18+',
    timeline: 'Future-ready',
    summary: 'Focused on scalable enterprise patterns, accessibility, and developer experience.',
  },
];

export const achievements: Achievement[] = [
  {
    title: 'Hackathon Participation',
    detail: 'Delivered rapid prototypes with Angular under tight deadlines.',
  },
  {
    title: 'Enterprise Application Development',
    detail: 'Built production fintech modules for investor journeys and portfolio management.',
  },
  {
    title: 'API Integrations',
    detail: 'Integrated 100+ APIs with robust error handling and retry strategies.',
  },
  {
    title: 'Production Deployments',
    detail: 'Delivered multiple deploy-ready Angular applications with CI/CD readiness.',
  },
];

export const resumeCard: ResumeCard = {
  label: 'Professional Resume',
  description:
    'Download a polished resume summarizing my Angular experience, enterprise delivery, and technical skills.',
  downloadUrl: 'assets/resume/dhiraj-prajapati-resume.pdf',
};

export const contactLinks: ContactLink[] = [
  {
    name: 'LinkedIn',
    icon: 'linkedin',
    href: 'https://linkedin.com/in/dhiraj-prajapati',
    label: 'LinkedIn profile',
  },
  {
    name: 'GitHub',
    icon: 'github',
    href: 'https://github.com/dhirajprajapati',
    label: 'GitHub profile',
  },
  {
    name: 'Email',
    icon: 'mail',
    href: 'mailto:dhiraj.prajapati@example.com',
    label: 'Send email',
  },
];
