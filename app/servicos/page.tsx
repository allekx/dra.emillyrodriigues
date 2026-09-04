import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import { ServiceCatalog } from "@/components/services/ServiceCatalog";
import { ServicesCta } from "@/components/services/ServicesCta";
import { ServicesHeader } from "@/components/services/ServicesHeader";
import { routes } from "@/data/routes";
import { servicesPage } from "@/data/services";
import { getServicesListJsonLd, getServicesTitle, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: getServicesTitle(),
  description: servicesPage.subtitle,
  path: routes.services,
});

export default function ServicesPage() {
  return (
    <div className="catalog-page min-h-dvh">
      <div className="bio-stage" aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/clinic/catalogo.jpg"
          alt=""
          className="bio-stage-image catalog-stage-image"
          decoding="async"
          fetchPriority="low"
        />
        <span className="bio-stage-veil catalog-stage-veil" />
      </div>
      <div className="bio-content">
        <JsonLd data={getServicesListJsonLd()} />
        <Container className="flex flex-col pb-4">
          <main>
            <ServicesHeader />
            <ServiceCatalog />
            <Reveal delay={1}>
              <ServicesCta />
            </Reveal>
          </main>
          <Reveal delay={2}>
            <Footer className="mt-10" />
          </Reveal>
        </Container>
      </div>
    </div>
  );
}
