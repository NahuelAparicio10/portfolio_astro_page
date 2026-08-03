# Tareas — Lavado de cara

> Requiere `foundations-and-i18n` completado.

## 0. Decisiones

- [x] Titular de la home: rol fijo + especialidades rotando (opción 3)
- [x] Tipografía: Space Grotesk (titulares) + Inter (cuerpo), en WOFF2
- [x] Categorías de skills: se añade *Game Feel & Feedback*, se descarta
      *Performance* como bloque independiente
- [ ] **Nahuel**: aprobar la redacción del puesto actual bajo NDA
- [ ] **Nahuel**: aportar en qué consistieron los 7 meses de prácticas en
      Titutitech (no hay historial que lo respalde)
- [ ] **Nahuel**: revisar la lista final de skills antes de publicarla

## 1. Contenido — Skills

- [ ] Reescribir `data/skills.ts` con las seis categorías reales
- [ ] Redactar la categoría **AI & Automation** (Claude Code, Codex, OpenSpec,
      agentes, revisores de código, servidores MCP, creación de skills)
- [ ] Redactar la categoría **Game Feel & Feedback**
- [ ] Mover los SVG inline a `src/assets/icons/`
- [ ] Traducir todas las categorías al español
- [ ] Verificar que no queda ninguna mención heredada de la plantilla

## 2. Contenido — Experiencia

- [ ] Añadir campo `period` a la interfaz `Item` del `Timeline`
- [ ] Renderizar el periodo como metadato junto a empresa y ubicación
- [ ] Sacar las duraciones del texto de descripción a `period`
      (hoy "4-month internship..." vive dentro del párrafo)
- [ ] Añadir Titutitech · Game Programmer (may 2026 – actualidad, jornada completa)
- [ ] Actualizar Titutitech · Game Developer a 7 meses (nov 2025 – may 2026, prácticas)
- [ ] Redactar la descripción bajo NDA y someterla a aprobación
- [ ] Decidir la representación visual: puestos anidados bajo la empresa o
      entradas hermanas
- [ ] Verificar que ambos idiomas muestran los mismos puestos
- [ ] Verificar que las etiquetas de tecnología ya no mezclan azul y cian
      (bug de `--accent-rgb`, se arregla en `foundations-and-i18n`)

## 2b. Tipografía

- [ ] Descargar Space Grotesk e Inter (variables, SIL OFL)
- [ ] Subsetting a latín + latín extendido y conversión a WOFF2
- [ ] Sustituir las declaraciones `@font-face` de Atkinson en `global.css`
- [ ] Asignar Space Grotesk a titulares e Inter al cuerpo
- [ ] Actualizar las etiquetas `<link rel="preload">` de `BaseHead.astro`
- [ ] Borrar `public/fonts/atkinson-*.woff`
- [ ] Medir: el peso total de fuentes no debe superar al actual
- [ ] Revisar que los acentos y la eñe se renderizan bien en español

## 3. Contenido — Posicionamiento

- [ ] Nuevo titular en la home, en ambos idiomas
- [ ] Actualizar el subtítulo y la descripción
- [ ] Actualizar `SITE_DESCRIPTION` en `consts.ts`
- [ ] Revisar la página `about` para que sea coherente
- [ ] Revisar los metadatos Open Graph y Twitter

## 4. Base del sistema de movimiento

- [ ] Crear `src/lib/motion.ts` con el observador de reveal
- [ ] Definir tokens de movimiento en CSS (duraciones, easings, distancias)
- [ ] Implementar el reveal partiendo de contenido **visible** (no al revés)
- [ ] Implementar el stagger entre hijos
- [ ] Bloque global `prefers-reduced-motion`
- [ ] Verificar que con JavaScript deshabilitado todo el contenido se ve

## 5. Aplicar el movimiento

- [ ] Añadir `<ClientRouter />` para transiciones entre páginas
- [ ] Reveal en las secciones de la home
- [ ] Reveal + stagger en la rejilla de proyectos
- [ ] Reveal en la línea temporal de experiencia y estudios
- [ ] Reveal en las tarjetas de skills
- [ ] Animación de entrada del titular del hero
- [ ] Rotación de especialidades (`Gameplay · Tools · AI Automation`)
- [ ] La primera especialidad se renderiza en HTML, no por JavaScript
- [ ] Reservar anchura para evitar desplazamiento del contenido al rotar
- [ ] Con `prefers-reduced-motion`: mostrar las tres, sin rotación
- [ ] Revisar el conjunto: eliminar lo que resulte excesivo

## 6. Micro-interacciones

- [ ] Ampliar `.card-surface` con glow azul en hover
- [ ] Estados de pulsación en botones
- [ ] Indicadores de foco visibles en todo lo interactivo
- [ ] Subrayado animado en los enlaces del nav
- [ ] Feedback táctil en dispositivos móviles

## 7. Hero y vídeo

- [ ] Instalar `ffmpeg` (no está disponible en el entorno)
- [ ] Recortar el loop a 8-12 s
- [ ] Comprimir a 1280×720, CRF alto, preset slow → objetivo < 1 MB
- [ ] Generar variante WebM/AV1
- [ ] Generar `poster` en WebP
- [ ] Actualizar el elemento `<video>`: `poster`, `<source>` múltiples, `preload`
- [ ] Confirmar que sigue reproduciéndose en móvil
- [ ] Fallback a póster con `prefers-reduced-motion`
- [ ] Comparar comprimido vs original bajo el overlay al 86%
- [ ] Rediseñar la composición del hero con la paleta azul

## 8. Móvil

- [ ] Auditar los objetivos táctiles (mínimo 44×44 px)
- [ ] Menú móvil a pantalla completa con animación
- [ ] Sustituir el truco `w-screen left-1/2 -ml-[50vw]` por algo robusto
- [ ] Verificar que no hay desbordamiento horizontal a 320 px
- [ ] Comprobar la fluidez del scroll en un móvil real
- [ ] Revisar tamaños de tipografía en pantallas pequeñas

## 9. Verificación

- [ ] Lighthouse en móvil y escritorio (rendimiento y accesibilidad)
- [ ] Medir el JavaScript añadido por el sistema de movimiento (< 5 KB gzip)
- [ ] Probar con `prefers-reduced-motion` activado
- [ ] Probar con JavaScript deshabilitado
- [ ] Navegación completa por teclado
- [ ] Revisar en Safari iOS (autoplay en modo bajo consumo)
- [ ] Revisar en Chrome Android
- [ ] Recorrer las 12 rutas en ambos idiomas
- [ ] Revisión final de contenido con Nahuel antes de desplegar
