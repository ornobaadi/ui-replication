# UI Replication — Chargeflow & Domu

Pixel-perfect UI component replications of scroll-driven animations and interactive elements inspired by [Chargeflow](https://www.chargeflow.io/) and [Domu](https://domu.ai/).

**Live demo → [ui-replication-practise.vercel.app](https://ui-replication-practise.vercel.app/)**

---

## What was replicated

### Chargeflow — Scroll-shrinking navbar
A full-featured, responsive navigation bar that morphs as the user scrolls:
- Logo text fades out and the icon compresses on scroll
- Mega-menu dropdowns per navigation item (Product, Customers, Integrations, Resources, Company)
- Shimmer CTA button with animated gradient border
- Mobile menu with hamburger/close icon toggle
- Built purely with CSS transitions and a custom `useScroll` hook — no animation library required

### Domu — Converging integrations animation
A scroll-pinned section where integration logos curve inward from their scattered positions to a central hub:
- Bézier-curve paths drawn on an SVG canvas sized to the viewport
- Logos animate along their individual curved paths as the user scrolls through the sticky section
- Animated dashed stroke reveals the path ahead of each logo
- Integration logos include Salesforce, NICE, Arrow, Latitude, Polly, and others

---

## Tech stack

| Technology | Version |
|---|---|
| [Next.js](https://nextjs.org) | 16.x (App Router) |
| [React](https://react.dev) | 19 |
| [Tailwind CSS](https://tailwindcss.com) | v4 |
| [TypeScript](https://www.typescriptlang.org) | v5 |
| [Inter Tight](https://fonts.google.com/specimen/Inter+Tight) | Google Fonts |

---

## Project structure

```
app/
  layout.tsx               # Root layout with SEO metadata
  page.tsx                 # Main page composing all sections
  globals.css              # Global styles and Tailwind theme tokens
components/
  navbar.tsx               # Scroll-shrinking navbar (Chargeflow)
  converging-animation.tsx # Converging logos animation (Domu)
  ui/
    shimmer-button.tsx     # Animated shimmer CTA button
    menu-toggle-icon.tsx   # Hamburger ↔ close icon
    use-scroll.tsx         # useScroll hook (scroll position helper)
lib/
  utils.ts                 # cn() utility (clsx + tailwind-merge)
```

---

## Getting started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

```bash
pnpm build   # Production build
pnpm start   # Start production server
```

---

## Notes

- External logo images are loaded from `framerusercontent.com` — allowed via `next.config.ts` `remotePatterns`.
- The Helvetica Neue Light font is served from `/public/Light.ttf`.
- No third-party animation libraries are used; all motion is driven by native CSS transitions and `requestAnimationFrame` via React `useEffect`.

---

## Credits

Designs inspired by:
- [chargeflow.io](https://www.chargeflow.io/) — chargeback dispute automation platform
- [domu.ai](https://domu.ai/) — AI-powered property intelligence
