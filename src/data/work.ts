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
  /** Date range. Lives here rather than inside the description text. */
  period: Localized<string>;
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
    technologies: ['Unity', 'C#', 'Mobile', 'Editor Tools', 'Next.js', 'AI Agents', 'MCP'],
    title: {
      en: 'Game Programmer',
      es: 'Programador de Videojuegos',
    },
    period: {
      en: 'May 2026 – Present · Full-time',
      es: 'May 2026 – Actualidad · Jornada completa',
    },
    region: {
      en: 'Barcelona, Spain · Remote',
      es: 'Barcelona, España · En remoto',
    },
    // Approved by Nahuel. Describes the work, never the product: the title is
    // under NDA, so no genre, theme or studio details appear here.
    description: {
      en: 'Development of an unannounced mobile title in Unity. Implementation of the play scene presentation layer under an MVP pattern: round sequencing, state indicators, animation, shaders and gameplay audio. Built internal editor tooling, including a Figma-to-Unity interface importer with incremental reimport and a visual entity editor, plus a full-stack authoring web app (Next.js, React, TypeScript) to define entities, browse their relationships and edit them through AI agents, with role-based access and an audit trail. Designed and implemented the project’s AI-assisted development workflow: custom agents and skills, an MCP server, an automated code reviewer, and an architecture gate that measures coupling and blocks forbidden dependencies between layers.',
      es: 'Desarrollo de un título móvil sin anunciar en Unity. Implementación de la capa de presentación de la escena de juego bajo un patrón MVP: secuencias de ronda, indicadores de estado, animación, shaders y audio de gameplay. Desarrollo de herramientas internas de editor, entre ellas un importador de interfaz de Figma a Unity con reimportación incremental y un editor visual de entidades, además de una aplicación web de autoría (Next.js, React, TypeScript) para definir entidades, consultar sus relaciones y editarlas mediante agentes de IA, con control de acceso por roles y registro de auditoría. Diseño e implementación de los flujos de desarrollo asistidos por IA del proyecto: agentes y skills propios, servidor MCP, un revisor de código automático y un gate de arquitectura que mide acoplamiento y bloquea dependencias prohibidas entre capas.',
    },
  },
  {
    company: 'Titutitech',
    technologies: ['Unity', 'C#', 'URP', 'Shader Graph', 'HLSL', 'Addressables', 'Steam API', 'Nintendo Switch'],
    title: {
      en: 'Game Developer · Internship',
      es: 'Desarrollador de Videojuegos · Prácticas',
    },
    period: {
      en: 'Nov 2025 – May 2026',
      es: 'Nov 2025 – May 2026',
    },
    region: {
      en: 'Barcelona, Spain · Remote',
      es: 'Barcelona, España · En remoto',
    },
    description: {
      en: 'Internship in the Gameplay & Tools department, extended beyond the academic term, on a commercial title for PC and Nintendo Switch released on Steam. Refactored the localisation and typography system on top of Addressables, with CJK font support and custom editor tooling to manage it. Developed and adapted shaders and visual effects in URP, including full-screen effects in Shader Graph and a generic manager to orchestrate them. Built a leaderboard system from scratch against the Steam API, with pagination, current-player position and loading states. Implemented new mechanics — bounce physics and a zone-based scoring system with camera shake driven by mass and impact — a complete level, and internal tooling to speed up adding new playable content.',
      es: 'Prácticas en el departamento de Gameplay & Tools, ampliadas más allá del periodo académico, sobre un título comercial para PC y Nintendo Switch distribuido en Steam. Refactorización del sistema de localización y tipografías sobre Addressables, con soporte de fuentes CJK y herramientas de editor propias para gestionarlo. Desarrollo y adaptación de shaders y efectos visuales en URP, incluidos efectos de pantalla completa con Shader Graph y un gestor genérico para orquestarlos. Implementación desde cero de un sistema de clasificaciones contra la API de Steam, con paginación, posición del jugador y estados de carga. Nuevas mecánicas —físicas de rebote y un sistema de puntuación por zonas con sacudida de cámara según masa e impacto—, un nivel completo y herramientas internas para agilizar la incorporación de contenido jugable.',
    },
  },
  {
    company: 'Fundación Obicex',
    technologies: ['Unity', 'C#', 'Firebase/Auth', 'Git', '3D', 'UI'],
    title: {
      en: 'Unity Developer · Internship',
      es: 'Desarrollador Unity · Prácticas',
    },
    period: {
      en: '4 months',
      es: '4 meses',
    },
    region: {
      en: 'Barcelona, Spain.',
      es: 'Barcelona, España.',
    },
    description: {
      en: 'Developed a cross-platform Unity application (web and mobile) with a cryptographic login system. Implemented gameplay features, UI components, and integrated backend authentication APIs.',
      es: 'Desarrollo de una aplicación multiplataforma en Unity (web y móvil) con sistema de inicio de sesión encriptado. Implementación de mecánicas de la aplicación, componentes de interfaz y conexión con APIs de autenticación backend.',
    },
  },
];

export interface WorkItem {
  title: string;
  company: string;
  period: string;
  region: string;
  description: string;
  technologies: string[];
}

export function getWork(locale: Locale): WorkItem[] {
  return entries.map((entry) => ({
    company: entry.company,
    technologies: entry.technologies,
    title: pick(entry.title, locale),
    period: pick(entry.period, locale),
    region: pick(entry.region, locale),
    description: pick(entry.description, locale),
  }));
}
