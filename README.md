# Portfolio — Byteflow Creatives

Independent studio portfolio built with React + Vite, GSAP + ScrollTrigger, Lenis smooth scroll, Framer Motion, and Tailwind CSS.

## Features
- Custom mix-blend cursor with hover labels
- Lenis smooth scroll
- GSAP word-by-word hero reveal (SplitType)
- Scroll-driven manifesto reveal
- Hover image preview on project list
- Marquee, grain texture, oversized typography (Clash Display + Instrument Serif)
- Live local clock in nav

## Stack
- React 18 + Vite 5
- Tailwind CSS 3
- GSAP 3 + ScrollTrigger + SplitType
- Lenis
- Framer Motion
- Lucide icons

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:5173

## Build

```bash
npm run build
npm run preview
```

## Structure
- `src/App.jsx` — root, initializes Lenis
- `src/components/Cursor.jsx` — custom cursor
- `src/components/Nav.jsx` — sticky nav with clock
- `src/components/Hero.jsx` — animated hero
- `src/components/Marquee.jsx` — services marquee
- `src/components/About.jsx` — scroll-reveal manifesto
- `src/components/Work.jsx` — projects with hover image
- `src/components/Footer.jsx` — big email CTA
