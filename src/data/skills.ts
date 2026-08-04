import aiIcon from '../assets/icons/skills/ai.svg?raw';
import gameFeelIcon from '../assets/icons/skills/game-feel.svg?raw';
import gameplayIcon from '../assets/icons/skills/gameplay.svg?raw';
import graphicsIcon from '../assets/icons/skills/graphics.svg?raw';
import networkingIcon from '../assets/icons/skills/networking.svg?raw';
import toolsIcon from '../assets/icons/skills/tools.svg?raw';
import { pick, type Localized } from '../i18n/localized';
import type { Locale } from '../lib/href';

interface SkillEntry {
  icon: string;
  /** Concrete technologies, shown as tags. Not translated. */
  tags: string[];
  title: Localized<string>;
  description: Localized<string>;
}

/**
 * Every category is backed by real work — a job or a shipped project. The file
 * this replaced was the starter template's placeholder content and advertised
 * React, Next.js, Postgres, Redis, AWS and Terraform, none of which reflected
 * the profile.
 */
const entries: SkillEntry[] = [
  {
    icon: gameplayIcon,
    tags: ['Unity', 'C#', 'FSM / HFSM', 'Utility AI', 'ScriptableObjects', 'Physics'],
    title: {
      en: 'Gameplay Programming',
      es: 'Programación de Gameplay',
    },
    description: {
      en: 'Combat, movement, physics and state machines. Enemy AI built on hierarchical state machines and utility-based decision making, with data-driven combos and abilities authored from the editor rather than hardcoded.',
      es: 'Combate, movimiento, físicas y máquinas de estado. IA de enemigos sobre máquinas de estado jerárquicas y decisión por utilidad, con combos y habilidades definidos desde el editor en lugar de escritos en código.',
    },
  },
  {
    icon: gameFeelIcon,
    tags: ['Animation', 'VFX', 'Audio', 'Camera Shake', 'Sequencing'],
    title: {
      en: 'Game Feel & Feedback',
      es: 'Game Feel y Feedback',
    },
    description: {
      en: 'The layer that makes an action feel like it landed: animation, visual effects, gameplay audio and round sequencing. Impact response tuned against mass and velocity so feedback matches what the systems actually did.',
      es: 'La capa que hace que una acción se sienta: animación, efectos visuales, audio de gameplay y secuenciación de rondas. Respuesta al impacto ajustada según masa y velocidad, para que el feedback corresponda a lo que ha ocurrido de verdad.',
    },
  },
  {
    icon: graphicsIcon,
    tags: ['URP', 'Shader Graph', 'HLSL', 'OpenGL', 'Post-processing'],
    title: {
      en: 'Graphics & Shaders',
      es: 'Gráficos y Shaders',
    },
    description: {
      en: 'Shaders and visual effects in Unity URP, including full-screen effects and a generic manager to orchestrate them. Real-time lighting from the other side too: a small C++/OpenGL engine with dynamic lights and procedural scenes.',
      es: 'Shaders y efectos visuales en URP de Unity, incluidos efectos de pantalla completa y un gestor genérico para orquestarlos. También iluminación en tiempo real desde el otro lado: un pequeño motor en C++/OpenGL con luces dinámicas y escenas procedurales.',
    },
  },
  {
    icon: toolsIcon,
    tags: ['Unity Editor', 'Figma API', 'Next.js', 'React', 'TypeScript', 'Addressables'],
    title: {
      en: 'Engine & Tools',
      es: 'Motores y Herramientas',
    },
    description: {
      en: 'Internal tooling that removes manual work for a whole team: a Figma-to-Unity interface importer with incremental reimport, a visual entity editor, and a full-stack authoring web app with role-based access and an audit trail.',
      es: 'Herramientas internas que eliminan trabajo manual a todo un equipo: un importador de interfaz de Figma a Unity con reimportación incremental, un editor visual de entidades y una aplicación web de autoría con control de acceso por roles y registro de auditoría.',
    },
  },
  {
    icon: aiIcon,
    tags: ['Claude Code', 'Codex', 'OpenSpec', 'MCP', 'Code Review Agents'],
    title: {
      en: 'AI & Automation',
      es: 'IA y Automatización',
    },
    description: {
      en: 'Building the AI-assisted development workflow itself, not just using it: custom agents and skills, an MCP server, an automated code reviewer, and spec-driven pipelines that keep intent and implementation in sync.',
      es: 'Construir el propio flujo de desarrollo asistido por IA, no solo usarlo: agentes y skills a medida, un servidor MCP, un revisor de código automático y flujos dirigidos por especificaciones que mantienen alineadas intención e implementación.',
    },
  },
  {
    icon: networkingIcon,
    tags: ['C++', 'UDP / TCP', 'ECS', 'SOLID', 'Authoritative Server'],
    title: {
      en: 'Networking & Architecture',
      es: 'Redes y Arquitectura',
    },
    description: {
      en: 'Multiplayer from sockets up: authoritative game servers in C++ with matchmaking and ranking, over UDP and TCP. Architecture kept honest with an automated gate that measures coupling and blocks forbidden dependencies between layers.',
      es: 'Multijugador desde los sockets: servidores de juego autoritativos en C++ con matchmaking y ranking, sobre UDP y TCP. La arquitectura se mantiene sana con un gate automático que mide acoplamiento y bloquea dependencias prohibidas entre capas.',
    },
  },
];

export interface Skill {
  icon: string;
  title: string;
  description: string;
  tags: string[];
}

export function getSkills(locale: Locale): Skill[] {
  return entries.map((entry) => ({
    icon: entry.icon,
    tags: entry.tags,
    title: pick(entry.title, locale),
    description: pick(entry.description, locale),
  }));
}
