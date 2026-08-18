# Smart Lawn Pro

Editorial marketing site for Smart Lawn Pro (`smartlawn.pro`).

Automated property maintenance: lawn, pool and floor systems for residential and commercial properties.

## Setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Scripts

- `npm run dev`
- `npm run lint`
- `npm run build`
- `npm start`

## Environment

See `.env.example`.

| Variable | Public? | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_GHL_TRACKING_SCRIPT_URL` | Yes | Exact HighLevel External Tracking script URL |
| `NEXT_PUBLIC_GHL_TRACKING_ID` | Yes | Exact `tk_...` ID from HighLevel. Do not invent one. |
| `NEXT_PUBLIC_GHL_CONNECT_ORIGINS` | Yes | Extra `https://` origins to allow in CSP `connect-src` after testing the real script |
| `RESEND_API_KEY` | No | Optional email backup for assessment requests |
| `LEAD_TO_EMAIL` | No | Inbox for optional Resend backup |
| `LEAD_FROM_EMAIL` | No | Verified Resend from-address |

Without HighLevel env values, the tracking script is not loaded. The native form still posts to `/api/lead`.

## Production

- Domain: `https://smartlawn.pro`
- Build: `npm run build`
- Do not 301 `alertlawncare.com` until the owner is ready to cut over.
