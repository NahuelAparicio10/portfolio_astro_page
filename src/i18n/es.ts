import type { TranslationSchema } from './en';

/**
 * Typed against the English schema, so a missing or renamed key is a build
 * error rather than a string that silently falls back at runtime.
 */
export const es: TranslationSchema = {
  nav: {
    home: 'Inicio',
    about: 'Sobre mí',
    skills: 'Skills',
    games: 'Juegos',
    projects: 'Proyectos',
    contact: 'CV y Contacto',
    openMenu: 'Abrir menú',
    switchLanguage: 'Switch to English',
  },
  home: {
    role: 'Programador de Gameplay y',
    roleAccent: 'Desarrollador de Videojuegos',
    tagline: 'Programando el puente entre el diseño y la experiencia del jugador.',
    ctaAbout: 'Sobre mí',
    ctaSkills: 'Skills',
    ctaGames: 'Juegos',
    ctaProjects: 'Proyectos',
    ctaContact: 'CV y contacto',
  },
  blog: {
    title: 'JUEGOS',
    previous: 'Anterior',
    next: 'Siguiente',
    page: 'Página',
    of: 'de',
    readingTime: 'min de lectura',
    allArticles: 'Todos los artículos',
    share: 'Compartir',
  },
  work: {
    title: 'Experiencia laboral',
  },
  studies: {
    title: 'Formación',
  },
  projects: {
    title: 'Proyectos',
  },
  footer: {
    downloadCv: 'Descargar CV',
    rights: 'Todos los derechos reservados.',
  },
};
