import { ServiceCard } from "@/components/services/ServiceCard";
import { getServiceGroups } from "@/data/services";

export function ServiceCatalog() {
  const groups = getServiceGroups();

  return (
    <div>
      {groups.length > 1 ? (
        <nav
          aria-label="Categorias de serviços"
          className="mt-12 flex flex-wrap gap-x-6 gap-y-2 sm:mt-14"
        >
          {groups.map((group) => (
            <a
              key={group.category}
              href={`#${group.category}`}
              className="relative pb-1 text-[0.65rem] font-light tracking-[0.16em] text-muted uppercase no-underline min-[375px]:text-[0.68rem] min-[375px]:tracking-[0.22em] after:absolute after:right-0 after:bottom-0 after:left-0 after:h-px after:origin-left after:scale-x-0 after:bg-gold-soft after:transition-transform after:duration-200 hover:text-ink hover:after:scale-x-100"
            >
              {group.label}
            </a>
          ))}
        </nav>
      ) : null}

      <div className="mt-10 flex flex-col gap-14 sm:mt-12 sm:gap-16">
        {groups.map((group, groupIndex) => (
          <section
            key={group.category}
            id={group.category}
            aria-labelledby={`categoria-${group.category}`}
            className="scroll-mt-8"
          >
            <h2
              id={`categoria-${group.category}`}
              className="text-[0.65rem] font-light tracking-[0.16em] text-muted uppercase min-[375px]:text-[0.68rem] sm:tracking-[0.28em]"
            >
              {group.label}
            </h2>

            <ul className="mt-7 grid min-w-0 gap-7 md:grid-cols-2 md:gap-9">
              {group.items.map((service, index) => (
                <li key={service.slug} className="min-w-0">
                  <ServiceCard
                    service={service}
                    priority={groupIndex === 0 && index === 0}
                  />
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
