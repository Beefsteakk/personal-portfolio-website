# Portfolio Website — Agent Context & Changelog

This file is read automatically by AI agents to maintain project context across sessions.

---

## Project Overview

Personal portfolio website for Ayers Fong. A single-page Next.js app with animated sections, a shooting stars background, and a purple-accented monochromatic design system.

**Live dev server:** `npm run dev` → http://localhost:3000
**Deploy target:** Vercel

---

## Tech Stack

| Layer | Tool |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| Components | Shadcn/ui (Badge) |
| Icons | Lucide React |
| Font | Inter via `next/font/google` |

---

## Design System

### Colors
- **Accent:** Purple only — `purple-600` in light mode, `purple-400` in dark mode
- **Backgrounds:** `gray-50` (light) / `gray-950` (dark)
- **Text:** `gray-900` (light) / `gray-100` (dark)
- All colors are defined as CSS custom properties in `app/globals.css`:
  - `--purple-accent`, `--purple-accent-soft`, `--purple-glow`, `--star-color`

### Dark Mode
- Controlled by `.dark` class on `<html>` element
- Toggled via `ThemeProvider` context (`components/theme-provider.tsx`)
- Persisted to `localStorage` under the key `"theme"`
- Anti-flash inline script in `app/layout.tsx` `<head>` prevents white flash on load

### Typography
- Inter (all weights) loaded via Next.js font optimization
- CSS variable: `--font-inter`

### Animation Conventions
- Page load: `initial`/`animate` props on Framer Motion elements (not scroll-triggered)
- Scroll reveals: `<SectionReveal>` wrapper using `useInView` with `once: true`
- Card hover: `whileHover={{ y: -4 }}` + purple glow `box-shadow`
- Easing: custom cubic bezier `[0.22, 1, 0.36, 1]` typed as `[number, number, number, number]`
- Reduced motion: shooting stars canvas hidden via `@media (prefers-reduced-motion: reduce)` in CSS
- No `AnimatePresence` tab transitions — tabs have been removed in favour of always-visible sections

### Section Layout Pattern
- Padding: `py-24 px-6` on every section
- Max width: `max-w-5xl` (content sections) or `max-w-3xl` (text-heavy like About)
- Section label: small `text-sm uppercase tracking-widest text-primary` above the heading
- Alternating backgrounds: About and Education use `bg-muted/40` tint; others use plain `--background`
- Dividers: `h-px bg-gradient-to-r from-transparent via-border to-transparent` between all sections and inside footer

---

## Component Map

```
app/
  layout.tsx              Root layout — Inter font, anti-flash script, ThemeProvider
  page.tsx                Single page — assembles all sections with gradient dividers + ScrollProgress
  globals.css             Design tokens, light/dark CSS variables, Tailwind config

components/
  theme-provider.tsx      Dark/light context + localStorage persistence
  navbar.tsx              Sticky frosted-glass navbar + animated toggle + hamburger menu
                          + IntersectionObserver active link tracking
  scroll-progress.tsx     Fixed 2px purple progress bar at top of viewport (Framer Motion useScroll)
  shooting-stars.tsx      Canvas shooting stars (left→right, purple, trail, reduced-motion safe)
  section-reveal.tsx      Reusable scroll-triggered fade+slide-up wrapper (useInView, once: true)
  hero.tsx                Full-screen hero: avatar ring → name → title → bio → icons → CTA button
  about.tsx               Bio text + highlight pill row (degree, city, interests)
  projects-work.tsx       Always-visible Projects grid + Experience timeline (no tabs)
  skills.tsx              Skill badge grid, 2-col mobile / 4-col desktop
  education.tsx           Education cards with icon
  footer.tsx              Gradient divider + contact icons + copyright + back-to-top
  ui/badge.tsx            Shadcn badge (tech stack labels on project cards)
  ui/tabs.tsx             Shadcn tabs (installed but unused — tabs were removed)
```

---

## Current State of Personalisation

Most placeholder data has been replaced with real content. Items still needing update:

