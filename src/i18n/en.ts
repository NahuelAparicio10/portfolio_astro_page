export const en = {
  nav: {
    home: 'Home',
    about: 'About',
    skills: 'Skills',
    games: 'Game Projects',
    projects: 'Projects',
    contact: 'CV & Contact',
    openMenu: 'Open menu',
    switchLanguage: 'Cambiar a Español',
  },
  home: {
    role: 'Gameplay Programmer &',
    roleAccent: 'Game Developer',
    tagline: 'Coding the bridge between design and player experience.',
    ctaAbout: 'About Me',
    ctaSkills: 'Skills',
    ctaGames: 'Game Projects',
    ctaProjects: 'Projects',
    ctaContact: 'Contact Me',
  },
  blog: {
    title: 'GAME PROJECTS',
    previous: 'Previous',
    next: 'Next',
    page: 'Page',
    of: 'of',
    readingTime: 'min read',
    allArticles: 'All articles',
    share: 'Share',
  },
  work: {
    title: 'Work Experience',
  },
  studies: {
    title: 'Education',
  },
  projects: {
    title: 'Projects',
  },
  footer: {
    downloadCv: 'Download CV',
    rights: 'All rights reserved.',
  },
} as const;

export type TranslationSchema = typeof en;
