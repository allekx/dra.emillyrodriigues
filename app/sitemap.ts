import type { MetadataRoute } from "next";
import { clinic } from "@/data/clinic";
import { routes } from "@/data/routes";
import { services } from "@/data/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = clinic.siteUrl.replace(/\/$/, "");

  return [
    {
      url: `${origin}${routes.bio}`,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${origin}${routes.services}`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...services.map((service) => ({
      url: `${origin}${routes.service(service.slug)}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
