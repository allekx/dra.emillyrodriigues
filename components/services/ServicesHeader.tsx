import { NavBack } from "@/components/NavBack";
import { clinic } from "@/data/clinic";
import { routes } from "@/data/routes";
import { services, servicesPage } from "@/data/services";

export function ServicesHeader() {
  return (
    <header className="pt-6 sm:pt-10">
      <NavBack href={routes.bio} className="text-taupe">Voltar à Bio</NavBack>

      <div className="bio-legend mt-7 max-w-xl sm:mt-10">
        <p className="text-[0.62rem] font-medium tracking-[0.18em] text-gold uppercase min-[375px]:text-[0.65rem] sm:tracking-[0.24em]">
          Catálogo · {clinic.tagline}
        </p>
        <h1 className="mt-2.5 text-[1.7rem] leading-[1.1] min-[375px]:text-[1.85rem] sm:text-5xl">
          {servicesPage.title}
        </h1>
        <p className="mt-3 max-w-md text-[0.9rem] leading-6 font-normal text-ink min-[375px]:text-[0.95rem] min-[375px]:leading-7">
          {servicesPage.subtitle}
        </p>
        <p className="mt-3 text-[0.6rem] font-medium tracking-[0.16em] text-taupe uppercase">
          {services.length} cuidados
        </p>
      </div>
    </header>
  );
}
