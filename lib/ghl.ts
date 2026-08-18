export const GHL_DEFAULT_SCRIPT_URL =
  "https://api.alertlawncare.com/js/external-tracking.js";
export const GHL_DEFAULT_TRACKING_ID = "tk_a7e73cf9f8df47c9aad3f47eba59e3c4";
export const GHL_EVENT_ORIGIN = "https://backend.leadconnectorhq.com";
export const GHL_FORM_NAME = "smart-lawn-pro-assessment";

function httpsOrigin(value: string) {
  try {
    const url = new URL(value);
    if (url.protocol !== "https:") return "";
    return url.origin;
  } catch {
    return "";
  }
}

export function ghlTrackingScriptUrl() {
  return process.env.NEXT_PUBLIC_GHL_TRACKING_SCRIPT_URL?.trim() || GHL_DEFAULT_SCRIPT_URL;
}

export function ghlTrackingId() {
  return process.env.NEXT_PUBLIC_GHL_TRACKING_ID?.trim() || GHL_DEFAULT_TRACKING_ID;
}

export function ghlScriptOrigin() {
  return httpsOrigin(ghlTrackingScriptUrl());
}

export function ghlConnectOrigins() {
  const raw = process.env.NEXT_PUBLIC_GHL_CONNECT_ORIGINS || "";
  const extra = raw
    .split(/[\s,]+/)
    .map((item) => item.trim())
    .filter((item) => /^https:\/\/[a-z0-9.-]+$/i.test(item));
  return Array.from(
    new Set([ghlScriptOrigin(), GHL_EVENT_ORIGIN, ...extra].filter(Boolean))
  );
}

export function ghlTrackingConfig() {
  const src = ghlTrackingScriptUrl();
  const id = ghlTrackingId();
  if (!src || !id.startsWith("tk_")) return null;
  if (!httpsOrigin(src)) return null;
  return { src, id };
}
