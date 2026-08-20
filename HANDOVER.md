# Handover

## What changed

Locked the homepage to a cinematic-hero / Swiss-editorial system: Archivo display type, scarce amber, varied system-section scale, a dark pull-quote and operating-week band, editorial assessment form, and separate hero/service photographs.

## Brand

- Name: Smart Lawn Pro
- Wordmark: SMART LAWN.PRO
- Domain: https://smartlawn.pro
- Phone: 936-301-4433
- Area: Conroe, Montgomery, Willis and The Woodlands
- Fonts: Archivo (display 600/700/800), IBM Plex Sans (body/utility 400/500/600)
- Color tokens: `--slp-ink`, `--slp-forest`, `--slp-forest-deep`, `--slp-amber`, `--slp-paper`
- Amber use: primary assessment CTAs, form focus/selected/error, wordmark `.PRO`, one hero metadata line

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

- `app/globals.css`, `app/layout.tsx`, `app/thank-you/page.tsx`
- `components/Hero.tsx`, `SystemsSection.tsx`, `EditorialStatement.tsx`, `AssessmentForm.tsx`, `AssessmentSection.tsx`, `Header.tsx`, `Footer.tsx`, `Testimonials.tsx`, `ProcessSection.tsx`, `AudienceSplit.tsx`, `Wordmark.tsx`
- `lib/brand.ts`
- `public/images/hero.jpg`, `public/images/service.jpg`

Also: `app/`, `components/`, `lib/`, `proxy.ts`, `next.config.ts`
