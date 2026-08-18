import Script from "next/script";

type Props = {
  nonce?: string;
};

export function GHLExternalTracking({ nonce }: Props) {
  const src = process.env.NEXT_PUBLIC_GHL_TRACKING_SCRIPT_URL?.trim();
  const id = process.env.NEXT_PUBLIC_GHL_TRACKING_ID?.trim();

  if (!src || !id) return null;
  if (!id.startsWith("tk_")) return null;

  let parsed: URL;
  try {
    parsed = new URL(src);
  } catch {
    return null;
  }
  if (parsed.protocol !== "https:") return null;

  return (
    <Script
      src={src}
      strategy="afterInteractive"
      nonce={nonce}
      data-tracking-id={id}
    />
  );
}
