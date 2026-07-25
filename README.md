# Project Aegis

Personal portfolio of **Barath Velu** — AI & Machine Learning Engineer.

**Live:** [vbarathportfolio.vercel.app](https://vbarathportfolio.vercel.app/)

---

## Stack

| Layer | Tech |
|-------|------|
| UI | React 19, TypeScript |
| Build | Vite 6 |
| Styles | Tailwind CSS 4 |
| Motion | Framer Motion, Lenis |
| Icons | Lucide React |
| Deploy | Vercel |

## Quick start

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production → dist/
npm run preview  # preview build
npm run typecheck
```

## Project layout

```
src/
  main.tsx                 # entry
  App.tsx                  # root component
  Portfolio.tsx            # full single-page portfolio
  styles.css               # design tokens + Tailwind
  components/portfolio/    # Background, Stats, Magnetic, TextReveal, Marquee
  hooks/useLenis.ts        # smooth scroll
public/
  assets/barath.png
  favicon.ico
```

## License

MIT
