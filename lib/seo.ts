import type { Metadata } from "next";
import { clinic } from "@/data/clinic";
import { routes } from "@/data/routes";
import { categoryLabels, services } from "@/data/services";
import type { Service } from "@/data/types";

export function absoluteUrl(path: string) {
  const base = clinic.siteUrl.replace(/\/$/, "");
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}`;
}

export function getOfficialLocality() {
  if (!clinic.address.confirmed || !clinic.address.city) {
    return undefined;
  }

  return [clinic.address.city, clinic.address.state]
    .filter(Boolean)
    .join(", ");
}

export function buildTitle(parts: Array<string | undefined>) {
  return parts.filter(Boolean).join(" | ");
}

export function getSiteTitle() {
  return buildTitle([clinic.name, clinic.tagline, getOfficialLocality()]);
}

export function getServicesTitle() {
  return buildTitle(["Nossos Serviços", clinic.name, getOfficialLocality()]);
}

export function getServiceTitle(name: string) {
  return buildTitle([name, clinic.name, getOfficialLocality()]);
}

function schemaImage(path: string) {
  if (!path || path.endsWith(".svg")) {
    return undefined;
  }

  return absoluteUrl(path);
}

function hasOfficialPhone() {
  const digits = clinic.contact.whatsapp.replace(/\D/g, "");
  return digits.length >= 12 && !/^55[0]+$/.test(digits);
}

export function pageMetadata({
  title,
  description,
  path,
  image,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
}): Metadata {
  const url = path;

  return {
    title: {
      absolute: title,
    },
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: "pt_BR",
      url,
      siteName: clinic.name,
      title,
      description,
      ...(image
        ? {
            images: [{ url: image, alt: title }],
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(image ? { images: [image] } : {}),
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export function getClinicJsonLd() {
  const locality = getOfficialLocality();

  return {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: clinic.name,
    description: clinic.description,
    url: absoluteUrl(routes.bio),
    ...(schemaImage(clinic.photo)
      ? { image: schemaImage(clinic.photo) }
      : schemaImage(clinic.logo)
        ? { image: schemaImage(clinic.logo) }
        : {}),
    ...(clinic.contact.instagramConfirmed
      ? { sameAs: [clinic.contact.instagramUrl] }
      : {}),
    ...(hasOfficialPhone()
      ? { telephone: `+${clinic.contact.whatsapp.replace(/\D/g, "")}` }
      : {}),
    ...(clinic.address.confirmed && locality
      ? {
          address: {
            "@type": "PostalAddress",
            streetAddress: clinic.address.street || undefined,
            addressLocality: clinic.address.city || undefined,
            addressRegion: clinic.address.state || undefined,
            postalCode: clinic.address.zip || undefined,
            addressCountry: "BR",
          },
        }
      : {}),
  };
}

export function getServicesListJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Nossos Serviços",
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: service.name,
      url: absoluteUrl(routes.service(service.slug)),
    })),
  };
}

export function getServiceJsonLd(service: Service) {
  const pageUrl = absoluteUrl(routes.service(service.slug));
  const graph: object[] = [
    {
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: service.name,
      description: service.shortDescription || service.description,
      url: pageUrl,
      ...(schemaImage(service.image) ? { image: schemaImage(service.image) } : {}),
      category: categoryLabels[service.category],
      provider: {
        "@type": "BeautySalon",
        name: clinic.name,
        url: absoluteUrl(routes.bio),
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: clinic.name,
          item: absoluteUrl(routes.bio),
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Serviços",
          item: absoluteUrl(routes.services),
        },
        {
          "@type": "ListItem",
          position: 3,
          name: service.name,
          item: pageUrl,
        },
      ],
    },
  ];

  if (service.faq.length > 0) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: service.faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}
