"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { MediaImage } from "@/components/MediaImage";
import { ServiceMark } from "@/components/bio/Marks";
import { routes } from "@/data/routes";
import { getFeaturedServices } from "@/data/services";

export function ServiceHighlights() {
  const featured = getFeaturedServices();
  const trackRef = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState(0);

  const syncActive = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const slides = Array.from(track.children) as HTMLElement[];
    if (slides.length === 0) return;

    const center = track.scrollLeft + track.clientWidth / 2;
    let nearest = 0;
    let nearestDistance = Number.POSITIVE_INFINITY;

    slides.forEach((slide, index) => {
      const slideCenter = slide.offsetLeft + slide.offsetWidth / 2;
      const distance = Math.abs(slideCenter - center);
      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearest = index;
      }
    });

    setActive(nearest);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    syncActive();
    track.addEventListener("scroll", syncActive, { passive: true });
    window.addEventListener("resize", syncActive);

    return () => {
      track.removeEventListener("scroll", syncActive);
      window.removeEventListener("resize", syncActive);
    };
  }, [syncActive]);

  function goTo(index: number) {
    const track = trackRef.current;
    const slide = track?.children[index] as HTMLElement | undefined;
    if (!track || !slide) return;

    track.scrollTo({
      left: slide.offsetLeft - (track.clientWidth - slide.offsetWidth) / 2,
      behavior: "smooth",
    });
  }

  return (
    <section aria-labelledby="bio-servicos-titulo" className="highlights">
      <h2
        id="bio-servicos-titulo"
        className="text-center text-[0.68rem] font-medium tracking-[0.28em] text-taupe uppercase"
      >
        Especialidades
      </h2>

      <div className="highlights-shell mt-7">
        <ul
          ref={trackRef}
          className="highlights-track"
          aria-label="Carrossel de especialidades"
        >
          {featured.map((service, index) => (
            <li key={service.slug} className="highlights-slide">
              <Link
                href={routes.service(service.slug)}
                className="card-interactive group relative flex aspect-[4/5] h-full min-h-[17rem] w-full overflow-hidden rounded-lg shadow-soft no-underline ring-1 ring-border hover:ring-gold-soft hover:shadow-lift focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                aria-label={`${service.name}. Saiba mais.`}
                aria-current={active === index ? "true" : undefined}
              >
                <MediaImage
                  src={service.image}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 78vw, 280px"
                  className="media-zoom object-cover"
                  priority={index === 0}
                />
                <span className="highlight-veil" />
                <span className="relative z-10 mt-auto flex w-full flex-col items-center px-3 pb-4 pt-12 text-center">
                  <ServiceMark
                    slug={service.slug}
                    className="h-7 w-7 text-gold-soft drop-shadow-sm transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-0.5"
                  />
                  <span className="mt-2 font-serif text-[1.05rem] leading-snug tracking-[-0.02em] text-ivory">
                    {service.name}
                  </span>
                  <span className="mt-1.5 text-[0.6rem] font-medium tracking-[0.14em] text-gold-soft uppercase">
                    Saiba mais
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div
        className="highlights-dots"
        role="tablist"
        aria-label="Navegação do carrossel"
      >
        {featured.map((service, index) => (
          <button
            key={service.slug}
            type="button"
            role="tab"
            aria-selected={active === index}
            aria-label={`Ir para ${service.name}`}
            className={
              active === index
                ? "highlights-dot highlights-dot-active"
                : "highlights-dot"
            }
            onClick={() => goTo(index)}
          />
        ))}
      </div>
    </section>
  );
}
