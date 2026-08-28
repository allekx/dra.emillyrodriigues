import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#F7F4F0",
        }}
      >
        <div
          style={{
            width: 124,
            height: 124,
            display: "flex",
            border: "2px solid #C9B08A",
            borderRadius: 62,
          }}
        />
      </div>
    ),
    { ...size },
  );
}
