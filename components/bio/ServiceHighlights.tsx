import Link from "next/link";
import { MediaImage } from "@/components/MediaImage";
import { ServiceMark } from "@/components/bio/Marks";
import { routes } from "@/data/routes";
import { getFeaturedServices } from "@/data/services";

export function ServiceHighlights() {
  const featured = getFeaturedServices();

  return (
    <section aria-labelledby="bio-servicos-titulo">
      <h2
        id="bio-servicos-titulo"
        className="text-center text-[0.68rem] font-medium tracking-[0.28em] text-taupe uppercase"
      >
        Especialidades
      </h2>

      <ul className="mt-7 grid min-w-0 grid-cols-2 gap-2.5 min-[375px]:gap-3">
        {featured.map((service) => (
          <li key={service.slug} className="min-w-0">
            <Link
              href={routes.service(service.slug)}
              className="card-interactive group relative flex aspect-[4/5] min-h-[9.5rem] min-w-0 overflow-hidden rounded-lg shadow-soft no-underline ring-1 ring-border hover:ring-gold-soft hover:shadow-lift focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              aria-label={`${service.name}. Saiba mais.`}
            >
              <MediaImage
                src={service.image}
                alt=""
                fill
                sizes="(max-width: 640px) 48vw, 220px"
                className="media-zoom object-cover"
              />
              <span className="highlight-veil" />
              <span className="relative z-10 mt-auto flex w-full flex-col items-center px-2 pb-3.5 pt-10 text-center min-[375px]:px-3 min-[375px]:pb-4">
                <ServiceMark
                  slug={service.slug}
                  className="h-6 w-6 text-gold-soft drop-shadow-sm transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] min-[375px]:h-7 min-[375px]:w-7 group-hover:-translate-y-0.5"
                />
                <span className="mt-1.5 font-serif text-[0.86rem] leading-snug tracking-[-0.02em] text-ivory min-[375px]:text-[0.98rem]">
                  {service.name}
                </span>
                <span className="mt-1 text-[0.58rem] font-medium tracking-[0.14em] text-gold-soft uppercase min-[375px]:text-[0.62rem]">
                  Saiba mais
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
