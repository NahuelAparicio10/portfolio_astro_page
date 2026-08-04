# Tareas — Lavado de cara

> Requiere `foundations-and-i18n` completado.

## 0. Decisiones

- [x] Titular de la home: rol fijo + especialidades rotando (opción 3)
- [x] Tipografía: **Gabarito** (titulares) + Inter (cuerpo), en WOFF2.
      Space Grotesk se descartó tras verla aplicada: resultaba demasiado
      rígida en los titulares en mayúsculas. Se compararon siete candidatas
      con los titulares reales antes de decidir
- [x] Categorías de skills: se añaden *Game Feel & Feedback* y
      *Networking & Architecture*; se descartan *Performance* y
      *Platforms & Delivery*
- [x] Material de las prácticas aportado (informe de 300 h, dep. Gameplay & Tools)
- [x] Correcciones al borrador del puesto actual aplicadas
- [x] Herramienta web descrita: aplicación de autoría en Next.js/React/TypeScript
      con entidades y arquetipos, agentes de IA, RBAC y auditoría
- [x] Fechas de prácticas: sin día exacto, rango de meses + mención de la
      ampliación extracurricular
- [x] Plataformas: se mencionan PC, Nintendo Switch y Steam
- [x] *utility AI*, *HFSM*, combate, movimiento y físicas pertenecen al TFG,
      no al empleo actual
- [x] Puesto actual reescrito contra el código real: MVP de la escena de juego,
      secuencias de ronda, importador de Figma y editor de entidades
- [x] Categorías de skills aprobadas por Nahuel
- [x] *Between Shadows* (TFG) se añadirá como proyecto más adelante, cuando
      Nahuel tenga vídeo y material gráfico preparados
- [x] **Nahuel**: aprobar la redacción final de ambos puestos bajo NDA

## 1. Contenido — Skills

- [x] Reescribir `data/skills.ts` con las seis categorías reales, con
      `Localized<T>` y `getSkills(locale)` como el resto de datos
- [x] Redactar la categoría **AI & Automation**
- [x] Redactar la categoría **Game Feel & Feedback**
- [x] Redactar la categoría **Graphics & Shaders**
- [x] Redactar la categoría **Networking & Architecture**
- [x] Incluir en **Engine & Tools** el importador de Figma, el editor de
      entidades y la app web de autoría (Next.js/React/TS)
- [x] Incluir *HFSM* y *utility AI* en **Gameplay Programming**
- [x] Verificar que cada categoría tiene respaldo en un proyecto o puesto real
- [x] Mover los SVG inline a `src/assets/icons/skills/` (seis iconos nuevos)
- [x] Traducir todas las categorías al español
- [x] Verificar que no queda ninguna mención heredada de la plantilla. Las
      apariciones de React, Next.js y TypeScript que quedan son ahora legítimas:
      son los tags de la app web de autoría
- [x] **Extra**: `SkillsSection` recibía `skills` como prop pero no lo
      renderizaba. Las categorías no se mostraban en ninguna página. Añadida la
      rejilla de tarjetas que las presenta

## 2. Contenido — Experiencia

- [x] Añadir campo `period` a la interfaz `Item` del `Timeline` y a `WorkExperience`
- [x] Renderizar el periodo con icono de calendario, en las dos variantes del
      `Timeline` (centrada y alineada a la izquierda)
- [x] Sacar las duraciones del texto de descripción a `period`
- [x] Añadir Titutitech · Game Programmer (may 2026 – actualidad, jornada completa)
- [x] Añadir Titutitech · Game Developer · Prácticas (nov 2025 – may 2026), con
      la mención a la ampliación extracurricular dentro de la descripción
- [x] Descripciones bajo NDA incorporadas, ya aprobadas por Nahuel
- [x] Representación visual: **entradas hermanas** con la empresa repetida. Se
      descarta anidar porque el `Timeline` alterna lados y una entrada anidada
      rompería esa alternancia; repetir "Titutitech" en dos tarjetas
      consecutivas ya comunica la progresión
- [x] Verificado: ambos idiomas muestran los tres puestos
- [x] Verificado: las etiquetas de tecnología ya son azules de forma coherente
- [x] **Extra**: el título del puesto se renderizaba en `text-xs`, más pequeño
      que la empresa que lo acompaña. Subido a `text-lg` con color de primer
      plano, que es la jerarquía que corresponde
- [x] **Extra**: verificado que no aparece ningún término cubierto por el NDA
      (género, temática, estudio) en ninguno de los dos idiomas

## 2b. Tipografía

- [x] Gabarito e Inter obtenidas vía `@fontsource-variable` (SIL OFL)
- [x] Subsetting con `fontTools` y conversión a WOFF2. **Corregido respecto al
      plan**: no hace falta latín extendido. Todos los caracteres del español y
      el catalán (á é í ó ú ñ ü ¿ ¡ à è ò ç ï ·) caen dentro de Latin-1, que
      cubre el subset `latin`. Incluirlo habría añadido 104 KB inútiles
- [x] Eje de peso instanciado a 400–800, comprobado contra las clases que el
      sitio usa de verdad (`font-medium` a `font-extrabold`)
- [x] Sustituidas las declaraciones `@font-face` de Atkinson en `global.css`
- [x] Gabarito a titulares e Inter al cuerpo, vía `--font-display` y
      `--font-body`; añadido `letter-spacing` negativo en titulares
- [x] Actualizadas las etiquetas `<link rel="preload">` de `BaseHead.astro`
- [x] Borradas las fuentes Atkinson
- [x] Desinstalados los paquetes `@fontsource-variable`: los `.woff2` subseteados
      ya viven en el repo, así que la dependencia no aportaba nada
- [x] Peso medido: **58 124 B frente a 46 572 B**, +11 552 B (+25 %). El objetivo
      de "no superar el actual" **no se cumple**, y se deja constancia en vez de
      disimularlo. Gabarito pesa 29,6 KB frente a los 19,2 KB de Space Grotesk
      porque sus trazos son más complejos — que es exactamente lo que le da el
      carácter que se buscaba. Acotar el eje a 600–800 solo ahorraba 224 B, así
      que el peso está en las curvas, no en el rango. Como referencia, el exceso
      equivale a un 6 % de una sola de las cinco imágenes eliminadas en el change
      anterior: el balance neto del proyecto sigue muy a la baja
- [x] Verificado que acentos, eñe y mayúsculas acentuadas renderizan en español

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
