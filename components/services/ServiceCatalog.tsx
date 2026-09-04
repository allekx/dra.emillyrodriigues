import { ServiceCard } from "@/components/services/ServiceCard";
import { getServiceGroups } from "@/data/services";

export function ServiceCatalog() {
  const groups = getServiceGroups();

  return (
    <div>
      {groups.length > 1 ? (
        <nav
          aria-label="Categorias de serviços"
          className="catalog-chips sticky z-20 -mx-4 min-[375px]:-mx-5 sm:-mx-8 lg:-mx-12 [top:env(safe-area-inset-top,0px)]"
        >
          <div className="catalog-chips-track px-4 min-[375px]:px-5 sm:px-8 lg:px-12">
            {groups.map((group) => (
              <a key={group.category} href={`#${group.category}`} className="catalog-chip">
                {group.label}
                <span className="text-gold-soft" aria-hidden="true">
                  {group.items.length}
                </span>
              </a>
            ))}
          </div>
        </nav>
      ) : null}

      <div className="mt-7 flex flex-col gap-9 sm:mt-9 sm:gap-12">
        {groups.map((group, groupIndex) => {
          const editorial = group.items.length === 1;

          return (
            <section
              key={group.category}
              id={group.category}
              aria-labelledby={`categoria-${group.category}`}
              className="scroll-mt-20"
            >
              <div className="flex items-end justify-between gap-3">
                <h2
                  id={`categoria-${group.category}`}
                  className="text-[0.62rem] font-medium tracking-[0.18em] text-taupe uppercase min-[375px]:text-[0.65rem] sm:tracking-[0.24em]"
                >
                  {group.label}
                </h2>
                <span
                  className="h-px min-w-8 flex-1 bg-border"
                  aria-hidden="true"
                />
              </div>

              <ul
                className={
                  editorial
                    ? "mt-4"
                    : "mt-4 grid min-w-0 grid-cols-2 gap-x-2.5 gap-y-5 min-[375px]:gap-x-3 min-[375px]:gap-y-6 sm:grid-cols-3 sm:gap-x-4"
                }
              >
                {group.items.map((service, index) => (
                  <li key={service.slug} className="min-w-0">
                    <ServiceCard
                      service={service}
                      layout={editorial ? "editorial" : "tile"}
                      priority={groupIndex === 0 && index === 0}
                    />
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>
    </div>
  );
}
