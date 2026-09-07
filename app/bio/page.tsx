import { BioCta } from "@/components/bio/BioActions";
import { BioIdentity } from "@/components/bio/BioIdentity";
import { ServiceHighlights } from "@/components/bio/ServiceHighlights";
import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import { clinic } from "@/data/clinic";
import { routes } from "@/data/routes";
import { getClinicJsonLd, getSiteTitle, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: getSiteTitle(),
  description: clinic.presentation,
  path: routes.bio,
});

export default function BioPage() {
  return (
    <div className="bio-page min-h-dvh">
      <div className="bio-stage" aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/clinic/ambiente.jpg"
          alt=""
          className="bio-stage-image"
          decoding="async"
          fetchPriority="low"
        />
        <span className="bio-stage-veil" />
      </div>
      <div className="bio-content">
        <JsonLd data={getClinicJsonLd()} />
        <Container size="narrow" className="flex flex-col">
          <main>
            <div className="pt-14 sm:pt-16">
              <BioIdentity />
            </div>

            <Reveal delay={3} className="mt-10">
              <BioCta />
            </Reveal>

            <Reveal delay={4} className="mt-14">
              <ServiceHighlights />
            </Reveal>
          </main>

          <Reveal delay={5}>
            <Footer className="mt-6" />
          </Reveal>
        </Container>
      </div>
    </div>
  );
}
