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

**Decidida la 3**: rol fijo, y debajo `Gameplay · Tools · AI Automation` rotando
con animación. Cuenta la historia completa en el mismo espacio y la animación
tiene una razón de ser, en vez de ser decorativa.

Requisitos de la rotación, para que no degrade la página:

- El rol (`Game Programmer`) es estático. Solo rota la especialidad.
- La primera especialidad se renderiza en el HTML: sin JavaScript se ve una,
  no un hueco.
- Se reserva la anchura de la palabra más larga, para que el titular no
  desplace el contenido al cambiar.
- Con `prefers-reduced-motion` no rota: muestra las tres separadas por puntos.
- Cada término existe en ambos idiomas.

### Redacción bajo NDA

El principio: describir **qué se hace**, no **qué es el producto**.

#### Perfil de contribución real

Se revisó el repositorio del proyecto actual para fundamentar la descripción.
Datos objetivos: 470 commits, segundo contribuidor de doce, con dos ramas de
funcionalidad propias (`feature/tools` con 24 integraciones y `feature/agents-mcps`
con 14).

Las áreas de trabajo que se desprenden del historial:

| Área | Evidencia |
|---|---|
| Gameplay y *feedback* | Widgets de combate, secuencias, animaciones de entrada y wobble, *shader* de realce, sistema de audio y su normalización, polish de interacción |
| Herramientas de editor | Importador de interfaz, visor de entidades, lanzador de vistas, gestor de builds, ventana de resolución de imágenes, postprocesador de sprites, capa compartida de editor con paleta y estilos propios |
| IA y automatización | Servidor MCP propio en Node, skills a medida de revisión de código y commits, integración de un flujo dirigido por especificaciones con comandos propios |
| Gobernanza de arquitectura | Herramienta en C# que construye el grafo de dependencias, calcula acoplamiento, detecta dependencias prohibidas entre capas y actúa como *gate* de integración |

#### Límite de confidencialidad

El repositorio consultado **es** el proyecto sujeto a NDA. Queda explícitamente
fuera de cualquier texto publicable: el nombre del juego, su género, su temática,
el nombre del estudio, la composición del equipo y cualquier nombre de sistema
que revele la naturaleza del producto.

Lo que sí es publicable es el perfil de contribución del propio Nahuel, descrito
en términos de disciplina técnica.

#### Borradores

Siguen el formato de la tarjeta de prácticas ya existente (duración, naturaleza
del producto en genérico, responsabilidades concretas).

> **Game Programmer** · may 2026 – actualidad
>
> Desarrollo de un título móvil sin anunciar en Unity. Implementación de sistemas
> de gameplay —combate, movimiento, físicas y máquinas de estado— y de la capa de
> *feedback*: animaciones, *shaders* y el sistema de audio de *gameplay*.
> Desarrollo de herramientas internas de editor, entre ellas un inspector de
> entidades y una herramienta web interna de equipo. Diseño e implementación de
> los flujos de desarrollo asistidos por IA del proyecto: agentes y *skills*
> propios, servidor MCP y un revisor de código automático, junto a un *gate* de
> arquitectura que mide acoplamiento y bloquea dependencias prohibidas entre capas.

Correcciones aplicadas sobre el primer borrador, indicadas por Nahuel:

- **No** hubo automatización de builds. Retirado.
- Los agentes, las *skills*, el revisor de código por IA, el inspector de
  entidades y la herramienta web interna son de **su autoría**, no integraciones.
- El sistema de audio es **solo de gameplay**, no del juego completo.
- "*shaders* de realce" → "*shaders*".
- Gameplay se concreta en combate, movimiento, físicas y estados, evitando
  términos que no corresponden a su trabajo real.

**Pendiente de confirmar**: la naturaleza de la "herramienta web interna" se
dedujo del directorio `web/` del repositorio; falta la descripción de Nahuel.

