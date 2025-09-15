
## 🚀 GitHub Pages (deploy)

Deploy to GitHub Pages with one workflow.

1) Configure site and base in `astro.config.mjs` (critical)

```js
// astro.config.mjs
import { defineConfig } from 'astro/config';

export default defineConfig({
  // User/Org Pages (https://<user>.github.io):
  //   site: 'https://<user>.github.io',
  //   base: '/'
  // Project Pages (https://<user>.github.io/<repo>/):
  //   site: 'https://<user>.github.io/<repo>/',
  //   base: '/<repo>/'
  site: 'https://your-user.github.io',
  base: '/',
});
```

2) Enable GitHub Pages in your repo
- Settings → Pages → Build and deployment → Source: GitHub Actions

3) Add the workflow (ready to copy)

Create `.github/workflows/deploy.yml` with:

```yaml
name: Deploy Astro to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'

      - name: Install deps
        run: npm ci

      - name: Build
        run: npm run build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

4) Commit and push to `main`
- First run may take a minute. Check Actions tab for logs and the Pages URL.

Troubleshooting
- CSS/assets 404 on project pages → `base` is missing or wrong. Set `base: '/<repo>/'` and rebuild.
- Wrong canonical URLs/RSS → `site` incorrect. Use your real Pages URL (or your custom domain if you set one).
- Custom domain (CNAME) → Set `site: 'https://example.com'` and keep `base: '/'`.

## ⚙️ Configuration (do this first)

1) Set your canonical site URL in `astro.config.mjs`:
```js
// astro.config.mjs
export default defineConfig({
  site: 'https://your-domain.com',
  // ...
})
```

2) Update global meta in `src/consts.ts`:
```ts
export const SITE_TITLE = 'Your Site Title';
export const SITE_DESCRIPTION = 'Short description for social/meta.';
```

3) Author profile in `src/data/author.ts` (name, avatar, social URLs).

4) Replace favicon/app icons in `public/` (keep file names the same).

5) Optional: Customize theme tokens in `src/styles/tokens.css` and dark overrides in `src/styles/themes/dark.css`.

## 🧪 Optional: Analytics

This template ships without analytics by default. To add GA4 later, place the GA snippet in `src/components/BaseHead.astro` and (optionally) guard it with `import.meta.env.PROD`.

## 🔧 Toggling features

- Categories: frontmatter supports a single `category`. To disable category pages entirely, remove `src/pages/blog/category/[category].astro` and the category RSS route; posts will continue to work with tags.
- Per-tag/category RSS: remove the routes under `src/pages/rss/tag/` and `src/pages/rss/category/` if you only want a global feed.

## 🧰 Netlify (example)

If you deploy to Netlify, use:
```toml
# netlify.toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/404.html"
  status = 404
```

## ✅ Launch checklist

- [ ] `astro.config.mjs` site URL set
- [ ] `SITE_TITLE` / `SITE_DESCRIPTION` updated
- [ ] Author data and avatar set
- [ ] Favicons/app icons replaced in `public/`
- [ ] Social share image (fallback) looks good
- [ ] Lighthouse pass (SEO + Accessibility)
- [ ] Deploy (Netlify/Vercel/etc.) and verify `/rss.xml` and `/sitemap-index.xml`

## 📄 License

MIT — you’re free to use, modify, and redistribute. See `LICENSE` for details.

Check my site live at 'https://guihubie.com'

