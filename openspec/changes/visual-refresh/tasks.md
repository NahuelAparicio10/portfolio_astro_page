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

- [x] Nuevo titular en la home, en ambos idiomas: rol fijo + especialidades
- [x] Actualizado el subtítulo: "Building the systems, and the tools that build
      them." / "Construyo los sistemas del juego y las herramientas que los
      hacen posibles."
- [x] `SITE_DESCRIPTION` reescrita: menciona gameplay, tooling y flujos con IA
      en lugar de "A showcase of my games and projects"
- [x] `about` alineado: "Game Programmer · Gameplay, Tools & AI"
- [x] JSON-LD corregido: era `Organization` (Nahuel no es una organización) y
      apuntaba a un `favicon.svg` inexistente. Ahora es `Person` con `jobTitle`,
      logo real y los cuatro perfiles sociales
- [x] **Extra**: los dos `index.astro` seguían duplicados, 100 líneas cada uno.
      Extraído `HomeHero.astro`; las páginas quedan en ~38 líneas y la rotación
      se implementa una sola vez

## 4. Base del sistema de movimiento

- [x] Crear `src/lib/motion.ts` con el observador de reveal
- [x] Tokens de movimiento en CSS: `--motion-fast/base/slow`, `--motion-ease`,
      `--motion-rise`, para que todo el sitio comparta el mismo ritmo
- [x] Reveal partiendo de contenido **visible**. El CSS solo oculta cuando el
      script ha añadido `data-motion-ready`, así que si el JS no llega la página
      se lee entera. El patrón habitual (`opacity:0` en CSS, retirado por JS)
      falla en cerrado y deja la página en blanco
- [x] Stagger entre hijos vía `data-reveal-child`, 80 ms de paso
- [x] Bloque global `prefers-reduced-motion` que neutraliza animaciones y
      transiciones, además del corte temprano dentro de `motion.ts`
- [x] Verificado: `data-motion-ready` solo aparece dentro del script, nunca como
      atributo en el HTML servido

## 5. Aplicar el movimiento

- [x] `<ClientRouter />` añadido; Astro lo desactiva solo con movimiento reducido
- [x] `initReveal()` se vuelve a ejecutar en `astro:page-load`, porque tras una
      navegación de cliente el observador solo conocía los nodos de la página
      anterior
- [x] Reveal + stagger en la rejilla de proyectos
- [x] Reveal en la línea temporal, en sus dos variantes
- [x] Reveal en las tarjetas de skills y en los pills de soft skills
- [x] Reveal + stagger en la rejilla del blog
- [x] Rotación de especialidades en el hero
- [x] Las tres especialidades se renderizan en HTML, la primera con `is-active`
- [x] Anchura reservada con `inline-grid`: todas ocupan la misma celda, así que
      el contenedor mide lo que la palabra más larga y el titular no se desplaza
- [x] Con `prefers-reduced-motion` el rotador pasa a `display:inline` y muestra
      las tres separadas por puntos, y el script ni se ejecuta
- [x] Conjunto revisado: el movimiento se limita a entradas de sección y
      micro-interacciones. Sin paralaje, sin reanimar al volver a pasar

## 6. Micro-interacciones

- [x] `.card-surface` con glow azul, borde de acento y elevación en hover
- [x] Estados de pulsación en botones y enlaces con aspecto de botón
- [x] Foco visible con `:focus-visible`, para que no salga al hacer clic
- [x] Subrayado animado en el nav, dibujado desde el centro
- [x] Feedback táctil: `-webkit-tap-highlight-color: transparent` y respuesta
      por `transform`, que es la única respuesta física que tiene el táctil

## 7. Hero y vídeo

- [x] `ffmpeg` 8.1.2 instalado vía winget
- [x] Analizado el original: 1920×1080, **120 fps**, 7,06 s, 11,9 Mbps y **con
      pista de audio AAC** pese a que el elemento está `muted`. Dos fuentes de
      peso obvias antes siquiera de tocar la calidad
- [x] Recorte innecesario: el original ya duraba 7 s
- [x] Audio eliminado (`-an`) y frame rate bajado de 120 a 30 fps
- [x] Comprimido a 1280×720, H.264 CRF 38, preset slow, `+faststart`
- [x] **WebM descartado tras medirlo.** El diseño asumía que sería más ligero,
      pero para este contenido VP9 es mucho peor: 1 331 KB en CRF 52 frente a
      769 KB de H.264 en CRF 38. Servir dos formatos habría añadido complejidad
      al marcado a cambio de nada
