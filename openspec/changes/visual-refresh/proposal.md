# Lavado de cara: contenido real y capa de movimiento

## Por qué

Con las fundaciones resueltas (`foundations-and-i18n`), quedan los dos problemas
que un visitante sí percibe.

**El contenido no corresponde a Nahuel.** `src/data/skills.ts` sigue siendo el
archivo de ejemplo de la plantilla. La página de Skills anuncia hoy
*"Full-Stack Development — React/Next.js, Node.js"*, *"Databases & Caching —
Postgres, Redis"* y *"Cloud & DevOps — AWS, Docker, Terraform"*. No menciona
Unity, C#, gameplay ni herramientas. Un reclutador que abra esa página ve un
perfil web genérico en lugar de un game programmer.

Además la experiencia está desactualizada: Titutitech figura como
*"Game Developer — Currently working."*, cuando en realidad son dos etapas
(prácticas de nov 2025 a may 2026, y contratado como Game Programmer desde may
2026). Y el trabajo actual —mobile, gameplay, herramientas, IA y automatización—
no aparece por ningún sitio, pese a ser lo que más diferencia el perfil.

**No hay sistema de movimiento.** En todo el proyecto hay 11 apariciones de
`transition`, `animate` o `@keyframes`, casi todas `hover:scale-105` en botones.
Cero reveal al hacer scroll, cero stagger, cero transiciones entre páginas. El
sitio es estático.

Y el hero descarga un vídeo de **11 MB** que además queda tapado por un overlay
negro al 86% — se paga todo el ancho de banda para mostrar un 14% de luminosidad.

## Qué cambia

### Contenido

- Reescribir `skills.ts` con el stack real: Unity, C#, sistemas de gameplay,
  herramientas de editor, optimización, arquitectura.
- Añadir **AI-Assisted Development** como categoría propia: Claude Code, Codex,
  OpenSpec, agentes de código, revisores automáticos, creación de skills,
  automatización de pipeline. Es el elemento más diferenciador del perfil y hoy
  no aparece.
- Titutitech como **dos puestos** en la línea temporal, con las fechas reales.
- Reposicionar el titular de la home: el rol actual es Game Programmer con foco
  en gameplay, herramientas e IA, no solo "Gameplay Programmer & Game Developer".
- Redactar el puesto actual **respetando el NDA**: se describe la naturaleza del
  trabajo (mobile, sistemas de gameplay, tooling interno, automatización) sin
  identificar el producto.

### Movimiento

- Sistema de reveal al hacer scroll con `IntersectionObserver`, con stagger,
  aplicado de forma consistente en todas las secciones.
- Transiciones entre páginas con `<ClientRouter />` de Astro.
- Micro-interacciones: cards con elevación y glow azul, botones con respuesta
  táctil, gradientes animados, animación del titular del hero.
- Todo respeta `prefers-reduced-motion`.

### Hero

- Se conserva el vídeo de fondo y **sigue activo en móvil**, comprimido de 11 MB a
  ~800 KB, con `poster` y variante WebM.

## Qué NO cambia

- La estructura de rutas, i18n y tokens que fija `foundations-and-i18n`.
- La paleta azul ya definida allí; aquí se usa, no se redefine.
- El hosting y el pipeline de deploy.
- No se añade analítica.

## Riesgos

- **NDA**: la redacción del puesto actual debe revisarla Nahuel antes de
  publicarse. Ninguna descripción se da por buena sin su visto bueno.
- **Rendimiento**: las animaciones pueden provocar jank en móviles modestos. Se
  limita a propiedades compuestas (`transform`, `opacity`) y se mide antes de
  cerrar.
- **Exceso de movimiento**: "juicy" puede degenerar en molesto. Cada animación
  debe tener una razón; se revisa el conjunto en una pasada final.
- **Calidad del vídeo**: comprimir de 11 MB a 800 KB es agresivo. Es viable
  porque el overlay al 86% oculta los artefactos, pero hay que verificarlo en
  pantalla real antes de dar por buena la compresión.

## Dependencias

Requiere `foundations-and-i18n` completado. Los textos nuevos van a los
diccionarios de i18n, y los estilos usan los tokens azules ya unificados.
