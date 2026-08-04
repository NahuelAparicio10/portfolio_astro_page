import companyIconRaw from '../assets/icons/company-icon.svg?raw';
import jobIconRaw from '../assets/icons/job-title-icon.svg?raw';
import locationIconRaw from '../assets/icons/location-icon.svg?raw';
import { pick, type Localized } from '../i18n/localized';
import type { Locale } from '../lib/href';
import { sanitizeToOutline } from '../lib/svg';

export const workIcons = {
  job: sanitizeToOutline(jobIconRaw, 15),
  company: sanitizeToOutline(companyIconRaw, 15),
  location: sanitizeToOutline(locationIconRaw, 15),
};

interface WorkEntry {
  company: string;
  technologies: string[];
  title: Localized<string>;
  region: Localized<string>;
  description: Localized<string>;
}

/**
 * Single source of truth for both languages. This file and `data/es/es_work.ts`
 * used to be separate and had already drifted: the English version listed two
 * positions and the Spanish one only listed one.
 */
const entries: WorkEntry[] = [
  {
    company: 'Titutitech',
    technologies: ['Unity', 'C#', 'Optimization', 'Fork', 'UI'],
    title: {
      en: 'Game Developer',
      es: 'Desarrollador de Videojuegos',
    },
    region: {
      en: 'Barcelona, Spain.',
      es: 'Barcelona, España.',
    },
    description: {
      en: 'Currently working.',
      es: 'Actualmente en activo.',
    },
  },
  {
    company: 'Fundación Obicex',
    technologies: ['Unity', 'C#', 'Firebase/Auth', 'Git', '3D', 'UI'],
    title: {
      en: 'Unity Developer Internship',
      es: 'Prácticas como Desarrollador Unity',
    },
    region: {
      en: 'Barcelona, Spain.',
      es: 'Barcelona, España.',
    },
    description: {
      en: '4-month internship developing a cross-platform Unity application (web & mobile) with cryptographic login system. Implemented gameplay features, UI components, and integrated backend authentication APIs.',
      es: 'Prácticas de 4 meses desarrollando una aplicación multiplataforma en Unity (web y móvil) con sistema de inicio de sesión encriptado. Implementación de mecánicas de la aplicación, componentes de interfaz y conexión con APIs de autenticación backend.',
    },
  },
];

export interface WorkItem {
  title: string;
  company: string;
  region: string;
  description: string;
  technologies: string[];
}

export function getWork(locale: Locale): WorkItem[] {
  return entries.map((entry) => ({
    company: entry.company,
    technologies: entry.technologies,
    title: pick(entry.title, locale),
    region: pick(entry.region, locale),
    description: pick(entry.description, locale),
  }));
}
