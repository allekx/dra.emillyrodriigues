import { BioCta, BioLinks } from "@/components/bio/BioActions";
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
    <div className="min-h-dvh">
      <JsonLd data={getClinicJsonLd()} />
      <Container size="narrow" className="flex flex-col">
        <main>
          <div className="pt-14 sm:pt-16">
            <BioIdentity />
          </div>

          <Reveal delay={1}>
            <p className="mx-auto mt-8 max-w-[20rem] px-1 text-center text-[0.9rem] leading-7 font-light text-taupe min-[375px]:text-[0.9375rem]">
              {clinic.presentation}
            </p>
          </Reveal>

          <Reveal delay={2} className="mt-10">
            <BioCta />
          </Reveal>

          <Reveal delay={3} className="mt-14">
            <ServiceHighlights />
          </Reveal>

          <Reveal delay={4} className="mt-12">
            <BioLinks />
          </Reveal>
        </main>

        <Reveal delay={5}>
          <Footer className="mt-6" />
        </Reveal>
      </Container>
    </div>
  );
}