| Item | Location | Status |
|---|---|---|
| Profile photo | `public/avatar.jpg` + `hero.tsx` line ~70 | ⬜ Pending — initials "AF" shown |
| Resume PDF | `public/resume.pdf` | ⬜ Pending |
| Email address | `hero.tsx`, `footer.tsx` | ⬜ Pending |
| LinkedIn URL | `hero.tsx`, `footer.tsx` | ⬜ Pending |
| GitHub URL | `hero.tsx`, `footer.tsx` | ⬜ Pending |
| Phone number | `hero.tsx`, `footer.tsx` | ⬜ Pending |
| City in About highlights | `about.tsx` → `"[Your City]"` | ⬜ Pending |
| Project names/descriptions/links | `projects-work.tsx` → `projects` array | ⬜ Pending |
| Work experience entries | `projects-work.tsx` → `experience` array | ⬜ Pending |
| Skills list | `skills.tsx` → `skillCategories` array | ⬜ Pending |
| Education entries | `education.tsx` → `education` array | ⬜ Pending |
| Page metadata title/description | `app/layout.tsx` → `metadata` object | ⬜ Pending |

---

## Changelog

### 2026-02-26 — Initial Build
- Initialized Next.js 16 project with TypeScript, Tailwind CSS v4, Shadcn/ui
- Installed Framer Motion, Lucide React
- Built full design system with purple accent, light/dark CSS variables
- Built all sections: Navbar, Hero, About, Projects/Work (tabbed), Skills, Education, Footer
- Implemented shooting stars canvas (20 stars, purple-tinted, trail effect, reduced-motion safe)
- Dark/light toggle with localStorage persistence and anti-flash script

### 2026-02-26 — Navbar Translucency Fix
- Changed navbar background from `bg-background/70` to `color-mix(in oklch, var(--background) 30%, transparent)`
- Added `saturate(160%)` to `backdrop-filter` to intensify purple tones bleeding through
- Added purple-tinted bottom border and subtle purple box-shadow glow

### 2026-02-26 — Mobile Responsiveness
- Added hamburger menu to navbar (visible on `< md`); animated dropdown with frosted glass
- Added `IntersectionObserver` active link tracking — active section link turns purple
- Reduced hero heading from `text-5xl` to `text-4xl` base for mobile
- Skills grid changed to `grid-cols-2` on mobile (was single column)

### 2026-02-26 — Design Polish Pass
- Added circular avatar placeholder in hero with gradient ring + glow (replace with `<Image>` when ready)
- Added `ScrollProgress` component — 2px spring-animated purple bar at top of viewport
- Alternating section backgrounds: About + Education use `bg-muted/40` tint
- Hero radial glow strengthened to `color-mix(in oklch, var(--purple-accent) 45%, transparent)`
- About section: removed generic heading, fixed typo ("beleive" → "believe"), added highlight pill row
- Experience cards: added `whileHover={{ y: -4 }}` lift to match project cards
- Footer: replaced `border-t` with gradient fade divider, updated copyright name
- Renamed "Work Experience" tab → "Experience"

### 2026-02-26 — Removed Tabs, Split Layout
- Removed tabbed UI from `projects-work.tsx` entirely
- Projects and Experience are now always-visible, stacked vertically
- Projects grid sits above a gradient divider, Experience timeline sits below
- Section label changed from `"Work"` → `"Portfolio"` (avoids implying school projects are work)
- Each card now uses `<SectionReveal>` with staggered delays for scroll-triggered entrance

---

## Conventions for Future Edits

- **Never hardcode colors** — always use CSS custom properties (`var(--purple-accent)`, `var(--background)`, etc.)
- **Dark mode** is class-based (`.dark` on `<html>`) — use `dark:` Tailwind variants or `useTheme()`
- **New sections** should use `<SectionReveal>`, follow `py-24 px-6` padding, and use `max-w-5xl` container
- **Easing arrays** must be typed as `[number, number, number, number]` for Framer Motion TypeScript compat
- **Client components** using hooks or browser APIs need `"use client"` at the top
- **Shooting stars color** is set via hardcoded RGB in `shooting-stars.tsx` — update if accent color changes
- **Section label pattern:** small `text-sm uppercase tracking-widest text-primary` label, then bold heading below
- **Profile photo swap:** replace the inner `<div>` in `hero.tsx` (~line 70) with `<Image src="/avatar.jpg" ... className="rounded-full object-cover" />`
