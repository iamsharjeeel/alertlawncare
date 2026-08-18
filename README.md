# Smart Lawn Pro

Editorial marketing site for Smart Lawn Pro (`smartlawn.pro`).

Automated property maintenance: lawn, pool and floor systems for residential and commercial properties.

Typography: Poppins (brand, headings, body, forms) and IBM Plex Sans (navigation, CTAs, labels, metadata). Loaded with `next/font/google`.

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
| `NEXT_PUBLIC_GHL_TRACKING_SCRIPT_URL` | Yes | Override HighLevel External Tracking script URL. Default is the live `api.alertlawncare.com` script. |
| `NEXT_PUBLIC_GHL_TRACKING_ID` | Yes | Override `tk_...` tracking ID. Default is the live HighLevel ID. |
| `NEXT_PUBLIC_GHL_CONNECT_ORIGINS` | Yes | Extra `https://` origins to allow in CSP `connect-src` if HighLevel adds hosts |
| `RESEND_API_KEY` | No | Optional email backup for assessment requests |
| `LEAD_TO_EMAIL` | No | Inbox for optional Resend backup |
| `LEAD_FROM_EMAIL` | No | Verified Resend from-address |

HighLevel External Tracking loads by default. The native form still posts to `/api/lead`.

## Production

- Domain: `https://smartlawn.pro`
- Build: `npm run build`
- Do not 301 `alertlawncare.com` until the owner is ready to cut over.
