import Link from "next/link";
import { ServiceMark } from "@/components/bio/Marks";
import { routes } from "@/data/routes";
import { getFeaturedServices } from "@/data/services";

export function ServiceHighlights() {
  const featured = getFeaturedServices();

  return (
    <section aria-labelledby="bio-servicos-titulo">
      <h2
        id="bio-servicos-titulo"
        className="text-center text-[0.68rem] font-light tracking-[0.28em] text-muted uppercase"
      >
        Especialidades
      </h2>

      <ul className="mt-7 grid min-w-0 grid-cols-2 gap-3">
        {featured.map((service) => (
          <li key={service.slug} className="min-w-0">
            <Link
              href={routes.service(service.slug)}
              className="card-interactive group flex min-h-[7.5rem] flex-col items-center justify-center gap-2 rounded-lg border border-border bg-surface px-2 py-4 text-center shadow-soft no-underline min-[375px]:min-h-[7.75rem] min-[375px]:px-3 min-[375px]:py-5 hover:border-gold-soft hover:shadow-lift focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              aria-label={`${service.name}. Saiba mais.`}
            >
              <ServiceMark
                slug={service.slug}
                className="h-7 w-7 text-gold transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] min-[375px]:h-8 min-[375px]:w-8 group-hover:-translate-y-0.5"
              />
              <span className="font-serif text-[0.82rem] leading-snug tracking-[-0.02em] text-ink min-[375px]:text-[0.98rem]">
                {service.name}
              </span>
              <span className="text-[0.58rem] font-medium tracking-[0.12em] text-muted uppercase min-[375px]:text-[0.62rem] min-[375px]:tracking-[0.16em] group-hover:text-ink">
                Saiba mais
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
