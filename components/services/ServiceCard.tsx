import { MediaImage } from "@/components/MediaImage";
import Link from "next/link";
import { categoryLabels } from "@/data/services";
import { routes } from "@/data/routes";
import type { Service } from "@/data/types";

type ServiceCardProps = {
  service: Service;
  priority?: boolean;
  layout?: "tile" | "editorial";
};

export function ServiceCard({
  service,
  priority = false,
  layout = "tile",
}: ServiceCardProps) {
  const category = categoryLabels[service.category];
  const href = routes.service(service.slug);
  const label = `${service.name}. Saiba mais.`;

  if (layout === "editorial") {
    return (
      <article>
        <Link
          href={href}
          className="card-interactive group grid min-h-[7.75rem] min-w-0 grid-cols-[38%_1fr] overflow-hidden rounded-lg border border-border bg-surface shadow-soft no-underline hover:border-gold-soft hover:shadow-lift focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
          aria-label={label}
        >
          <div className="relative min-h-[7.75rem] overflow-hidden bg-sand">
            <MediaImage
              src={service.image}
              alt={`Visual de ${service.name}`}
              fill
              sizes="(max-width: 640px) 40vw, 280px"
              className="media-zoom object-cover"
              priority={priority}
            />
            <span className="media-veil" />
          </div>

          <div className="flex min-w-0 flex-col justify-center px-3.5 py-3.5 min-[375px]:px-4">
            <p className="text-[0.58rem] font-light tracking-[0.16em] text-gold uppercase min-[375px]:text-[0.62rem]">
              {category}
            </p>
            <h3 className="mt-1.5 font-serif text-[1.15rem] leading-[1.15] tracking-[-0.02em] text-ink min-[375px]:text-[1.28rem]">
              {service.name}
            </h3>
            <p className="mt-2 line-clamp-2 text-[0.78rem] leading-5 font-light text-taupe min-[375px]:text-[0.82rem]">
              {service.shortDescription}
            </p>
          </div>
        </Link>
      </article>
    );
  }

  return (
    <article>
      <Link
        href={href}
        className="card-interactive group block min-w-0 no-underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
        aria-label={label}
      >
        <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-sand ring-1 ring-border group-hover:ring-gold-soft">
          <MediaImage
            src={service.image}
            alt={`Visual de ${service.name}`}
            fill
            sizes="(max-width: 640px) 48vw, (max-width: 1024px) 33vw, 280px"
            className="media-zoom object-cover"
            priority={priority}
          />
          <span className="media-veil" />
        </div>

        <div className="catalog-caption">
          <p className="text-[0.58rem] font-medium tracking-[0.16em] text-gold uppercase min-[375px]:text-[0.6rem]">
            {category}
          </p>
          <h3 className="mt-1 font-serif text-[0.98rem] leading-snug tracking-[-0.02em] text-ink min-[375px]:text-[1.05rem]">
            {service.name}
          </h3>
        </div>
      </Link>
    </article>
  );
}
