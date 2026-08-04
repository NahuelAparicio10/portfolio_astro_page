# Diseño técnico — Fundaciones

## 1. Eliminar el prefijo de la URL

### El problema real

GitHub Pages sirve cada repositorio bajo una carpeta con el nombre del repo. El
prefijo no es configuración de Astro: es el nombre del repositorio.

```
USER SITE                                 PROJECT SITE (actual)
repo: nahuelaparicio10.github.io          repo: portfolio_astro_page
URL:  nahuelaparicio10.github.io/         URL:  nahuelaparicio10.github.io/
base: "/"                                       portfolio_astro_page/
                                          base: "/portfolio_astro_page"
```

### Alternativas consideradas

| Opción | Resultado | Coste | Decisión |
|---|---|---|---|
| Renombrar repo a `nahuelaparicio10.github.io` | `base: "/"` | 0 € | **Elegida** |
| Dominio propio + `CNAME` | `nahuelaparicio.dev` | ~12 €/año | Futuro, no descartada |
| Mover a Vercel/Netlify | sin prefijo | 0 € | Descartada: quiere seguir en GH Pages |
| Quedarse como está | prefijo se mantiene | 0 € | Descartada: es el objetivo del change |

Se elige renombrar porque cumple el objetivo sin coste y sin salir de GitHub
Pages. La migración posterior a dominio propio queda a un `CNAME` de distancia,
ya que el código habrá quedado con `base: "/"` en ambos casos.

### Implementación

`astro.config.mjs`:

```
site: 'https://nahuelaparicio10.github.io'
base: '/'
```

Se introduce `src/lib/href.ts` como único punto de construcción de rutas:

```
href('/about')        → '/about'
href('/about', 'es')  → '/es/about'
```

Todas las rutas del proyecto pasan por ahí. La regla es: **ningún literal de ruta
en JSX/CSS**. Así, si mañana se añade un dominio propio o cambia el prefijo, es
un cambio en un archivo.

Casos especiales, porque no pueden importar TypeScript:

- `global.css` (`@font-face`): las rutas pasan a ser relativas a la raíz (`/fonts/...`).
- `Header.astro` (`<script is:inline>`): la constante `BASE` desaparece; el
  script lee el idioma de `document.documentElement.lang` en vez de parsear el
  prefijo de la URL.

## 2. i18n nativo de Astro

### Estructura objetivo

```
ANTES                             DESPUÉS
pages/index.astro                 pages/index.astro
pages/es/index.astro              pages/es/index.astro       (thin re-export)
components/sections/Projects      components/sections/Projects.astro
components/sections/es/           i18n/en.ts
    es_Projects.astro             i18n/es.ts
components/sections/SkillsSection i18n/index.ts   (useTranslations, getLangFromUrl)
components/sections/es/
    SkillsSection.astro
layouts/LayoutAbout.astro         layouts/LayoutAbout.astro
layouts/es/LayoutAbout.astro
layouts/es/BlogPost.astro         layouts/BlogPost.astro
layouts/es/ES_BlogPost.astro          ← duplicado, se borra
data/work.ts                      data/work.ts   con campos { en, es }
data/es/es_work.ts
```

`astro.config.mjs`:

```
i18n: {
  defaultLocale: 'en',
  locales: ['en', 'es'],
  routing: { prefixDefaultLocale: false }
}
```

`prefixDefaultLocale: false` mantiene el inglés en la raíz y el español en `/es/`,
que es exactamente el esquema actual. Así **las URLs en inglés no cambian** más
allá de perder el prefijo, y no se rompe nada indexado.

### Forma de los datos

En lugar de dos archivos, un archivo con el texto por idioma. Los campos que no
se traducen (tecnologías, fechas, empresa) no se duplican:

```ts
{
  company: 'Titutitech',
  technologies: ['Unity', 'C#'],
  title:       { en: 'Game Programmer', es: 'Programador de Videojuegos' },
  description: { en: '...',             es: '...' },
}
```

Esto elimina una clase entera de bugs: hoy `data/work.ts` tiene dos puestos y
`data/es/es_work.ts` solo uno, porque se actualizó uno y no el otro.

### Alternativas consideradas

| Opción | Decisión |
|---|---|
| `astro:i18n` nativo + diccionarios propios | **Elegida**: cero dependencias, es el estándar de Astro |
| `astro-i18next` / `paraglide` | Descartada: dependencia extra para dos idiomas y un sitio pequeño |
| Colecciones de contenido por idioma | Ya se usa para el blog (`content/blog` + `content/es`) y se mantiene |
| Seguir duplicando | Descartada: es el problema que se viene a resolver |

El blog ya usa colecciones separadas y eso **se conserva** — para contenido largo
en Markdown, un archivo por idioma es lo correcto. Lo que se unifica es la UI.

## 3. Tokens de color

### Estado actual

```
tokens.css  --accent: #FF8A4C          naranja
dark.css    --accent: #06B6D4          cian
dark.css    /* Flowing Orange */       comentario que miente
dark.css    --accent-rgb: 59,130,246   azul, no coincide con ninguno
dark.css    --color-accent-bg: rgba(var(--accent), 0.15)   ← CSS inválido
dark.css    --background                declarado dos veces (#050505, #000118)
```

### Objetivo

Una sola escala azul, con el triplete RGB como fuente de verdad para poder
componer transparencias correctamente:

```
--accent-rgb: <r, g, b>          ← fuente de verdad
--accent:     rgb(var(--accent-rgb))
--accent-dark / --accent-light   ← derivados para gradientes y glow
```

Con eso `rgba(var(--accent-rgb), 0.15)` pasa a ser válido y las reglas de
`--color-accent-bg` y los glows funcionan de verdad.

Se mantiene la estructura de archivos actual (`tokens.css` base, `themes/dark.css`
y `themes/light.css` como overrides) porque es correcta — el problema son los
valores, no la organización.

Se verifica contraste AA (4.5:1) del azul sobre el fondo oscuro. El cian actual
`#06B6D4` sobre `#000118` pasa holgadamente; un azul más saturado puede no
hacerlo, así que el tono final se elige con el contraste medido, no a ojo.

## 4. Bugs de i18n que se arreglan de paso

| Bug | Ubicación | Arreglo |
|---|---|---|
| `<html lang="en">` en página española | `pages/es/index.astro:19` | `lang={lang}` desde el helper |
| CTAs de home ES apuntan a páginas EN | `pages/es/index.astro:9-14` | Rutas vía `href(path, lang)` |
| Redirect `localStorage` en cada carga | `Header.astro` script | Se elimina; el idioma lo decide la URL |
| `<div>` desbalanceado en el header | `Header.astro:36-125` | Se corrige al reescribir el nav |

Sobre el redirect: hoy, si guardaste `lang=es`, cualquier visita a una URL inglesa
te reexpulsa a español mediante `location.replace` **en el cliente, tras pintar**.
Eso produce parpadeo, rompe el botón atrás y hace que un enlace compartido en
inglés no se pueda abrir en inglés. La URL debe ser la única fuente de verdad del
idioma; el selector navega, no redirige.
