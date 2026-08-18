# HighLevel External Tracking QA

## Install

The production script is already wired in `lib/ghl.ts`:

```html
<script
  src="https://api.alertlawncare.com/js/external-tracking.js"
  data-tracking-id="tk_a7e73cf9f8df47c9aad3f47eba59e3c4">
</script>
```

Loaded once from `components/GHLExternalTracking.tsx` with `next/script`.

Env vars can override the defaults. They are public tracking values, not secrets.

```text
NEXT_PUBLIC_GHL_TRACKING_SCRIPT_URL=https://api.alertlawncare.com/js/external-tracking.js
NEXT_PUBLIC_GHL_TRACKING_ID=tk_a7e73cf9f8df47c9aad3f47eba59e3c4
```

Pageviews and form events POST to `https://backend.leadconnectorhq.com/external-tracking/events`. CSP `connect-src` includes that origin plus the script host.

If HighLevel later calls extra HTTPS origins, add them:

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

Confirm a request to `/external-tracking/events` with type `external_script_page_view`, then activity in **Sites → Analytics → External Tracking**.

UTM parameters are not stripped. Internal section links keep the current query string because they are in-page hashes.

## Verify form tracking

Form:

```text
id="smart-lawn-pro-assessment"
name="smart-lawn-pro-assessment"
data-name="smart-lawn-pro-assessment"
```

Native `<form>` in the DOM. HighLevel binds `submit` in the capture phase, so in-page `fetch` handling still reports the entry. Fields include `email`, `full_name`, `phone`, `property_address`, `property_type`, `services_interest`, `notes`. Hidden honeypot and timing fields are ignored by the tracker.

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
