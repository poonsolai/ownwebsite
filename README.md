# Poonsolai Karthick — Portfolio

A Next.js portfolio for showcasing projects, skills, learning progress, and contact information.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Checks

```bash
npm run lint
npm run build
```

## Portfolio notes

- The contact form validates its fields and opens a prefilled message in the visitor's email app. The visitor must send the message from that app.
- The uploaded resume is served from `/poonso_resume.pdf`, and the About page links to it.
- Project cards and detail pages use the supplied project catalog in `data/projects.json` and screenshots in `public/projects/`. Repository and live-demo URLs are checked to allow HTTPS links only.
- The site generates Open Graph and Twitter share images and provides an SVG app icon.

## Deployment

The app can be deployed to Vercel by importing its Git repository and using the detected Next.js defaults. Set `NEXT_PUBLIC_SITE_URL` to the canonical public origin for production builds outside Vercel; Vercel's `VERCEL_URL` is used when that setting is absent. Local builds use `http://localhost:3000` for metadata URL resolution.

Before publishing, run the checks above, add verified project links, and confirm the public contact details. Deployment itself requires access to the chosen hosting account and repository.
