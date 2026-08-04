# Tareas — Fundaciones

## 0. Antes de empezar (requiere acción de Nahuel)

- [x] Repositorio renombrado a `portfolio`
- [x] Remote local actualizado
- [x] Deploy mediante GitHub Actions, verificado en producción
- [x] Pages sirviendo desde GitHub Actions
- [x] **URL decidida**: se mantiene `portfolio` como nombre de repositorio, con
      `base: '/portfolio'`. Se descarta por ahora eliminar el prefijo. La opción
      de dominio propio queda abierta para el futuro: con el helper `href()` en
      su sitio, migrar sería cambiar una línea.
- [x] `base` actualizado de `/portfolio_astro_page` a `/portfolio` en las 49
      apariciones de 19 archivos. Desplegado y funcionando.
- [x] *(Al final del change)* Actualizar la URL donde esté publicada: LinkedIn,
      CV en PDF, itch.io, firma de correo, perfil de GitHub

## 1. Limpieza previa

- [x] Borrar `src/pages/demo.astro` (165 líneas de plantilla que se publican)
- [x] Borrar el duplicado de `BlogPost` en `layouts/es/`. **Corregido respecto al
      plan**: el archivo muerto era `es/BlogPost.astro`, no `es/ES_BlogPost.astro`
      — este último sí lo importa `pages/es/blog/[...slug].astro`. Solo diferían
      en el tipo de colección (`'blog'` frente a `'es'`)
- [x] Borrar `public/img2.png` … `public/img6.png` (sin referenciar, ~950 KB)
- [x] Borrar `netlify.toml` (el deploy es GitHub Pages)
- [x] Borrar `dev.log` del repositorio y añadir `*.log` a `.gitignore`
- [x] Verificar que el build sigue pasando (46 páginas, sin errores)

## 2. Rutas y base

- [x] `astro.config.mjs`: `base: '/portfolio'`
- [x] Verificar: `grep -r portfolio_astro_page src/` no devuelve nada
- [x] Comprobar en el build que fuentes, vídeo, imágenes y PDF cargan
- [x] Crear `src/lib/href.ts` con `href()`, `asset()`, `stripBase()`,
      `getLocaleFromPath()`, `getPathWithoutLocale()`, `localizedUrl()` e
      `isSamePath()`
- [x] Migrar los 47 literales al helper. Solo quedan tres apariciones de
      `/portfolio`, y son el *slug* legítimo de la página de proyectos
- [x] `global.css`: fuentes movidas a `src/assets/fonts/` con `url()` relativa,
      de modo que Vite reescribe la ruta con el `base` correcto. CSS no puede
      importar el helper, así que esta es la única forma robusta
- [x] `BaseHead.astro`: precarga de fuentes mediante importación `?url`
- [x] `Header.astro`: eliminadas las constantes `BASE` / `ES_PREFIX`; el enlace
      de idioma se resuelve en el servidor con `localizedUrl()`
- [x] **Extra**: `BaseHead` referenciaba cinco iconos inexistentes
      (`favicon-32x32.png`, `favicon-16x16.png`, `apple-touch-icon.png`,
      `favicon.ico`) y además sin prefijo de base. Todos devolvían 404.
      Sustituidos por el logo real, con el tipo MIME corregido a `image/jpeg`
- [ ] Regenerar los dos PDF del CV: contienen la URL antigua incrustada

## 3. Tokens de color

- [x] Escala azul elegida con contraste medido, no a ojo:

      | Tema | Acento | Contraste | Antes |
      |---|---|---|---|
      | Oscuro | `#60A5FA` | 8.12:1 ✓ | `#06B6D4` cian, 8.50:1 |
      | Claro | `#2563EB` | 5.17:1 ✓ | `#3B82F6`, **3.68:1 ✗ fallaba AA** |

- [x] `tokens.css`: `--accent-rgb` como fuente de verdad, `--accent` derivado
- [x] `themes/dark.css`: eliminado el `--background` duplicado
- [x] `themes/dark.css`: arreglado `--color-accent-bg` (usaba `rgba(var(--accent), …)`
      con un hex, lo que producía color inválido)
- [x] `themes/light.css`: alineado con la escala azul y corregido su
      `--accent-rgb`, que era naranja
- [x] Corregidos los comentarios que decían "Flowing Orange"
- [x] **Extra**: `--glow-accent` se consumía en `utilities.css` pero no estaba
      definido, lo que invalidaba el `box-shadow` completo del hover de las
      tarjetas. Definido en ambos temas
- [x] `--primary`, `--secondary` y `--outline` derivados del acento en lugar de
      hexadecimales sueltos
- [x] Verificado: cero apariciones de naranja o cian en el CSS generado

## 3b. Eliminación del tema claro (decisión de Nahuel)

Las 24 páginas fuerzan `data-theme="dark"`, el selector `[data-theme="light"]`
nunca llegaba a aplicarse y `ThemeToggle.astro` no lo importaba ningún archivo.
Tres piezas muertas manteniéndose en paralelo.

- [x] Borrar `themes/light.css` y `components/ui/button/ThemeToggle.astro`
- [x] Consolidar todos los tokens en `tokens.css` bajo `:root`; borrar `themes/`
- [x] `.dark` y `[data-theme="dark"]` se conservan como alias (Tailwind necesita
      la clase para su variante `dark:`), pero ya no duplican tokens
