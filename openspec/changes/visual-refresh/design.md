# Diseño — Lavado de cara

## 1. Posicionamiento

### Situación

La home dice hoy:

```
NAHUEL APARICIO
Gameplay Programmer & Game Developer
Coding the bridge between design and player experience.
```

La realidad del perfil es más específica y más rara de encontrar: Game Programmer
en producción móvil, trabajando en sistemas de gameplay, herramientas internas de
editor, IA y automatización del pipeline.

### Opciones para el titular

| # | Titular | Lectura |
|---|---|---|
| 1 | Game Programmer · Gameplay, Tools & AI | Directo, cabe en una línea |
| 2 | Gameplay & Tools Programmer | Preciso pero deja fuera la IA |
| 3 | Game Programmer + especialidades rotando | Cuenta más sin ocupar más |

Se propone la **3**: rol fijo, y debajo `Gameplay · Tools · AI Automation`
rotando con animación. Cuenta la historia completa en el mismo espacio y la
animación tiene una razón de ser, en vez de ser decorativa.

Queda pendiente de decisión de Nahuel.

### Redacción bajo NDA

El principio: describir **qué se hace**, no **qué es el producto**.

```
Game Programmer en un título móvil sin anunciar. Sistemas de gameplay,
herramientas internas de editor y automatización del pipeline de desarrollo
asistida por IA.
```

Cero información del producto, describe el valor aportado. Es la fórmula estándar
en la industria. Aun así, **la redacción final la aprueba Nahuel** antes de que
se publique.

## 2. Skills

### Problema

`skills.ts` son las seis entradas de ejemplo de la plantilla, sin tocar:
System Design, Full-Stack (React/Next.js), APIs & Distributed Systems,
Databases (Postgres/Redis), Testing (Jest/Playwright), Cloud & DevOps (AWS/Terraform).

Ninguna corresponde al perfil.

### Categorías propuestas

```
Gameplay Programming     sistemas de combate, movimiento, cámara, estados
Engine & Tools           herramientas de editor, automatización de flujos
AI & Automation          agentes de código, tooling asistido por IA, pipeline
Architecture & Quality   SOLID, patrones, código mantenible, revisión
Performance              profiling, optimización, presupuestos en móvil
Platforms & Delivery     móvil, multiplataforma, control de versiones, CI
```

La categoría **AI & Automation** merece existir por separado, no diluida dentro
de "herramientas". Muy pocos perfiles junior de programación de videojuegos
tienen experiencia real con agentes de código en producción; enterrarlo entre
tecnologías genéricas desperdicia lo que más diferencia el perfil.

Contenido de esa categoría: Claude Code, Codex, OpenSpec, diseño de agentes,
revisores automáticos de código, creación de skills, automatización del pipeline.

Los iconos actuales son SVG inline dentro del propio archivo de datos. Se mueven
a `src/assets/icons/`, en coherencia con el resto de iconos del proyecto.

## 3. Experiencia

Estado actual: `data/work.ts` tiene 2 entradas, `data/es/es_work.ts` tiene 1.
Ya desincronizados — lo arregla `foundations-and-i18n` al unificar los datos.

Estructura objetivo:

```
Titutitech · Barcelona (remoto) · 10 meses
├── Game Programmer          may 2026 – actualidad   jornada completa
│   Unity, C#, móvil, gameplay, tools, IA/automatización
└── Game Developer           nov 2025 – may 2026     prácticas
    Unity, C#

Fundación Obicex
└── Unity Developer Intern   4 meses
```

Dos puestos bajo la misma empresa. Esto exige que el componente `Timeline`
soporte entradas anidadas, o bien que se traten como dos entradas hermanas con la
empresa repetida. Se decide al implementar, según cómo quede visualmente — la
opción anidada comunica mejor la progresión (prácticas → contratado), que es
precisamente lo que interesa transmitir.

## 4. Sistema de movimiento

### Principios

1. Toda animación tiene una razón: dirigir la atención, dar continuidad
   o confirmar una acción. Nada decorativo porque sí.
2. Solo se anima `transform` y `opacity` — el resto provoca layout o paint.
3. `prefers-reduced-motion: reduce` desactiva todo movimiento no esencial.
4. El contenido es visible sin JavaScript: el reveal parte de visible y el
   observador aplica la entrada, nunca al revés.

Ese cuarto punto importa: el patrón habitual (`opacity: 0` en CSS y quitarlo con
JS) deja la página **en blanco** si el script falla o llega tarde. En un sitio
estático que se indexa, eso no es aceptable.

### Piezas

| Pieza | Uso |
|---|---|
| Reveal on scroll | Entradas de sección, con stagger entre hijos |
| `<ClientRouter />` | Transiciones entre páginas |
| Card hover | Elevación + glow azul, ya hay base en `utilities.css` |
| Titular del hero | Entrada + rotación de especialidades |
| Estados de botón | Feedback de pulsación, foco visible |

`utilities.css` ya tiene `.card-surface` con transiciones y sombras. Se amplía
en lugar de reemplazarlo.

### Alternativas consideradas

| Opción | Decisión |
|---|---|
| CSS + `IntersectionObserver` | **Elegida**: ~1 KB, sin dependencias |
| GSAP | Descartada: ~50 KB para efectos que no se necesitan |
| Framer Motion | Descartada: exige React; el proyecto es Astro puro |
| View Transitions API nativa | Se usa vía `<ClientRouter />` de Astro |

Un portfolio que presume de rendimiento no debería cargar 50 KB de librería de
animación para hacer fades.

## 5. Hero y vídeo

### El hallazgo

```html
<video autoplay muted loop playsinline>   <!-- 11 MB -->
<div class="absolute inset-0 bg-black/86"></div>   <!-- tapa el 86% -->
```

Se descargan 11 MB para mostrar un 14% de luminosidad. Los artefactos de
compresión viven en zonas de detalle y contraste, y aquí no hay ni lo uno ni lo
otro. Se puede comprimir de forma muy agresiva sin diferencia perceptible.

### Objetivo

```
Actual     11 MB
Objetivo   ~800 KB   (−93%)

├── Recorte del loop a 8-12 s
├── 1280×720 (suficiente bajo el overlay y con object-cover)
├── CRF alto, preset slow
├── WebM/AV1 además de MP4 → cada navegador coge la más ligera
└── poster WebP (~30 KB) → nada de pantalla negra
```

Requisito de Nahuel: **el vídeo se mantiene también en móvil**. Con ~800 KB es
perfectamente asumible.

Dos limitaciones que no dependen de nosotros:

- **iOS Safari en modo bajo consumo ignora el `autoplay`** aunque esté `muted` +
  `playsinline`. Es decisión del sistema. Por eso el `poster` es obligatorio: si
  el vídeo no arranca, se ve un fotograma en lugar de un hueco.
- Con `prefers-reduced-motion` se muestra el poster estático.

`ffmpeg` no está disponible en el entorno actual; hay que instalarlo o usar una
herramienta equivalente para la compresión.

## 6. Móvil

El requisito es que sea juicy en móvil, no solo que no se rompa.

- Objetivos táctiles de 44×44 px mínimo.
- Menú móvil a pantalla completa con animación, en vez del desplegable actual.
- Comprobar que nada desborda horizontalmente: hoy el hero usa
  `w-screen left-1/2 -ml-[50vw]`, un truco frágil que depende de
  `overflow-x-hidden` en el `body`.
- Verificar en dispositivo real, no solo en el emulador del navegador.
