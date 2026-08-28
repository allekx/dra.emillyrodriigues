import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { ServiceCta } from "@/components/service-page/ServiceCta";
import { ServiceDetails } from "@/components/service-page/ServiceDetails";
import { ServiceFaqList } from "@/components/service-page/ServiceFaqList";
import { ServiceHero } from "@/components/service-page/ServiceHero";
import { getServiceBySlug, getServiceSlugs } from "@/data/services";
import { routes } from "@/data/routes";
import { getServiceJsonLd, getServiceTitle, pageMetadata } from "@/lib/seo";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Serviço",
      robots: { index: false, follow: false },
    };
  }

  return pageMetadata({
    title: getServiceTitle(service.name),
    description: service.shortDescription,
    path: routes.service(service.slug),
  });
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-dvh">
      <JsonLd data={getServiceJsonLd(service)} />
      <Container className="flex flex-col pb-4">
        <main>
          <ServiceHero service={service} />
          <ServiceDetails service={service} />
          <div className="mt-4">
            <ServiceFaqList items={service.faq} />
          </div>
          <div className="reveal reveal-delay-1">
            <ServiceCta name={service.name} />
          </div>
        </main>
        <Footer className="reveal reveal-delay-2 mt-10" />
      </Container>
    </div>
  );
}