- [x] `utilities.css`: fusionadas las variantes de `.card-surface` con ámbito de
      tema, ahora redundantes
- [x] Paleta azul oscuro real en lugar del negro anterior:

      | Token | Valor | Uso |
      |---|---|---|
      | `--navy-950` | `#070B16` | fondo de página |
      | `--navy-900` | `#0C1222` | superficie elevada |
      | `--navy-850` | `#131B2E` | tarjeta / hover |
      | `--navy-800` | `#1A2338` | bordes y separadores |

      Contraste sobre `#070B16`: acento 7.73:1, primario 17.86:1,
      secundario 14.71:1, muted 9.22:1. Todo AA.

- [x] Añadido borde de acento al hover de tarjeta, ahora que el glow funciona
- [x] Verificado: un único `--accent-rgb` en el CSS generado (antes dos) y cero
      restos de `data-theme="light"`

## 4. Infraestructura i18n

- [x] `astro.config.mjs`: bloque `i18n` con `prefixDefaultLocale: false`, de modo
      que las URLs inglesas no cambian
- [x] `sitemap()` configurado con i18n para que emita `hreflang` correctos
- [x] Crear `src/i18n/en.ts` y `src/i18n/es.ts`
- [x] Crear `src/i18n/index.ts` con `getLocale()` y `useTranslations()`
- [x] Fallback: `es.ts` se tipa contra el esquema de `en.ts`, así que una clave
      que falte o se renombre **rompe el build** en lugar de renderizar vacío.
      Es más fuerte que un fallback en tiempo de ejecución: el error no puede
      llegar a producción

## 5. Unificar datos

- [ ] `data/work.ts`: campos `{ en, es }`; borrar `data/es/es_work.ts`
- [ ] `data/projects.ts`: ídem; borrar `data/es/es_projects.ts`
- [ ] `data/studies.ts`: ídem; borrar `data/es/es_studies.ts`
- [ ] Verificar que ambos idiomas muestran el mismo número de entradas
      (hoy `work` tiene 2 puestos en EN y 1 en ES)

## 6. Unificar componentes

- [ ] `Footer.astro` ← fusionar `es/es_Footer.astro`
- [ ] `Projects.astro` ← fusionar `es/es_Projects.astro` (52 líneas por 3 de texto)
- [ ] `SkillsSection.astro` ← fusionar `es/SkillsSection.astro`
- [ ] `BlogAllArticles.astro` ← fusionar `es/BlogAllArticles.astro`
- [ ] `PostCard` / `FeaturedPost` ← fusionar las variantes `ES_`
- [ ] Borrar `src/components/sections/es/` y `src/components/ui/card/ES_*`

## 7. Unificar layouts

- [ ] `LayoutAbout.astro` ← fusionar `es/LayoutAbout.astro`
- [ ] `LayoutSkills.astro` ← fusionar `es/LayoutSkills.astro`
- [ ] `BlogPost.astro` ← fusionar `es/BlogPost.astro`
- [ ] Borrar `src/layouts/es/`

## 8. Header y selector de idioma

- [x] Corregir el `<div>` desbalanceado (líneas 36-125)
- [x] Eliminar el redirect por `localStorage` del script inline
- [x] El selector pasa a ser un `<a href>` con la URL equivalente resuelta en el
      servidor: navega de verdad, respeta el botón atrás y funciona sin JavaScript
- [x] El script del header queda reducido al menú móvil; deja de ser `is:inline`,
      por lo que Astro lo procesa y comprueba tipos
- [x] Enlaces del nav extraídos a un array, en lugar de repetirlos en escritorio
      y móvil
- [x] Etiquetas del nav desde el diccionario, sin ternarios `isES ? ... : ...`

## 9. Páginas

- [x] `pages/es/index.astro`: `lang="es"` (decía `lang="en"`)
- [x] `pages/es/index.astro`: CTAs a rutas españolas (apuntaban a inglesas)
- [x] **Extra**: `ES_FeaturedPost.astro` enlazaba a `/blog/...` en inglés desde
      las tarjetas destacadas españolas. Corregido
- [x] **Extra**: `pages/es/blog/index.astro` emitía `<link rel="next">` hacia la
      paginación inglesa. Corregido
- [x] **Extra**: `PostNav` y `BlogPagination` estaban fijados al inglés pese a
      usarse en ambos idiomas. Ahora reciben `locale` y traducen sus etiquetas
- [ ] Rutas dinámicas de blog: verificar `getStaticPaths` en ambos idiomas
- [ ] Feeds RSS: verificar que ambos idiomas generan correctamente

## 10. Verificación

- [ ] `npm run build` sin errores ni warnings
- [ ] Recorrer las 12 rutas en ambos idiomas y confirmar que resuelven
- [ ] Confirmar `<html lang>` correcto en cada una
- [ ] Confirmar que el sitemap no contiene el prefijo antiguo
- [ ] Probar el selector de idioma en cada tipo de página
- [ ] Comprobar que el botón atrás funciona tras cambiar de idioma
- [ ] Revisar en móvil real que no hay regresiones
- [ ] Desplegar y verificar la URL nueva en producción
