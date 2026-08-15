import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0a0a0b",
          color: "#f5f5f2",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 40, fontWeight: 700 }}>
          {siteConfig.shortName}
          <span style={{ color: "#cdff4d" }}>.</span>
        </div>
        <div style={{ display: "flex", marginTop: 32, fontSize: 60, fontWeight: 800, maxWidth: 980, lineHeight: 1.1 }}>
          We create digital work that helps your business stand out.
        </div>
        <div style={{ display: "flex", marginTop: 28, fontSize: 28, color: "#9c9c96", maxWidth: 900 }}>
          {siteConfig.description}
        </div>
      </div>
    ),
    { ...size }
  );
}
