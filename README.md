# REBIRTH — Premium Website

Production-ready Next.js site for **REBIRTH** (Discipline. Purpose. Power.).

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm start
```

## Deploy (Vercel)

1. Push this repo to GitHub or GitLab.
2. Import the project in Vercel (framework: Next.js).
3. Set your custom domain.
4. Update `baseUrl` in `data/seo.js`.

## Project structure

| Path | Purpose |
|------|---------|
| `app/` | Routes, layout, global CSS |
| `components/sections/` | Homepage & page sections |
| `components/ui/` | Buttons, media, motion primitives |
| `data/site.js` | **Edit copy**: nav, services, process, socials, email |
| `data/work.js` | **Edit portfolio** projects |
| `data/media.js` | **Edit media** grid items |
| `data/seo.js` | Titles, descriptions, OG image paths |
| `lib/assets.js` | **Media path helpers** |
| `lib/motion.js` | Shared animation easing |
| `public/rebirth/` | **Your brand files** (see below) |

## Add your media

Drop files into `public/rebirth/`:

```
public/rebirth/
  logo.png
  favicon.png
  photos/          ← hero-poster.jpg, full-res stills
  thumbnails/      ← portfolio-1.jpg, portfolio-2.jpg, portfolio-3.jpg
  videos/          ← hero-bg.mp4, reel previews
  media/           ← BTS, education, mixed content
```

See README files inside each folder. Missing images show a premium gradient fallback automatically.

## Edit content

- **Brand & nav**: `data/site.js`
- **Portfolio**: `data/work.js` (uses `lib/assets.js` paths)
- **Media page**: `data/media.js`
- **SEO / domain**: `data/seo.js`

## Tech stack

- Next.js (App Router)
- React
- Tailwind CSS
- Framer Motion (hero reveal, scroll reveals, hovers)
- Google Fonts via `next/font` (Space Grotesk + DM Sans)

## License

Private — REBIRTH brand assets and copy.
