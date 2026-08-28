import { ImageResponse } from "next/og";
import { clinic } from "@/data/clinic";

export const alt = `${clinic.name} | ${clinic.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#F7F4F0",
          color: "#3A322C",
        }}
      >
        <div
          style={{
            fontSize: 22,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "#8A7E74",
          }}
        >
          {clinic.tagline}
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 72,
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
          }}
        >
          {clinic.name}
        </div>
      </div>
    ),
    { ...size },
  );
}
