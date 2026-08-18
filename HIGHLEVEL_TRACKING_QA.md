# HighLevel External Tracking QA

## Install

1. Open HighLevel.
2. Go to **Settings → External Tracking**.
3. Copy the exact script. Do not change the `tk_...` tracking ID.
4. Set these Vercel env vars (Production + Preview):

```text
NEXT_PUBLIC_GHL_TRACKING_SCRIPT_URL=https://link.example.com/js/external-tracking.js
NEXT_PUBLIC_GHL_TRACKING_ID=tk_paste_the_real_id_here
```

Replace both values with the copied script. Do not invent an ID.

5. Deploy `smartlawn.pro`.
6. Submit a test lead, then check the browser network panel. If HighLevel calls extra HTTPS origins, add them:

```text
NEXT_PUBLIC_GHL_CONNECT_ORIGINS=https://allowed-host.example
```

Space-separated. Only `https://` origins are accepted.

The site CSP uses a per-request nonce plus `strict-dynamic`, so the HighLevel script can load its own children. `connect-src` still has to list the hosts the script talks to.

## Verify page tracking

Visit:

```text
https://smartlawn.pro/?utm_source=meta&utm_medium=paid_social&utm_campaign=tracking_test
```

Confirm activity in **Sites → Analytics → External Tracking**.

UTM parameters are not stripped. Internal section links keep the current query string because they are in-page hashes.

## Verify form tracking

Form:

```text
id="smart-lawn-pro-assessment"
name="smart-lawn-pro-assessment"
```

Native `<form>` in the DOM. Fields include `email`, `full_name`, `phone`, `property_address`, `property_type`, `services_interest`, `notes`.

Submit a real test lead.

Check **Sites → Forms → Submissions → External Forms**:

- form detected
- contact created or updated
- email mapped
- phone mapped
- form name recognizable
- page URL correct
- UTM attribution present

## Workflow filter

Domain: `smartlawn.pro`

External form: `smart-lawn-pro-assessment`

Do not create client workflows from this repository.
