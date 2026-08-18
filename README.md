# Smart Lawn Pro

Next.js landing site for the Alert Lawn Care → **Smart Lawn Pro** rebrand.

## Stack

- Next.js 16 (App Router) + Tailwind CSS 4
- Vercel-ready

## Setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Env vars (optional, for assessment form email)

| Variable | Purpose |
| --- | --- |
| `RESEND_API_KEY` | Send assessment requests by email |
| `LEAD_TO_EMAIL` | Inbox that receives leads |
| `LEAD_FROM_EMAIL` | Verified Resend from-address |

Without these, the form still validates and shows a success state; **call `936-301-4433` remains the primary CTA**.

## Scripts

- `npm run dev` — local server
- `npm run lint` — ESLint
- `npm run build` — production build
