# Barath Velu — Portfolio

> AI & Machine Learning Engineer · Pre-final year · Chennai

Production-minded portfolio: NLP pipelines, supervised ML, clean Python engineering.

[![Live](https://img.shields.io/badge/Live-vbarathportfolio.vercel.app-000?style=for-the-badge&logo=vercel&logoColor=white)](https://vbarathportfolio.vercel.app/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

**Live:** [vbarathportfolio.vercel.app](https://vbarathportfolio.vercel.app/)  
**Code (projects):** [github.com/barathvelu1](https://github.com/barathvelu1)

---

## Highlights

- Dark, OKLCH design system with film grain and glass surfaces
- Lenis smooth scroll + Framer Motion (magnetic CTAs, text masks, scroll reveals)
- Hire-ready structure: About · Skills · Case-study work · Contact
- Accessibility: skip link, focus-visible, `prefers-reduced-motion`
- SEO: Open Graph, Twitter cards, JSON-LD Person schema

## Stack

| Layer | Choice |
|-------|--------|
| UI | React 19 + TypeScript (strict) |
| Build | Vite 6 |
| CSS | Tailwind CSS 4 |
| Motion | Framer Motion 12 + Lenis |
| Icons | Lucide |
| Host | Vercel |

## Quick start

```bash
# Node.js 20+
npm install
npm run dev          # http://localhost:5173
npm run build        # → dist/
npm run preview      # serve dist
npm run typecheck    # tsc --noEmit
```

## Repository layout

```
project-aegis/
├── public/                 # Static assets, robots, sitemap, favicons
├── src/
│   ├── data/content.ts     # Single source of truth (profile, skills, projects)
│   ├── components/portfolio/
│   ├── hooks/useLenis.ts
│   ├── lib/motion.ts       # Shared easing / variants
│   ├── Portfolio.tsx       # Page composition
│   ├── App.tsx             # Loader + cursor + page
│   └── styles.css          # Design tokens
├── index.html
├── vite.config.ts
├── vercel.json
└── .github/workflows/ci.yml
```

## Scripts

| Command | Purpose |
|---------|---------|
| `npm run dev` | Local development |
| `npm run build` | Production bundle |
| `npm run preview` | Preview production build |
| `npm run typecheck` | TypeScript check only |

## Deploy

Vercel is configured via `vercel.json` (SPA rewrites, security headers, caching).

Push to `main` → production updates automatically.

## Contact

| | |
|--|--|
| Email | [barathvelu777@gmail.com](mailto:barathvelu777@gmail.com) |
| GitHub | [barathvelu1](https://github.com/barathvelu1) |
| Location | Chennai, Tamil Nadu, India |

## License

[MIT](./LICENSE) © Barath Velu
