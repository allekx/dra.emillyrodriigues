import { NavBack } from "@/components/NavBack";
import { clinic } from "@/data/clinic";
import { routes } from "@/data/routes";
import { servicesPage } from "@/data/services";

export function ServicesHeader() {
  return (
    <header className="pt-8 sm:pt-12">
      <NavBack href={routes.bio}>Voltar à Bio</NavBack>

      <div className="mt-10 max-w-xl sm:mt-14">
        <p className="text-[0.65rem] font-light tracking-[0.16em] text-muted uppercase min-[375px]:text-[0.68rem] min-[375px]:tracking-[0.22em] sm:tracking-[0.28em]">
          {clinic.tagline}
        </p>
        <h1 className="mt-4 text-[1.85rem] leading-[1.1] sm:text-5xl">
          {servicesPage.title}
        </h1>
        <p className="mt-5 max-w-md text-[0.9rem] leading-7 font-light text-taupe min-[375px]:text-[0.975rem]">
          {servicesPage.subtitle}
        </p>
      </div>
    </header>
  );
}
