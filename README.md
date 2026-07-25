# Project Aegis

Personal portfolio of **Barath Velu** — AI & Machine Learning Engineer.

[![Live](https://img.shields.io/badge/live-vbarathportfolio.vercel.app-0A0A0A?style=flat-square&logo=vercel)](https://vbarathportfolio.vercel.app/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)](./LICENSE)

**Live site:** [vbarathportfolio.vercel.app](https://vbarathportfolio.vercel.app/)

---

## About

A production-oriented single-page portfolio focused on clarity, motion, and performance. Built for recruiters and engineering teams evaluating AI / ML talent.

**Highlights**

- Dark theme with OKLCH design tokens
- Smooth scrolling (Lenis) with reduced-motion support
- Scroll-driven and magnetic micro-interactions (Framer Motion)
- Fully responsive, accessible section navigation

## Stack

| Layer | Technology |
|-------|------------|
| UI | React 19, TypeScript |
| Bundler | Vite 6 |
| Styling | Tailwind CSS 4 |
| Animation | Framer Motion, Lenis |
| Icons | Lucide React |
| Hosting | Vercel |

## Getting started

**Requirements:** Node.js 20+

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build → dist/
npm run preview    # serve production build
npm run typecheck  # TypeScript only
```

## Project structure

```
.
├── public/
│   ├── assets/barath.png
│   └── favicon.ico
├── src/
│   ├── main.tsx                 # App entry
│   ├── App.tsx                  # Root export
│   ├── Portfolio.tsx            # Full portfolio page
│   ├── styles.css               # Tokens + Tailwind
│   ├── components/portfolio/    # UI building blocks
│   └── hooks/useLenis.ts        # Smooth scroll
├── index.html
├── vite.config.ts
├── tsconfig.json
└── vercel.json
```

## Deploy

Configured for Vercel (`vercel.json`). Connect the repo or push to `main` — the production site updates automatically.

```bash
npm run build   # verify locally before deploy
```

## Contact

- **Email:** [barathvelu777@gmail.com](mailto:barathvelu777@gmail.com)
- **GitHub:** [barathvelu1](https://github.com/barathvelu1)
- **Location:** Chennai, India

## License

[MIT](./LICENSE) © Barath Velu
