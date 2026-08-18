# Handover

## What changed

Precision polish pass on the existing editorial site (not a redesign):

- Hero composition tightened so the headline, offer, CTA, image, and trust line sit in the first desktop viewport
- Trust bar defaults to restrained monochrome and activates forest/amber on hover
- Systems H2 is art-directed as two lines: “Three maintenance jobs.” / “One point of contact.”
- Audience H2 stays one line on large desktops: “Homes and commercial sites.”
- Residential/commercial split and team/testimonial section get tighter rhythm, hairline panels, and restrained row/block hover
- Site-wide micro-interactions (nav, CTAs, FAQ, process, images, phones) at 220–280ms; `prefers-reduced-motion` still disables transitions

Prior: HighLevel External Tracking is live (`https://api.alertlawncare.com/js/external-tracking.js`, ID `tk_a7e73cf9f8df47c9aad3f47eba59e3c4`). Native assessment form still posts to `/api/lead`.

## Brand

- Name: Smart Lawn Pro
- Wordmark: SMART LAWN.PRO
- Domain: https://smartlawn.pro
- Phone: 936-301-4433
- Area: Conroe, Montgomery, Willis and The Woodlands
- Fonts: Poppins (primary, 400/500/600), IBM Plex Sans (editorial/utility, 400/500/600)
- Color tokens: `--slp-ink`, `--slp-forest`, `--slp-forest-deep`, `--slp-amber`, `--slp-paper`

## HighLevel

- Component: `components/GHLExternalTracking.tsx`
- Config: `lib/ghl.ts` (script URL, tracking ID, event origin)
- Loaded once at the end of `app/layout.tsx`
- Env overrides: `NEXT_PUBLIC_GHL_TRACKING_SCRIPT_URL`, `NEXT_PUBLIC_GHL_TRACKING_ID`, `NEXT_PUBLIC_GHL_CONNECT_ORIGINS`
- Form: `smart-lawn-pro-assessment`
- QA: `HIGHLEVEL_TRACKING_QA.md`

## Security

### Security Classification

**Full-stack for `/api/lead`.** The public pages are a marketing site. The assessment endpoint is an application-owned POST handler with validation, honeypot, timing check, in-memory rate limiting, and optional Resend.

Not a database, auth, or admin app.

### Controls Implemented

- HTTPS-ready canonical `https://smartlawn.pro`
- `.env*` ignored; `.env.example` placeholders only
- CSP via `proxy.ts` with per-request nonce, `strict-dynamic`, `object-src 'none'`, `frame-ancestors 'none'`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy` disables camera, microphone, geolocation, payment, usb
- HSTS on Vercel production, without preload
- Server-side field limits and format checks
- Honeypot + minimum fill time (not a substitute for platform bot controls)
- Best-effort in-memory rate limit (5 / 15 min / IP) with HTTP 429
- No CSRF token (anonymous public form, no cookie session)
- No private HighLevel keys in the client
- `noopener noreferrer` not needed in-conversion; no shop/outbound CTAs
- JSON-LD is static business copy, not user input

### External / Platform Controls

- Vercel HTTPS and deployment protection (left off for a public marketing site)
- HighLevel External Tracking, once the owner pastes the real script
- Optional Resend delivery
- In-memory rate limiting is per serverless instance. Platform WAF / Vercel rate limits are the durable control.

### Remaining Security Considerations

- HighLevel `connect-src` already includes `https://backend.leadconnectorhq.com`. Add extra origins only if a later script version calls new hosts.
- Optional Resend must use a verified from-address.
- Source maps follow the Vercel project setting.

This is not a claim that the site is 100% secure.

### Manual Configuration Required

1. Confirm External Tracking events in HighLevel after a production deploy.
2. After a test submission, add any extra HighLevel `connect-src` origins.
3. Optional: `RESEND_API_KEY` and `LEAD_TO_EMAIL`.
4. Attach `smartlawn.pro` in Vercel DNS when ready.
5. 301 `alertlawncare.com` → `smartlawn.pro` only when the owner wants the cutover.

## Deployment

- Build: `npm run build`
- Production domain: `https://smartlawn.pro`
- Current Vercel project: `smart-lawn-pro`

## Files

- Polish: `app/globals.css`, `components/Hero.tsx`, `TrustStrip.tsx`, `SystemsSection.tsx`, `AudienceSplit.tsx`, `Testimonials.tsx`, `Header.tsx`, `Footer.tsx`, `FAQ.tsx`, `ProcessSection.tsx`, `AssessmentSection.tsx`, `AssessmentForm.tsx`, `EditorialStatement.tsx`
- Tracking: `app/layout.tsx`, `components/GHLExternalTracking.tsx`, `lib/ghl.ts`, `lib/csp.ts`, `HIGHLEVEL_TRACKING_QA.md`

Also: `app/`, `components/`, `lib/`, `proxy.ts`, `next.config.ts`
