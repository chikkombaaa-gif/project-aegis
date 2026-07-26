# Barath V — Portfolio (Next.js 15)

AI & Machine Learning Engineer portfolio — dark-first, cyan accents, case-study work, production-minded.

**Live:** [vbarathportfolio.vercel.app](https://vbarathportfolio.vercel.app/)

## Stack

- **Next.js 15** (App Router) + TypeScript
- **Tailwind CSS v4** + custom design tokens
- **Framer Motion** + **Lenis**
- **next-themes** (dark / light)
- Canvas neural-field background (lightweight — no heavy 3D for Lighthouse)

## Setup

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm run start
npm run typecheck
```

Node.js **20+** required.

## Content

Edit **`src/data/content.ts`** — profile, skills, projects (case studies), timeline, writing.

Placeholders are marked with `TODO` / `[PLACEHOLDER]`.

Optional assets:

- `public/resume.pdf` — Resume download CTA
- `public/assets/barath.png` — portrait (compress to ~200KB)
- `public/projects/*` — project covers when ready

## Structure

```
src/
  app/                 # layout, page, globals
  components/
    layout/            # navbar, footer
    sections/          # hero → contact
    ui/                # magnetic, cursor, loader, particles, theme
    providers/         # theme + lenis
  data/content.ts      # single source of truth
  lib/motion.ts
```

## Design system

See **[DESIGN.md](./DESIGN.md)** for colors, type, spacing, components.

## Deploy

Vercel (framework: Next.js). Push `main` to deploy.

## License

MIT © Barath Velu
