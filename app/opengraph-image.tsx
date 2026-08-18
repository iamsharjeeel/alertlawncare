import { ImageResponse } from "next/og";

export const alt = "Smart Lawn Pro";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#103c2d",
          color: "#f2f1ee",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
        }}
      >
        <div style={{ display: "flex", fontSize: 28, letterSpacing: 8, fontWeight: 500 }}>
          SMART LAWN<span style={{ color: "#d69a48" }}>.PRO</span>
        </div>
        <div
          style={{
            display: "flex",
            maxWidth: 920,
            fontSize: 64,
            lineHeight: 1.05,
            fontWeight: 500,
            letterSpacing: -2,
          }}
        >
          Routine maintenance should not wait for service day.
        </div>
        <div style={{ display: "flex", color: "#d69a48", fontSize: 28 }}>936-301-4433</div>
      </div>
    ),
    { ...size }
  );
}
