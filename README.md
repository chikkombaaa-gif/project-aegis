# Project Aegis — Barath V Portfolio

Personal portfolio for **Barath Velu** — AI & Machine Learning engineer.

Live: [vbarathportfolio.vercel.app](https://vbarathportfolio.vercel.app/)

## Stack

- **React 19** + **TypeScript** + **Vite 6**
- **Tailwind CSS 4** (Vite plugin)
- **Framer Motion** — animations, scroll, magnetic interactions
- **Lenis** — smooth scrolling (respects `prefers-reduced-motion`)
- **Lucide React** — icons

## Scripts

```bash
npm install
npm run dev      # local dev server
npm run build    # production build → dist/
npm run preview  # preview production build
```

## Structure

```
src/
  main.tsx              # entry
  App.tsx               # re-exports Portfolio
  Portfolio.tsx         # full single-page portfolio
  styles.css            # Tailwind + design tokens
  components/portfolio/ # Background, Stats, Magnetic, TextReveal, Marquee, …
  hooks/useLenis.ts
public/assets/          # portrait & favicon
```

## Design notes

- Dark theme with OKLCH color system
- Glass cards, soft gradients, starfield background
- Section dots + scroll progress + Lenis-anchored nav
- Contact form opens the user’s mail client (no backend)

## Deploy

Configured for Vercel (`vercel.json`). Push to `main` or connect the repo in the Vercel dashboard.
