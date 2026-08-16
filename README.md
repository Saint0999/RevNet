# revnet

A front-end concept for a global incorporation and accounting platform — a marketing landing page plus an interactive revenue dashboard.

Built as a learning project to practise TypeScript and Tailwind CSS.

> All data in this project is hard-coded mock data. There is no backend, no auth, and no persistence.

## Stack

| Concern | Choice |
| --- | --- |
| Build | Vite |
| UI | React 19 + TypeScript (strict) |
| Styling | Tailwind CSS v4 (CSS-first `@theme` config) |
| Components | shadcn / Radix primitives (`avatar`, `table`) |
| Charts | Recharts |
| Smooth scroll | Lenis (marketing pages only) |
| Routing | React Router |
| Font | Geist Variable (self-hosted via Fontsource) |

## Getting started

```bash
npm install
```

```bash
npm run dev
```

The dev server prints a local URL (default `http://localhost:5173`).

## Scripts

| Script | Does |
| --- | --- |
| `npm run dev` | Start the Vite dev server with HMR |
| `npm run build` | Typecheck, then build to `dist/` |
| `npm run typecheck` | Typecheck only |
| `npm run lint` | Run ESLint |
| `npm run preview` | Serve the production build locally |

## Routes

| Path | Screen |
| --- | --- |
| `/` | Landing page — hero, platform overview, features, about, FAQ |
| `/product` | Product page — what revenue tracking with revnet does, how it works, features, FAQ |
| `/dashboard` | Dashboard — stat cards, revenue chart, activity ticker, orders table |

## Project layout

```
src/
  App.tsx            Router setup
  LandingPage.tsx    Marketing page
  ProductPage.tsx    Product page explaining the revenue tracking product
  Dashboard.tsx      Dashboard shell + mock datasets
  Sidebar.tsx        Collapsible nav rail
  StatCard.tsx       Revenue / profit / orders / cancelled tile
  RevenueChart.tsx   Recharts area chart
  ActivityTicker.tsx Looping order marquee
  RecentOrders.tsx   Filterable orders table
  useScrollReveal.ts Reveal-on-scroll hook shared by the marketing pages
  useSmoothScroll.ts Lenis smooth scrolling + eased in-page anchor jumps
  types.ts           Shared domain types
  components/ui/     shadcn primitives
  lib/utils.ts       `cn()` class merge helper
```

## Theming

Colour tokens live in `src/index.css` as CSS custom properties, following the shadcn convention. The app is dark-only: `<html>` carries a permanent `dark` class in `index.html`, which is what makes the `--background` / `--border` / `--muted` tokens resolve to their dark values.

## Known gaps

These are deliberate — the project is a UI exercise, not a product.

- Sidebar nav items are not wired to routes; only `/`, `/product`, and `/dashboard` exist.
- The landing page's **Login** button and its in-page anchors (`Features`, `Pricing`, `FAQ`, footer links) are placeholders.
- Dashboard figures are static per timeframe rather than fetched.
