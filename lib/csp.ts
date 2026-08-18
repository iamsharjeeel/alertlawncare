function extraOrigins() {
  const raw = process.env.NEXT_PUBLIC_GHL_CONNECT_ORIGINS || "";
  return raw
    .split(/[\s,]+/)
    .map((item) => item.trim())
    .filter((item) => /^https:\/\/[a-z0-9.-]+$/i.test(item));
}

function scriptOrigin() {
  const src = process.env.NEXT_PUBLIC_GHL_TRACKING_SCRIPT_URL || "";
  try {
    const url = new URL(src);
    if (url.protocol !== "https:") return "";
    return url.origin;
  } catch {
    return "";
  }
}

export function buildCsp(nonce: string) {
  const isDev = process.env.NODE_ENV === "development";
  const ghl = scriptOrigin();
  const connect = Array.from(new Set([ghl, ...extraOrigins()].filter(Boolean)));
  const scriptSrc = [
    "'self'",
    `'nonce-${nonce}'`,
    "'strict-dynamic'",
    isDev ? "'unsafe-eval'" : "",
    ghl,
  ]
    .filter(Boolean)
    .join(" ");

  const directives = [
    "default-src 'self'",
    `script-src ${scriptSrc}`,
    `style-src 'self' 'nonce-${nonce}'`,
    "img-src 'self' blob: data:",
    "font-src 'self'",
    `connect-src 'self'${connect.length ? ` ${connect.join(" ")}` : ""}`,
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'none'",
    "upgrade-insecure-requests",
  ];

  return directives.join("; ");
}
