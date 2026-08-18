import { ghlConnectOrigins, ghlScriptOrigin } from "@/lib/ghl";

export function buildCsp(nonce: string) {
  const isDev = process.env.NODE_ENV === "development";
  const ghl = ghlScriptOrigin();
  const connect = ghlConnectOrigins();
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
