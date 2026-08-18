# Handover

## What changed

Rebuilt the Smart Lawn Pro site as an editorial property-maintenance page: lawn, pool and floor systems, residential and commercial, free on-site assessment. Replaced the previous flyer-clone layout and the live Alert Lawn Care lawn-only narrative.

## Brand

- Name: Smart Lawn Pro
- Wordmark: SMART LAWN.PRO
- Domain: https://smartlawn.pro
- Phone: 936-301-4433
- Area: Conroe, Montgomery, Willis and The Woodlands
- Fonts: Space Grotesk (display), Inter (body)
- Color tokens: `--slp-ink`, `--slp-forest`, `--slp-forest-deep`, `--slp-amber`, `--slp-paper`

## HighLevel

- Component: `components/GHLExternalTracking.tsx`
- Loaded once at the end of `app/layout.tsx`
- Env: `NEXT_PUBLIC_GHL_TRACKING_SCRIPT_URL`, `NEXT_PUBLIC_GHL_TRACKING_ID`
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

- HighLevel `connect-src` hosts cannot be known until the real script is installed and tested.
- Optional Resend must use a verified from-address.
- Source maps follow the Vercel project setting.

This is not a claim that the site is 100% secure.

### Manual Configuration Required

1. Paste HighLevel External Tracking env vars.
2. After a test submission, add any extra HighLevel `connect-src` origins.
3. Optional: `RESEND_API_KEY` and `LEAD_TO_EMAIL`.
4. Attach `smartlawn.pro` in Vercel DNS when ready.
5. 301 `alertlawncare.com` → `smartlawn.pro` only when the owner wants the cutover.

## Deployment

- Build: `npm run build`
- Production domain: `https://smartlawn.pro`
- Current Vercel project: `smart-lawn-pro`

## Files

- `app/`, `components/`, `lib/`, `proxy.ts`, `next.config.ts`
- `HIGHLEVEL_TRACKING_QA.md`, `README.md`, `CHANGELOG.md`
