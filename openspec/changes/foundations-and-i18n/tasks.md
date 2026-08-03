# Tareas — Fundaciones

## 0. Antes de empezar (requiere acción de Nahuel)

- [x] Renombrar el repositorio a **`nahuelaparicio10.github.io`** en Settings.
      El nombre debe ser exactamente ese: cualquier otro (`portfolio`, `mi-web`)
      sigue siendo un *project site* y mantiene el prefijo en la URL. El nombre
      del repositorio **es** el prefijo; no existe ajuste que lo desactive.
- [x] Confirmar el remote local (`git remote set-url origin <nueva-url>`)
- [ ] Settings → Pages → Build and deployment → Source: **GitHub Actions**
      (no "Deploy from a branch"). Volver a comprobarlo **después** de renombrar:
      el renombrado puede resetearlo, y entonces el workflow pasa en verde
      pero no publica nada.
- [ ] *(Al final del change)* Actualizar la URL donde esté publicada: LinkedIn,
      CV en PDF, itch.io, firma de correo, perfil de GitHub

## 1. Limpieza previa

- [ ] Borrar `src/pages/demo.astro` (165 líneas de plantilla que se publican)
- [ ] Borrar `src/layouts/es/ES_BlogPost.astro` (duplicado de `BlogPost.astro`)
- [ ] Borrar `public/img2.png` … `public/img6.png` (sin referenciar, ~950 KB)
- [ ] Borrar `netlify.toml` (el deploy es GitHub Pages)
- [ ] Borrar `dev.log` del repositorio y añadirlo a `.gitignore`
- [ ] Verificar que el build sigue pasando

## 2. Rutas y base

- [ ] `astro.config.mjs`: `base: '/'`, `site` apuntando al nuevo dominio
- [ ] Crear `src/lib/href.ts` con firma `href(path, lang?)`
- [ ] Sustituir las 49 apariciones hardcodeadas en los 19 archivos afectados
- [ ] `global.css`: rutas de `@font-face` sin prefijo de repo
- [ ] `Header.astro`: eliminar las constantes `BASE` / `ES_PREFIX` del script inline
- [ ] Verificar: `grep -r portfolio_astro_page src/` no devuelve nada
- [ ] Comprobar en el build que fuentes, vídeo, imágenes y PDF cargan

## 3. Tokens de color

- [ ] Elegir la escala azul y medir contraste AA antes de fijarla
- [ ] `tokens.css`: `--accent-rgb` como fuente de verdad, `--accent` derivado
- [ ] `themes/dark.css`: eliminar el `--background` duplicado
- [ ] `themes/dark.css`: arreglar `--color-accent-bg` (usa `--accent-rgb`)
- [ ] `themes/light.css`: alinear con la nueva escala azul
- [ ] Corregir los comentarios que dicen "Flowing Orange"
- [ ] Revisar visualmente ambos temas en todas las páginas

## 4. Infraestructura i18n

- [ ] `astro.config.mjs`: bloque `i18n` con `prefixDefaultLocale: false`
- [ ] Crear `src/i18n/en.ts` y `src/i18n/es.ts`
- [ ] Crear `src/i18n/index.ts` con `getLangFromUrl()` y `useTranslations()`
- [ ] Definir el comportamiento de fallback al idioma por defecto

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

- [ ] Corregir el `<div>` desbalanceado (líneas 36-125)
- [ ] Eliminar el redirect por `localStorage` del script inline
- [ ] El selector navega a la URL equivalente, no redirige
- [ ] Etiquetas del nav desde el diccionario, no ternarios `isES ? ... : ...`

## 9. Páginas

- [ ] `pages/es/index.astro`: `lang="es"` (hoy dice `lang="en"`)
- [ ] `pages/es/index.astro`: CTAs a rutas españolas (hoy apuntan a inglesas)
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