> **Game Developer** (prácticas) · nov 2025 – may 2026
>
> Prácticas de 7 meses en el departamento de *Gameplay & Tools* sobre un título
> comercial para PC y Nintendo Switch. Refactorización del sistema de localización
> y tipografías sobre *Addressables*, con soporte de fuentes CJK y herramientas de
> editor propias para su gestión. Desarrollo y adaptación de *shaders* y efectos
> visuales en URP, incluidos efectos de pantalla completa con *Shader Graph* y un
> gestor genérico para administrarlos. Implementación desde cero de un sistema de
> clasificaciones integrado con la API de Steam, con paginación, posición del
> jugador y estados de carga. Desarrollo de nuevas mecánicas —físicas de rebote y
> un sistema de puntuación por zonas con sacudida de cámara en función de masa e
> impacto—, un nivel completo, y herramientas internas para agilizar la
> incorporación de contenido jugable.

Fuente: informe de prácticas aportado por Nahuel (300 h, dep. Gameplay & Tools).

Material disponible que **no** entró en la tarjeta, por extensión. Recuperable si
se decide alargarla:

- Menú de configuración dinámico por plataforma mediante directivas de compilación
- Capa de calidad gráfica con postprocesado (Bloom, Motion Blur) en URP
- Sesiones de QA y *playtesting* con documentación de hallazgos
- Migración de componentes de navegación obsoletos de Unity

**Discrepancia de fechas**: el informe de prácticas indica 03/11/2025 – 17/03/2026,
mientras que el puesto figura como nov 2025 – may 2026. Se asume que el prácticum
universitario fue un subconjunto del contrato y se usan las fechas del puesto.
Pendiente de confirmación.

#### Aprobación

**Ambos borradores requieren la aprobación explícita de Nahuel** antes de
publicarse. Él conoce los términos concretos del acuerdo firmado.

Punto concreto a decidir: el informe indica que el proyecto principal del estudio
está sujeto a NDA. Mencionar *PC*, *Nintendo Switch* y *Steam* acota el producto,
aunque como credencial tiene valor. Nahuel decide si se mantienen o se sustituyen
por "un título comercial".

## 2. Skills

### Problema

`skills.ts` son las seis entradas de ejemplo de la plantilla, sin tocar:
System Design, Full-Stack (React/Next.js), APIs & Distributed Systems,
Databases (Postgres/Redis), Testing (Jest/Playwright), Cloud & DevOps (AWS/Terraform).

Ninguna corresponde al perfil.

### Categorías propuestas

```
Gameplay Programming       combate, movimiento, físicas, máquinas de estado, cámara
Game Feel & Feedback       animación, VFX, audio, polish de interacción
Graphics & Shaders         URP, Shader Graph, HLSL, OpenGL, iluminación
Engine & Tools             herramientas de editor, importadores, motores propios
AI & Automation            agentes, skills, MCP, revisión automática de código
Networking & Architecture  UDP/TCP, servidor autoritativo, ECS, SOLID, acoplamiento
```

Cada categoría se contrasta contra trabajo verificable, propio o profesional:

| Categoría | Respaldo |
|---|---|
| Gameplay Programming | Sistema de combate Souls-like, y los siete juegos del blog |
| Game Feel & Feedback | Capa de *feedback* del proyecto actual; polish en los juegos propios |
| Graphics & Shaders | *Shaders* URP y Shader Graph en prácticas; mini-motor OpenGL; olas de Gerstner |
| Engine & Tools | Herramientas de editor en ambos puestos; mini-motor propio |
| AI & Automation | Agentes, *skills*, MCP y revisor de código del proyecto actual |
| Networking & Architecture | Shooter UDP con servidor autoritativo, Parchís TCP, ECS |

Se añade **Game Feel & Feedback** como categoría propia: el historial muestra que
una parte sustancial del trabajo es esa capa, y es lo que distingue a un gameplay
programmer de alguien que solo conecta sistemas.

