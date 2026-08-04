import tailwindcss from '@tailwindcss/vite';

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://NahuelAparicio10.github.io',

  // GitHub Pages serves project sites under the repository name.
  // Never hardcode this value anywhere else: build URLs with src/lib/href.ts.
  base: '/portfolio',

  // English lives at the root, Spanish under /es/. `prefixDefaultLocale: false`
  // keeps the existing English URLs unchanged.
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  integrations: [mdx(), sitemap({ i18n: { defaultLocale: 'en', locales: { en: 'en-US', es: 'es-ES' } } })],

  vite: {
    plugins: [tailwindcss()],
  },
});
