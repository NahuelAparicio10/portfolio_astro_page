import unity from '../assets/logos/engines/01-Unity-logo.svg?raw';
import visual_studio from '../assets/logos/ides/01-VisualStudio-logo.svg?raw';
import { pick, type Localized } from '../i18n/localized';
import { asset, type Locale } from '../lib/href';

interface ProjectEntry {
  techStack: string[];
  ctaLink: string;
  icon: string;
  image: string;
  title: Localized<string>;
  description: Localized<string>;
  ctaText: Localized<string>;
}

const VIDEO_CTA: Localized<string> = { en: 'Video →', es: 'Vídeo →' };
const GITHUB_CTA: Localized<string> = { en: 'GitHub →', es: 'GitHub →' };

const entries: ProjectEntry[] = [
  {
    techStack: ['Unity', 'C#', 'Combat System', 'AI FSM', 'Scriptable Objects', 'Rider'],
    ctaLink: 'https://youtu.be/51P_9O86KOE',
    ctaText: VIDEO_CTA,
    icon: unity,
    image: asset('/images/projects/combat_souls.png'),
    title: {
      en: 'Souls-like Combat System (2025)',
      es: 'Sistema de Combate Souls-like (2025)',
    },
    description: {
      en: 'A 3D Souls-like combat system in Unity, where I focused on building a clean, optimized, and modular player system with solid architecture. For example, you can set and customize player combos through Scriptable Objects. (Solo, 3 weeks)',
      es: 'Sistema de combate 3D estilo Souls en Unity, centrado en una arquitectura limpia, optimizada y modular para el jugador. Por ejemplo, se pueden definir y personalizar combos mediante Scriptable Objects. (Individual, 3 semanas)',
    },
  },
  {
    techStack: ['C++', 'UDP', 'ECS', 'Sockets', 'Visual Studio'],
    ctaLink: 'https://github.com/NahuelAparicio10/UDP_Shooter_GameServer',
    ctaText: GITHUB_CTA,
    icon: visual_studio,
    image: asset('/images/projects/shooter_udp.png'),
    title: {
      en: 'UDP Shooter Game (2025)',
      es: 'Shooter UDP (2025)',
    },
    description: {
      en: 'A 2D online multiplayer shooter built in C++ with UDP sockets. Includes a client, authoritative game server, and service server for matchmaking, authentication, and ranking. (Team of 2, 2 weeks)',
      es: 'Shooter multijugador online 2D desarrollado en C++ con sockets UDP. Incluye cliente, servidor de juego autoritativo y servidor de servicios para matchmaking, autenticación y ranking. (Equipo de 2, 2 semanas)',
    },
  },
  {
    techStack: ['C++', 'TCP', 'ECS', 'Visual Studio'],
    ctaLink: 'https://github.com/llucferrando/AA2_TCP_Parchis',
    ctaText: GITHUB_CTA,
    icon: visual_studio,
    image: asset('/images/projects/splash.png'),
    title: {
      en: 'TCP Parchis/Ludo Game (2025)',
      es: 'Parchís TCP (2025)',
    },
    description: {
      en: 'Online multiplayer version of the classic board game Parchis, built in C++ with TCP sockets and an ECS architecture. Includes login, lobby creation, and full gameplay loop. (Team of 2, 2 weeks)',
      es: 'Versión multijugador online del clásico Parchís, desarrollada en C++ con sockets TCP y arquitectura ECS. Incluye login, creación de salas y ciclo de juego completo. (Equipo de 2, 2 semanas)',
    },
  },
  {
    techStack: ['C++', 'C', 'OpenGL', 'Engine', 'ECS', '3D Scene', 'Lights'],
    ctaLink: 'https://github.com/NahuelAparicio10/OpenGL_MiniEngine',
    ctaText: GITHUB_CTA,
    icon: visual_studio,
    image: asset('/images/projects/engine_spotlight.png'),
    title: {
      en: 'OpenGL - Mini Engine (2024)',
      es: 'OpenGL - Mini Motor (2024)',
    },
    description: {
      en: 'Mini engine built in C++ with OpenGL showcasing real-time lighting. Features day/night cycle, ambient light, dynamic flashlight, and procedural scene generation. (Solo, 2 weeks)',
      es: 'Mini motor desarrollado en C++ con OpenGL mostrando iluminación en tiempo real. Incluye ciclo día/noche, luz ambiental, linterna dinámica y generación procedural de escenas. (Individual, 2 semanas)',
    },
  },
  {
    techStack: ['C#', 'Custom Math', 'Unity'],
    ctaLink: 'https://github.com/NahuelAparicio10/GerstnerWaves',
    ctaText: GITHUB_CTA,
    icon: unity,
    image: asset('/images/projects/waves.png'),
    title: {
      en: 'Gerstner Waves (2024)',
      es: 'Gerstner Waves (2024)',
    },
    description: {
      en: 'Recreation of sea waves using a mesh array of points and custom math. Implemented Gerstner waves for realistic motion and developed buoyancy logic so floating objects respond naturally to the sea surface. (Solo, 1 day)',
      es: 'Recreación de olas marinas usando una malla de puntos y matemáticas personalizadas. Implementación de olas de Gerstner para un movimiento realista y lógica de flotación para que los objetos respondan naturalmente a la superficie. (Individual, 1 día)',
    },
  },
];

export interface ProjectItem {
  title: string;
  techStack: string[];
  description: string;
  ctaText: string;
  ctaLink: string;
  icon: string;
  image: string;
}

export function getProjects(locale: Locale): ProjectItem[] {
  return entries.map((entry) => ({
    techStack: entry.techStack,
    ctaLink: entry.ctaLink,
    icon: entry.icon,
    image: entry.image,
    title: pick(entry.title, locale),
    description: pick(entry.description, locale),
    ctaText: pick(entry.ctaText, locale),
  }));
}
