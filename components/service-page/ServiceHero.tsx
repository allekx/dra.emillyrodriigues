import { MediaImage } from "@/components/MediaImage";
import { Button } from "@/components/Button";
import { NavBack } from "@/components/NavBack";
import { WhatsAppMark } from "@/components/bio/Marks";
import { getServiceWhatsAppHref } from "@/data/clinic";
import { routes } from "@/data/routes";
import {
  categoryLabels,
  servicePageCopy,
} from "@/data/services";
import type { Service } from "@/data/types";

type ServiceHeroProps = {
  service: Service;
};

export function ServiceHero({ service }: ServiceHeroProps) {
  const whatsappHref = getServiceWhatsAppHref(service.name);

  return (
    <header className="pt-8 sm:pt-12">
      <NavBack href={routes.services}>Voltar para serviços</NavBack>

      <p className="mt-10 text-[0.65rem] font-light tracking-[0.18em] text-gold uppercase min-[375px]:text-[0.68rem] min-[375px]:tracking-[0.24em] sm:mt-14 sm:tracking-[0.28em]">
        {categoryLabels[service.category]}
      </p>
      <h1 className="mt-4 max-w-xl text-[1.85rem] leading-[1.12] sm:text-5xl lg:text-[3.35rem]">
        {service.name}
      </h1>

      <div className="mt-8 grid min-w-0 items-start gap-8 md:mt-10 md:grid-cols-2 md:items-center md:gap-10 lg:gap-14">
        <div className="group relative order-1 aspect-[4/5] min-w-0 overflow-hidden rounded-lg bg-sand shadow-soft min-[375px]:aspect-[3/4] md:order-2">
          <MediaImage
            src={service.image}
            alt={`Imagem de ${service.name}`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="media-zoom object-cover"
            priority
          />
          <span className="media-veil" />
        </div>

        <div className="order-2 min-w-0 md:order-1">
          <p className="max-w-md text-[0.9rem] leading-7 font-light text-taupe min-[375px]:text-[0.975rem]">
            {service.shortDescription}
          </p>
          <div className="mt-8">
            <Button
              href={whatsappHref}
              className="min-h-14 w-full max-w-full gap-2.5 px-4 tracking-[0.06em] whitespace-normal sm:px-5 sm:tracking-[0.08em] lg:w-auto"
              aria-label={servicePageCopy.interestCta}
            >
              <WhatsAppMark className="h-4 w-4 shrink-0" />
              {servicePageCopy.interestCta}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