Se añade **Networking & Architecture** tras revisar los proyectos personales: hay
tres trabajos en C++ con redes, ECS y motor propio (shooter UDP con servidor
autoritativo y *matchmaking*, Parchís TCP con *lobby*, mini-motor OpenGL) que
ninguna categoría anterior recogía. Es base técnica que los estudios valoran y
estaba invisible en el sitio.

Se descartan dos categorías del borrador inicial:

- *Performance* como bloque independiente: no hay trabajo que respalde
  presentarlo como área de especialidad. La optimización se menciona dentro de
  las categorías donde sí aplica.
- *Platforms & Delivery*: se solapaba con Engine & Tools y aportaba poco frente
  a Networking & Architecture.

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

### El Timeline no soporta fechas

El componente actual define sus items como:

```ts
interface Item {
  title, company, region, description, technologies?
}
```

**No hay campo de periodo.** Hoy la duración vive dentro del texto de la
descripción (*"4-month internship..."*), que es la razón de que el puesto actual
diga solo *"Currently working."* — no había dónde poner la fecha.

Se añade un campo `period` al item y se renderiza como metadato, junto a empresa
y ubicación. Con eso las tres tarjetas quedan homogéneas y la progresión de
fechas se lee de un vistazo.

### Bug de color visible en el Timeline

```astro
style="background: rgba(var(--accent-rgb),0.1);        ← 59,130,246  azul
       color: var(--accent);                           ← #06B6D4     cian
       border: 1px solid rgba(var(--accent-rgb),0.3);" ← 59,130,246  azul
```

Las etiquetas de tecnología se renderizan hoy con fondo y borde azules y texto
cian, porque `--accent-rgb` y `--accent` son colores distintos. Es el síntoma
visible del problema de tokens; se resuelve en `foundations-and-i18n` al derivar
`--accent` de `--accent-rgb`. Se anota aquí para verificarlo al revisar esta
sección.

## 4. Tipografía

Actualmente el sitio usa **Atkinson Hyperlegible** para todo, que es la fuente por
defecto de la plantilla de Astro. Es una tipografía excelente —diseñada para baja
visión— pero es la que lleva cualquier proyecto de Astro sin tocar, y no aporta
identidad.

### Decisión

| Uso | Familia | Motivo |
|---|---|---|
| Titulares | **Space Grotesk** | Geométrica y técnica, con carácter propio, sin caer en el cliché de tipografía "gamer" |
| Cuerpo | **Inter** | Diseñada para pantalla, neutra, aguanta el texto largo del blog sin cansar |

Ambas son variables y con licencia SIL OFL, por lo que se autoalojan sin depender
de un CDN externo.

El reparto es deliberado: la personalidad la aporta el titular, que se lee en un
segundo; el cuerpo debe desaparecer y dejar leer. Usar una tipografía con carácter
para párrafos largos es un error frecuente que penaliza la lectura del blog.

### Formato

Las fuentes actuales están en **WOFF, no WOFF2**. WOFF2 comprime en torno a un 30 %
mejor y lo soporta cualquier navegador desde 2016.

- Servir exclusivamente WOFF2.
- Subsetting a latín + latín extendido (hace falta para el español).
- `font-display: swap` y precarga solo de los cortes realmente usados.

Con subsetting y WOFF2, dos familias variables deberían pesar lo mismo o menos que
los dos archivos WOFF actuales. Se verifica midiendo, no por suposición.

## 5. Sistema de movimiento

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

## 6. Hero y vídeo

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

## 7. Móvil

El requisito es que sea juicy en móvil, no solo que no se rompa.

- Objetivos táctiles de 44×44 px mínimo.
- Menú móvil a pantalla completa con animación, en vez del desplegable actual.
- Comprobar que nada desborda horizontalmente: hoy el hero usa
  `w-screen left-1/2 -ml-[50vw]`, un truco frágil que depende de
  `overflow-x-hidden` en el `body`.
- Verificar en dispositivo real, no solo en el emulador del navegador.
