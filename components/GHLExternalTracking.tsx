import Script from "next/script";
import { ghlTrackingConfig } from "@/lib/ghl";

type Props = {
  nonce?: string;
};

export function GHLExternalTracking({ nonce }: Props) {
  const config = ghlTrackingConfig();
  if (!config) return null;

  return (
    <Script
      id="ghl-external-tracking"
      src={config.src}
      strategy="afterInteractive"
      nonce={nonce}
      data-tracking-id={config.id}
    />
  );
}
