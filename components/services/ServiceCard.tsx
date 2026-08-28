import { MediaImage } from "@/components/MediaImage";
import Link from "next/link";
import { categoryLabels } from "@/data/services";
import { routes } from "@/data/routes";
import type { Service } from "@/data/types";

type ServiceCardProps = {
  service: Service;
  priority?: boolean;
};

export function ServiceCard({ service, priority = false }: ServiceCardProps) {
  return (
    <article>
      <Link
        href={routes.service(service.slug)}
        className="card-interactive group block min-w-0 overflow-hidden rounded-lg border border-border bg-surface shadow-soft no-underline hover:border-gold-soft hover:shadow-lift focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
        aria-label={`${service.name}. Saiba mais.`}
      >
        <div className="relative aspect-[4/5] overflow-hidden bg-sand min-[375px]:aspect-[3/4]">
          <MediaImage
            src={service.image}
            alt={`Visual de ${service.name}`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="media-zoom object-cover"
            priority={priority}
          />
          <span className="media-veil" />
        </div>

        <div className="px-5 pt-6 pb-7 sm:px-8 sm:pt-7 sm:pb-8">
          <p className="text-[0.62rem] font-light tracking-[0.18em] text-gold uppercase min-[375px]:text-[0.65rem] sm:tracking-[0.26em]">
            {categoryLabels[service.category]}
          </p>
          <h3 className="mt-3.5 font-serif text-[1.45rem] leading-[1.15] tracking-[-0.02em] text-ink min-[375px]:text-[1.7rem]">
            {service.name}
          </h3>
          <p className="mt-3.5 text-sm leading-6 font-light text-taupe">
            {service.shortDescription}
          </p>
          <span className="mt-7 inline-flex min-h-12 items-center border-b border-gold-soft text-[0.68rem] font-medium tracking-[0.14em] text-ink uppercase min-[375px]:text-[0.7rem] sm:tracking-[0.18em] group-hover:border-gold">
            Saiba mais
          </span>
        </div>
      </Link>
    </article>
  );
}
