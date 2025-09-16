# Astro + Tailwind Starter (SEO + i18n + Blog)

A minimal starter for content-first sites.

## Features
- ⚡ Astro 4 static site with file-based routing
- 🎨 TailwindCSS preconfigured
- 🧠 SEO head component + sitemap
- 🌍 Simple i18n via folders (`/fil` example)
- ✍️ Blog via Content Collections (`src/content/blog`)
- ✅ Ready for Azure Static Web Apps / Vercel / Netlify

## Quickstart
```bash
# 1) Install deps
npm install

# 2) Start dev server
npm run dev

# 3) Build
npm run build

# 4) Preview build
npm run preview
```

### Update your site URL
Edit `astro.config.mjs` -> `site: 'https://your-domain.com'`

### Localization
Duplicate pages into `src/pages/<locale>/...` (example: `fil`).
For advanced i18n (routing, translations), consider `astro-i18next`.

### Blog
Create posts in `src/content/blog/*.md` with frontmatter:
```md
---
title: "My post"
description: "Optional"
date: 2025-01-01
draft: false
---
Markdown content here.
```

### Deploy to Azure Static Web Apps
- Create a Static Web App in Azure Portal.
- Build command: `npm run build`
- Output folder: `dist`
- Or add a GitHub Action from Azure to auto-deploy on push.
