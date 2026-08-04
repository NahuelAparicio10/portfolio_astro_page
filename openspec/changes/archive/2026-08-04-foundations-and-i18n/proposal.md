# Fundaciones: URL limpia, tokens unificados e i18n real

## Por qué

La web funciona, pero arrastra tres problemas estructurales que bloquean cualquier
mejora posterior:

1. **La URL lleva `/portfolio_astro_page`**, y ese prefijo está hardcodeado
   **49 veces en 19 archivos** — dentro de `@font-face` en CSS, dentro de
   `<script is:inline>` en el Header, en `<video>`, en `<img>`. Solo hay **una**
   aparición de `import.meta.env.BASE_URL` en todo el proyecto. Mover el sitio
   hoy es tocar 19 archivos a mano.

2. **El sitio entero existe duplicado** en inglés y español. No hay capa de i18n:
   hay copias literales de cada página, layout, sección y fichero de datos con el
   texto cambiado. `Projects.astro` son 52 líneas duplicadas para que **3 líneas**
   de texto sean distintas. En `layouts/es/` conviven `BlogPost.astro` y
   `ES_BlogPost.astro`, dos copias de 137 líneas del mismo archivo.

3. **Los design tokens son incoherentes y tienen reglas muertas.** El tema claro
   usa naranja (`#FF8A4C`), el oscuro usa cian (`#06B6D4`), el comentario dice
   "Flowing Orange" y `--accent-rgb` es azul (`59, 130, 246`) sin coincidir con
   ninguno de los dos. Además `--color-accent-bg: rgba(var(--accent), 0.15)` es
   CSS inválido (`--accent` es un hex, no un triplete RGB) y `--background` se
   declara dos veces en `dark.css`.

Mientras esto siga así, cada cambio visual hay que hacerlo dos veces y cada ruta
nueva hay que escribirla con el prefijo a mano.

## Qué cambia

- **Hosting**: renombrar el repositorio a `nahuelaparicio10.github.io` para
  convertirlo en *user site* de GitHub Pages. Eso elimina el prefijo de forma
  definitiva, porque en GitHub Pages el prefijo **es** el nombre del repo y no
  existe ajuste que lo desactive.
- **Rutas**: `base: "/"` y un helper `href()` centralizado, para que ninguna ruta
  vuelva a escribirse a mano y una futura migración a dominio propio sea un
  cambio de una línea.
- **i18n**: adoptar el enrutado i18n nativo de Astro con diccionarios en
  `src/i18n/`. Un solo componente por sección; el idioma pasa a ser un parámetro,
  no una copia del archivo.
- **Datos**: un solo `src/data/*` con campos `{ en, es }` en lugar de
  `src/data/` + `src/data/es/`.
- **Tokens**: paleta unificada en azul, con `--accent-rgb` coherente y las reglas
  rotas arregladas.
- **Limpieza**: eliminar `demo.astro` (165 líneas de plantilla que se publican),
  `ES_BlogPost.astro` (duplicado), `img2..img6.png` (~950 KB sin usar) y
  `netlify.toml` (el deploy es GitHub Pages).
- **Bugs de i18n**: `<html lang="en">` en las páginas españolas, los CTAs de la
  home ES que apuntan a páginas inglesas, y el redirect por `localStorage` que se
  ejecuta en cada carga provocando parpadeo.

## Qué NO cambia

- El diseño visual, más allá del cambio de color de acento a azul. El rediseño
  "juicy", las animaciones y el hero van en el change `visual-refresh`.
- El contenido: `skills.ts`, la experiencia laboral y el posicionamiento se
  actualizan en `visual-refresh`.
- El hosting sigue siendo GitHub Pages con el `deploy.yml` actual.
- No se añade analítica.

## Riesgos

- **La URL actual deja de funcionar.** GitHub mantiene una redirección desde el
  nombre antiguo del repo, pero no la garantiza indefinidamente. Antes de
  renombrar hay que confirmar dónde está publicada la URL vieja (LinkedIn, CV,
  itch.io, firma de correo) y actualizarla.
- Solo puede existir **un** user site por cuenta de GitHub. Ese nombre de repo
  queda consumido por el portfolio.
- La migración a i18n toca prácticamente todas las páginas; conviene verificar
  ruta por ruta que ambos idiomas siguen resolviendo antes de dar por cerrado.
