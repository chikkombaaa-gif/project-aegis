# Design system — Project Aegis

## Principles

- Dark-first, optional light mode
- Cyan accent signal (intelligence / systems)
- 8px spacing rhythm
- Motion that supports hierarchy, never noise
- WCAG 2.2 AA focus states + `prefers-reduced-motion`

## Color

| Token | Dark | Light |
|-------|------|-------|
| `--bg` | `#050505` | `#f6f7f9` |
| `--fg` | `#f5f7fa` | `#0a0a0a` |
| `--muted` | `#8b95a5` | `#5c6570` |
| `--accent` | `#00e5ff` | `#0891b2` |
| `--accent-2` | `#a78bfa` | `#7c3aed` |
| `--border` | white 8% | black 10% |
| `--card` | glass dark | glass light |

## Typography

| Role | Font |
|------|------|
| Body | Inter |
| Display / headings | Syne |

Tracking on display: `-0.03em`. Section labels: 11px uppercase ~0.35em tracking.

## Spacing

Base unit **8px**. Section vertical padding `py-24` / `md:py-32`. Content max width **72rem** (`max-w-6xl`).

## Components

- **Glass** — blurred card surface + hairline border
- **Glow border** — accent ring on hover / focus CTAs
- **Magnetic** — soft cursor pull on primary buttons
- **Loader** — BV splash on first paint
- **Cursor** — desktop-only follower (disabled on touch / reduced motion)
- **Particles** — canvas neural-node field (hero)

## Motion

Shared ease: `[0.16, 1, 0.3, 1]`. Scroll reveals once in viewport. Lenis duration ~1.2s.

## Accessibility

- Skip link
- `:focus-visible` accent outline
- Modal dialog semantics on case studies
- Theme toggle labeled
- Reduced motion short-circuits animations
