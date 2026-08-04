import { pick, type Localized } from '../i18n/localized';
import type { Locale } from '../lib/href';

interface StudyEntry {
  tags: string[];
  title: Localized<string>;
  institution: Localized<string>;
  description: Localized<string>;
}

const entries: StudyEntry[] = [
  {
    tags: ['Unity', 'Unreal', 'C#', 'C++', 'OpenGL', 'SFML', 'UDP | TCP', 'QA', 'Game Design', '3D Tools'],
    title: {
      en: "Bachelor's degree in Interactive Digital Contents",
      es: 'Grado en Contenidos Digitales Interactivos',
    },
    institution: {
      en: 'Enti UB - University of Barcelona',
      es: 'Enti UB - Universidad de Barcelona',
    },
    description: {
      en: 'Comprehensive program in <strong>software engineering and game development</strong>. Hands-on experience with Unity, Unreal Engine, Phaser, SFML, and OpenGL, as well as low-level programming, computer networks, and game design, among many other things.',
      es: 'Programa completo en <strong>ingeniería de software y desarrollo de videojuegos</strong>. Experiencia práctica con Unity, Unreal Engine, Phaser, SFML y OpenGL, además de programación de bajo nivel, redes informáticas y diseño de videojuegos, entre muchas otras áreas.',
    },
  },
  {
    tags: ['CFGS', 'HNC', 'C#', 'Unity', 'SOLID', 'Design Patterns', 'Adobe Package', '3D Tools', 'VR & AR', 'Rigging'],
    title: {
      en: 'Higher National Certificate in 3D Animations, Games and Interactive Environments',
      es: 'CFGS en Animaciones 3D, Juegos y Entornos Interactivos',
    },
    institution: {
      en: 'Fundación Obicex',
      es: 'Fundación Obicex',
    },
    description: {
      en: 'Specialized certification covering the <strong>complete game development pipeline</strong> - from 3D modeling and animation to AI programming and immersive VR/AR experiences. Built interactive environments using industry-standard tools and best practices.',
      es: 'Titulación especializada que cubre <strong>todo el pipeline de desarrollo de videojuegos</strong>: desde modelado y animación 3D hasta programación de IA y experiencias inmersivas en VR/AR. Creación de entornos interactivos utilizando herramientas estándar de la industria y buenas prácticas.',
    },
  },
];

export interface StudyItem {
  title: string;
  institution: string;
  description: string;
  tags: string[];
}

export function getStudies(locale: Locale): StudyItem[] {
  return entries.map((entry) => ({
    tags: entry.tags,
    title: pick(entry.title, locale),
    institution: pick(entry.institution, locale),
    description: pick(entry.description, locale),
  }));
}
