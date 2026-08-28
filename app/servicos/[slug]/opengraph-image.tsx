import { ImageResponse } from "next/og";
import { clinic } from "@/data/clinic";
import { getServiceBySlug } from "@/data/services";

export const alt = `${clinic.name}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

type ImageProps = {
  params: Promise<{ slug: string }>;
};

export default async function OpenGraphImage({ params }: ImageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  const title = service?.name ?? clinic.name;

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
          {clinic.name}
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 64,
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
          }}
        >
          {title}
        </div>
      </div>
    ),
    { ...size },
  );
}
