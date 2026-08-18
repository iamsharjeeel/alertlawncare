# Handover

## What changed

- Initialized a Next.js App Router site in the empty `alertlawncare` repo.
- Rebranded public identity from Alert Lawn Care to **Smart Lawn Pro** using flyer copy, layout, and palette (charcoal / orange-gold / forest green).
- Landing page covers lawn, pool, and floor bots; residential vs commercial; veteran / family / fully-managed badges; assessment form + phone CTA.

## Why

The live Alert Lawn Care robotic page is lawn-only. The new brand is a three-robot, one-vendor maintenance company (`SmartLawn.Pro`).

## Files touched

- `app/` — layout, homepage, lead API, sitemap/robots, icon
- `components/` — logo, assessment form
- `lib/brand.ts` — copy and contact constants
- `public/images/` — lawn, pool, floor photography
- `README.md`, `HANDOVER.md`, `CHANGELOG.md`, `.env.example`

## Pending

- Point production domain to `smartlawn.pro` when DNS is ready.
- Add `RESEND_API_KEY` + `LEAD_TO_EMAIL` in Vercel so form submissions email the team.
- Replace stock robot photos with owned/unbranded photography if manufacturer logos are a concern.
- Legal pages (privacy / terms) if needed before ads.
- 301s from `alertlawncare.com` / `alertlawns.com` after cutover.
