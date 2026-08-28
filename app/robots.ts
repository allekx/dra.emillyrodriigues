import type { MetadataRoute } from "next";
import { clinic } from "@/data/clinic";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${clinic.siteUrl.replace(/\/$/, "")}/sitemap.xml`,
  };
}
