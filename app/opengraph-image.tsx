import { ImageResponse } from "next/og";
import { clinic } from "@/data/clinic";
import { OgFrame } from "@/lib/og-frame";

export const alt = `${clinic.name} | ${clinic.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <OgFrame kicker={clinic.tagline} title={clinic.name} />,
    { ...size },
  );
}