- [x] Póster en WebP (40 KB)
- [x] `<video>` actualizado: `poster`, `preload="metadata"`, `aria-hidden`
- [x] Sigue reproduciéndose en móvil, que era el requisito de Nahuel
- [x] Fallback a póster con `prefers-reduced-motion`, y además se detiene la
      descarga: un `<video>` oculto por CSS sigue almacenando en búfer
- [x] Calidad verificada **bajo el overlay al 86 %**, que es lo que se ve de
      verdad. SSIM medido sobre el resultado oscurecido:

      | CRF | Peso | SSIM |
      |---|---|---|
      | 36 | 1 007 KB | 0,9935 |
      | **38** | **769 KB** | **0,9923** |
      | 40 | 590 KB | 0,9906 |

      Se elige CRF 38: deja margen por si en el futuro se aclara el overlay
- [x] **Resultado: 10 517 KB → 769 KB, un 92,7 % menos**
- [x] Composición del hero rehecha: nombre fluido, rol fijo y especialidad
      rotando en azul sobre el fondo navy

## 8. Móvil

- [x] Objetivos táctiles a 44×44 px mínimo bajo `@media (pointer: coarse)`,
      aplicado a nav, menú móvil, selector de idioma, botones y redes
- [x] Menú móvil a pantalla completa, con desenfoque de fondo y entrada
      escalonada de los enlaces. Se cierra al navegar, que con transiciones de
      vista es obligatorio: si no, el panel se queda abierto sobre la página
      siguiente
- [x] Sustituido `w-screen left-1/2 -ml-[50vw]` por `.full-bleed`. El truco
      anterior dependía de `overflow-x: hidden` en el `body` y desbordaba unos
      15 px en escritorio, porque `100vw` incluye el ancho de la barra de scroll
- [x] **Bug de móvil corregido**: `NAHUEL APARICIO` con `text-5xl` y
      `whitespace-nowrap` medía unos 430 px y quedaba cortado en pantallas de
      320 px. Ahora es `clamp(2rem, 9vw, 4.5rem)`
- [x] `100vh` sustituido por `100svh` en el hero: en móvil `100vh` es más alto
      que el área visible y empujaba los botones bajo la barra de direcciones
- [x] Tipografías fluidas con `clamp()` en nombre, rol y especialidad
- [ ] Comprobar la fluidez del scroll en un móvil real

## 9. Verificación

- [x] Peso final medido:

      | Recurso | Tamaño |
      |---|---|
      | JavaScript total | 5 173 B gzip (solo `ClientRouter`) |
      | CSS total | 14 983 B gzip |
      | Fuentes | 47 680 B |
      | Vídeo del hero | 769 KB, antes 10,5 MB |

- [ ] Lighthouse en móvil y escritorio (pendiente, requiere navegador)
- [x] JavaScript del sistema de movimiento medido: **447 B gzip**, muy por
      debajo del presupuesto de 5 KB. Aparte, `ClientRouter` de Astro añade
      5,1 KB gzip por las transiciones entre páginas
- [x] `prefers-reduced-motion` cubierto en 6 bloques del CSS generado, más el
      corte temprano en `motion.ts` y en el script del hero
- [x] Sin JavaScript: verificado que `data-motion-ready` no aparece como
      atributo en el HTML servido, así que nada queda oculto
- [x] Foco por teclado: 7 reglas `:focus-visible` en el CSS generado
- [x] 45 rutas generadas, `<html lang>` correcto en ambos idiomas
- [x] **Extra**: dos componentes huérfanos eliminados, `HeroIndexSection.astro`
      y el hero inline duplicado. Nadie los importaba
- [x] **Extra**: los iconos de redes llevaban `fill="#06B6D4"` incrustado, el
      cian anterior a la paleta azul, de modo que el color del hover no les
      afectaba. Pasan a `currentColor`
- [x] **Extra**: el contenedor de redes tenía `data-reveal` y se quedaba en
      opacidad 0. Retirado
- [ ] Revisar en Safari iOS (autoplay en modo bajo consumo)
- [ ] Revisar en Chrome Android
- [ ] Revisión final de contenido con Nahuel antes de desplegar
