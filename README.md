# Collier Row Dental Practice — Concept Website (Next.js)

> **This is a concept design.** It is an independent redesign exercise and is **not** the official website of Collier Row Dental Practice. The practice's real website is [www.collierrowdentist.co.uk](https://www.collierrowdentist.co.uk/). Practice details shown here (address, phone, opening hours, NHS prices, team) are reproduced from the original site purely to make the concept realistic. This build is marked `noindex`, and the enquiry form sends nothing.

A cinematic, dark-first redesign of a family dental practice website, rebuilt as a modern **Next.js + TypeScript** app. The visual design (every colour, font, animation and layout) is unchanged from the original concept. The work in this repo is the engineering underneath it.

---

## Interested in a website for your business?

If you'd like a website revamp, or a new website built for your company, get in touch:

- **Email:** [yameenmunir05@gmail.com](mailto:yameenmunir05@gmail.com)
- **Website:** [yameenmunir.com](https://yameenmunir.com)

---

## Tech stack

| Layer | Choice |
| --- | --- |
| Framework | [Next.js 16](https://nextjs.org/) (App Router, Turbopack) |
| UI | React 19 |
| Language | TypeScript (strict) |
| Styling | The original hand-written CSS, kept as-is in `src/app/globals.css` |
| Fonts | Newsreader, Hanken Grotesk, DM Mono (Google Fonts, same as the original) |
| Rendering | Fully static: all 15 routes are prerendered at build time |

**Why this stack:** the site is content-led and SEO-sensitive, so static prerendering gives fast first paint with no server to run. App Router layouts remove the header/footer duplicated across 15 HTML files. TypeScript and React make the interactive parts (status, slideshow, forms) maintainable. The design CSS stays untouched, so nothing about the look changes.

## Getting started

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev        # http://localhost:3000
```

```bash
npm run build      # production build (static output for every route)
npm start          # serve the production build
npm run typecheck  # tsc --noEmit
```

## Project structure

```
.
├── public/img/                  Photography (.webp) and logo/favicon SVGs
├── src/
│   ├── app/
│   │   ├── layout.tsx           Root layout: fonts, theme bootstrap, header, footer
│   │   ├── globals.css          The original site stylesheet, unchanged
│   │   ├── page.tsx             Home
│   │   ├── not-found.tsx        404
│   │   └── <route>/page.tsx     treatments, orthodontics, team, prices, referrals,
│   │                            patient-information, contact, privacy, root-canal,
│   │                            treatment-crowns / -dentures / -extractions / -implants
│   ├── components/
│   │   ├── SiteHeader.tsx       Header, nav and mobile menu drawer
│   │   ├── SiteFooter.tsx       Footer
│   │   ├── FloatingActions.tsx  Back-to-top button and mobile quick-contact bar
│   │   ├── NavLink.tsx          Nav link that marks the current section
│   │   ├── SiteBehavior.tsx     Mounts the shared interactions (client component)
│   │   └── JsonLd.tsx           schema.org structured data
│   ├── lib/
│   │   ├── hours.ts             Opening hours and closure dates (typed)
│   │   └── site-behavior.ts     Typed port of the original site.js
│   └── types/css.d.ts           Allows CSS custom properties in inline styles
└── original-static-site/        The untouched original static HTML/CSS/JS, for reference
```

## What changed, and what didn't

**Unchanged (by design):** the stylesheet (byte-identical to the original `site.css`), all copy, imagery, layout, typography, colours, motion, the day/night theme, and every interaction.

**Changed:**

- 15 static HTML pages became React routes. Header, drawer, footer and floating actions are shared components instead of being copy-pasted per page.
- Pages link to clean URLs (`/treatments`) instead of `treatments.html`, with client-side navigation between them.
- Per-page `<title>`, description and Open Graph tags use the Next.js Metadata API; JSON-LD (Dentist, breadcrumbs, FAQ) is preserved.
- `site.js` became a typed module (`src/lib/site-behavior.ts`). It re-wires itself after each client-side navigation, and the preview-only in-frame navigation code was dropped because Next.js handles routing natively.
- Opening hours moved from an embedded JSON `<script>` to `src/lib/hours.ts`. To mark a bank holiday as closed, add its date (`"2026-12-25"`) to `closures` there.

**How the conversion was verified:** the rendered `<main>` of all 15 pages and the header were compared with the original HTML after normalising attribute order and whitespace, and they match exactly. The two files differ only by the concept-design credit added to the footer. The home page was screenshot-compared against the original, and the interactions (theme toggle, menu drawer, hero slideshow, FAQ, team filter, form validation, client navigation, 404) were exercised in a real browser with no console or hydration errors.

## Notes and known limitations

- **Concept only.** `robots` is set to `noindex, nofollow` in `src/app/layout.tsx`, and canonical tags pointing at the real practice site were removed. Remove the `robots` entry only if this is ever adapted into a real site with the practice's permission.
- **Enquiry form** validates in the browser and shows a "concept build" message. Nothing is sent. A real deployment needs a server action or API route with server-side validation, spam protection and rate limiting.
- **Images** use plain `<img>` tags rather than `next/image`, deliberately: the CSS and the parallax effect position and transform these elements directly, and the files are already optimised `.webp`. Swapping to `next/image` is possible but would need testing against the visual design.
- **Theme:** follows the visitor's OS setting until they use the toggle; the choice is remembered in `localStorage`.
- Set `NEXT_PUBLIC_SITE_URL` when deploying so Open Graph image URLs resolve to your domain.

## Credits

Original practice, content and branding belong to Collier Row Dental Practice. Concept redesign and Next.js build by [Yameen Munir](https://yameenmunir.com) — yameenmunir05@gmail.com.
