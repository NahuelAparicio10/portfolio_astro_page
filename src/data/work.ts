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
  /** One or two lines of context. The detail belongs in `highlights`. */
  description: Localized<string>;
  /** Scannable bullets. Nobody reads a wall of text on a portfolio card. */
  highlights: Localized<string[]>;
}

const entries: WorkEntry[] = [
  {
    company: 'Titutitech',
    technologies: ['Unity', 'C#', 'Mobile', 'Editor Tools', 'Next.js', 'AI Agents', 'MCP'],
    title: {
      en: 'Game Programmer',
      es: 'Programador de Videojuegos',
    },
    period: {
      en: 'May 2026 to present',
      es: 'May 2026 a la actualidad',
    },
    region: {
      en: 'Barcelona, Spain. Remote',
      es: 'Barcelona, España. En remoto',
    },
    // Approved by Nahuel. Describes the work, never the product: the title is
    // under NDA, so no genre, theme or studio details appear here.
    description: {
      en: 'Unannounced mobile title in Unity. Gameplay presentation, internal tooling and the studio’s AI-assisted development workflow.',
      es: 'Título móvil sin anunciar en Unity. Presentación de gameplay, herramientas internas y el flujo de desarrollo asistido por IA del estudio.',
    },
    highlights: {
      en: [
        '<strong>Play scene presentation layer</strong> on an MVP pattern: round sequencing, state indicators, animation, shaders and gameplay audio.',
        '<strong>Figma to Unity interface importer</strong> with incremental reimport, plus a visual entity editor.',
        '<strong>Full-stack authoring web app</strong> in Next.js and React, with role-based access, audit trail and entity editing through AI agents.',
        '<strong>AI development workflow</strong>: custom agents and skills, an MCP server and an automated code reviewer.',
        '<strong>Architecture gate</strong> that measures coupling and blocks forbidden dependencies between layers.',
      ],
      es: [
        '<strong>Capa de presentación de la escena de juego</strong> con patrón MVP: secuencias de ronda, indicadores de estado, animación, shaders y audio de gameplay.',
        '<strong>Importador de interfaz de Figma a Unity</strong> con reimportación incremental, y un editor visual de entidades.',
        '<strong>Aplicación web de autoría</strong> en Next.js y React, con control de acceso por roles, auditoría y edición de entidades mediante agentes de IA.',
        '<strong>Flujo de desarrollo con IA</strong>: agentes y skills propios, un servidor MCP y un revisor de código automático.',
        '<strong>Gate de arquitectura</strong> que mide acoplamiento y bloquea dependencias prohibidas entre capas.',
      ],
    },
  },
  {
    company: 'Titutitech',
    technologies: ['Unity', 'C#', 'URP', 'Shader Graph', 'HLSL', 'Addressables', 'Steam API', 'Nintendo Switch'],
    title: {
      en: 'Game Developer, Internship',
      es: 'Desarrollador de Videojuegos, Prácticas',
    },
    period: {
      en: 'Nov 2025 to May 2026',
      es: 'Nov 2025 a May 2026',
    },
    region: {
      en: 'Barcelona, Spain. Remote',
      es: 'Barcelona, España. En remoto',
    },
    description: {
      en: 'Gameplay & Tools department, on a commercial title for PC and Nintendo Switch released on Steam. Extended beyond the academic term.',
      es: 'Departamento de Gameplay & Tools, en un título comercial para PC y Nintendo Switch distribuido en Steam. Ampliadas más allá del periodo académico.',
    },
    highlights: {
      en: [
        '<strong>Localisation and typography system</strong> rebuilt on Addressables, with CJK font support and custom editor tooling.',
        '<strong>Shaders and visual effects</strong> in URP, including full-screen effects in Shader Graph and a manager to orchestrate them.',
        '<strong>Leaderboard system</strong> built from scratch against the Steam API, with pagination and current-player position.',
        '<strong>New mechanics</strong>: bounce physics and zone-based scoring with camera shake driven by mass and impact.',
        '<strong>A complete level</strong>, plus internal tooling to speed up adding playable content.',
      ],
      es: [
        '<strong>Sistema de localización y tipografías</strong> reconstruido sobre Addressables, con soporte de fuentes CJK y herramientas de editor propias.',
        '<strong>Shaders y efectos visuales</strong> en URP, incluidos efectos de pantalla completa con Shader Graph y un gestor para orquestarlos.',
        '<strong>Sistema de clasificaciones</strong> creado desde cero contra la API de Steam, con paginación y posición del jugador.',
        '<strong>Nuevas mecánicas</strong>: físicas de rebote y puntuación por zonas con sacudida de cámara según masa e impacto.',
        '<strong>Un nivel completo</strong>, además de herramientas internas para agilizar la incorporación de contenido jugable.',
      ],
    },
  },
  {
    company: 'Fundación Obicex',
    technologies: ['Unity', 'C#', 'Firebase/Auth', 'Git', '3D', 'UI'],
    title: {
      en: 'Unity Developer, Internship',
      es: 'Desarrollador Unity, Prácticas',
    },
    period: {
      en: '4 months',
      es: '4 meses',
    },
    region: {
      en: 'Barcelona, Spain',
      es: 'Barcelona, España',
    },
    description: {
      en: 'Cross-platform Unity application for web and mobile with a cryptographic login system.',
      es: 'Aplicación multiplataforma en Unity para web y móvil con sistema de inicio de sesión encriptado.',
    },
    highlights: {
      en: [
        '<strong>Gameplay features</strong> and UI components.',
        '<strong>Backend authentication APIs</strong> integrated end to end.',
      ],
      es: [
        '<strong>Funcionalidades de la aplicación</strong> y componentes de interfaz.',
        '<strong>APIs de autenticación backend</strong> integradas de extremo a extremo.',
      ],
    },
  },
];

export interface WorkItem {
  title: string;
  company: string;
  period: string;
  region: string;
  description: string;
  highlights: string[];
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
    highlights: pick(entry.highlights, locale),
  }));
}
