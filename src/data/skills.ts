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
  /** One line of context. The detail goes in `points`. */
  description: Localized<string>;
  /**
   * Scannable claims. Deliberately generic: these describe what the discipline
   * covers, not a catalogue of individual features from one project. Naming
   * specific tools here made the list read as a changelog and left out
   * everything else built along the way.
   *
   * `<strong>` marks the term a reader should catch when skimming.
   */
  points: Localized<string[]>;
}

/**
 * Ordered by how central each area is to the profile, not alphabetically.
 * Gameplay and tooling lead because that is what the day job is.
 */
const entries: SkillEntry[] = [
  {
    icon: gameplayIcon,
    tags: ['Unity', 'C#', 'HFSM', 'Utility AI', 'ScriptableObjects'],
    title: { en: 'Gameplay Programming', es: 'Programación de Gameplay' },
    description: {
      en: 'Systems the player feels directly.',
      es: 'Los sistemas que el jugador nota.',
    },
    points: {
      en: [
        '<strong>Combat, movement and physics</strong> built to feel responsive',
        '<strong>Enemy AI</strong> with hierarchical state machines and utility scoring',
        '<strong>Data-driven design</strong>, so behaviour is authored, not hardcoded',
      ],
      es: [
        '<strong>Combate, movimiento y físicas</strong> pensados para responder bien',
        '<strong>IA de enemigos</strong> con máquinas jerárquicas y decisión por utilidad',
        '<strong>Diseño dirigido por datos</strong>, el comportamiento se define, no se programa',
      ],
    },
  },
  {
    icon: toolsIcon,
    tags: ['Unity Editor', 'Figma API', 'Next.js', 'React', 'TypeScript'],
    title: { en: 'Engine & Tools', es: 'Motores y Herramientas' },
    description: {
      en: 'Tooling that removes manual work for a whole team.',
      es: 'Herramientas que quitan trabajo manual a todo un equipo.',
    },
    points: {
      en: [
        '<strong>Custom editor tools</strong> for content, items, drop tables and balancing',
        '<strong>Asset and interface pipelines</strong> that cut repetitive setup',
        '<strong>Internal web tooling</strong> so designers work without touching code',
      ],
      es: [
        '<strong>Herramientas de editor propias</strong> para contenido, objetos, tablas de botín y balanceo',
        '<strong>Pipelines de assets e interfaz</strong> que eliminan configuración repetitiva',
        '<strong>Herramientas web internas</strong> para que diseño trabaje sin tocar código',
      ],
    },
  },
  {
    icon: aiIcon,
    tags: ['Claude Code', 'Codex', 'OpenCode', 'OpenSpec', 'MCP'],
    title: { en: 'AI & Automation', es: 'IA y Automatización' },
    description: {
      en: 'Building the workflow, not just using it.',
      es: 'Construir el flujo, no solo usarlo.',
    },
    points: {
      en: [
        '<strong>Custom agents and skills</strong> wired into the daily workflow',
        '<strong>Automated code review</strong> and architecture checks on every change',
        '<strong>Spec-driven development</strong> keeping intent and code in sync',
      ],
      es: [
        '<strong>Agentes y skills propios</strong> integrados en el trabajo diario',
        '<strong>Revisión de código automática</strong> y control de arquitectura en cada cambio',
        '<strong>Desarrollo dirigido por especificaciones</strong> que alinea intención y código',
      ],
    },
  },
  {
    icon: gameFeelIcon,
    tags: ['Animation', 'VFX', 'Audio', 'Juice'],
    title: { en: 'Game Feel & Feedback', es: 'Game Feel y Feedback' },
    description: {
      en: 'Making an action feel like it landed.',
      es: 'Que una acción se sienta al conectar.',
    },
    points: {
      en: [
        '<strong>Animation, effects and audio</strong> tied to what the systems did',
        '<strong>Readable feedback</strong>, so the player understands every outcome',
        '<strong>Tuning and balancing</strong> driven by playtesting, not guesswork',
      ],
      es: [
        '<strong>Animación, efectos y audio</strong> ligados a lo que hacen los sistemas',
        '<strong>Feedback legible</strong>, para que el jugador entienda cada resultado',
        '<strong>Ajuste y balanceo</strong> guiados por pruebas de juego, no por intuición',
      ],
    },
  },
  {
    icon: networkingIcon,
    tags: ['C++', 'UDP / TCP', 'ECS', 'SOLID'],
    title: { en: 'Networking & Architecture', es: 'Redes y Arquitectura' },
    description: {
      en: 'Multiplayer from the sockets up.',
      es: 'Multijugador desde los sockets.',
    },
    points: {
      en: [
        '<strong>Authoritative servers</strong> in C++ over UDP and TCP',
        '<strong>Clean architecture</strong> with SOLID principles and clear boundaries',
        '<strong>Maintainable code</strong>, measured rather than assumed',
      ],
      es: [
        '<strong>Servidores autoritativos</strong> en C++ sobre UDP y TCP',
        '<strong>Arquitectura limpia</strong> con principios SOLID y límites claros',
        '<strong>Código mantenible</strong>, medido en lugar de supuesto',
      ],
    },
  },
  {
    icon: graphicsIcon,
    tags: ['URP', 'Shader Graph', 'HLSL', 'OpenGL'],
    title: { en: 'Graphics & Shaders', es: 'Gráficos y Shaders' },
    description: {
      en: 'Both sides of the pipeline.',
      es: 'Los dos lados del pipeline.',
    },
    points: {
      en: [
        '<strong>Shaders and visual effects</strong>, from surfaces to full-screen passes',
        '<strong>Render pipeline work</strong> in Unity URP',
        '<strong>Low-level graphics</strong>, including an engine written from scratch',
      ],
      es: [
        '<strong>Shaders y efectos visuales</strong>, de superficies a pantalla completa',
        '<strong>Trabajo sobre el pipeline de render</strong> en URP de Unity',
        '<strong>Gráficos de bajo nivel</strong>, incluido un motor escrito desde cero',
      ],
    },
  },
];

export interface Skill {
  icon: string;
  title: string;
  description: string;
  points: string[];
  tags: string[];
}

export function getSkills(locale: Locale): Skill[] {
  return entries.map((entry) => ({
    icon: entry.icon,
    tags: entry.tags,
    title: pick(entry.title, locale),
    description: pick(entry.description, locale),
    points: pick(entry.points, locale),
  }));
}
