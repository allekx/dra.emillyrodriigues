"use client";

import { useDeferredValue, useMemo, useState } from "react";
import { ServiceCard } from "@/components/services/ServiceCard";
import {
  categoryLabels,
  getServiceGroups,
  kindLabels,
  services,
} from "@/data/services";
import type { Service } from "@/data/types";

function normalize(value: string) {
  return value
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .toLowerCase()
    .trim();
}

function matchesQuery(service: Service, query: string) {
  if (!query) return true;

  const haystack = normalize(
    [
      service.name,
      service.shortDescription,
      kindLabels[service.kind],
      categoryLabels[service.category],
      service.slug.replace(/-/g, " "),
    ].join(" "),
  );

  return query
    .split(/\s+/)
    .filter(Boolean)
    .every((token) => haystack.includes(token));
}

function SearchMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <circle
        cx="11"
        cy="11"
        r="6.25"
        stroke="currentColor"
        strokeWidth="1.25"
      />
      <path
        d="M16.2 16.2L20 20"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ServiceCatalog() {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);
  const normalizedQuery = normalize(deferredQuery);

  const allGroups = useMemo(() => getServiceGroups(), []);

  const groups = useMemo(() => {
    if (!normalizedQuery) return allGroups;

    return allGroups
      .map((group) => ({
        ...group,
        items: group.items.filter((service) =>
          matchesQuery(service, normalizedQuery),
        ),
      }))
      .filter((group) => group.items.length > 0);
  }, [allGroups, normalizedQuery]);

  const resultCount = groups.reduce((total, group) => total + group.items.length, 0);
  const isFiltering = normalizedQuery.length > 0;

  return (
    <div>
      <div className="catalog-search mt-8">
        <label htmlFor="catalog-search-input" className="sr-only">
          Buscar planos e procedimentos
        </label>
        <div className="catalog-search-field">
          <SearchMark className="catalog-search-icon" />
          <input
            id="catalog-search-input"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Buscar plano ou procedimento"
            autoComplete="off"
            enterKeyHint="search"
            className="catalog-search-input"
          />
          {query ? (
            <button
              type="button"
              className="catalog-search-clear"
              onClick={() => setQuery("")}
              aria-label="Limpar busca"
            >
              Limpar
            </button>
          ) : null}
        </div>
        <p className="catalog-search-meta" aria-live="polite">
          {isFiltering
            ? `${resultCount} resultado${resultCount === 1 ? "" : "s"}`
            : `${services.length} cuidados no catálogo`}
        </p>
      </div>

      {groups.length > 1 ? (
        <nav
          aria-label="Categorias de serviços"
          className="catalog-chips sticky z-20 -mx-4 mt-5 min-[375px]:-mx-5 sm:-mx-8"
          style={{ top: "env(safe-area-inset-top, 0px)" }}
        >
          <div className="catalog-chips-track px-4 min-[375px]:px-5 sm:px-8">
            {groups.map((group) => (
              <a
                key={group.category}
                href={`#${group.category}`}
                className="catalog-chip"
              >
                {group.label}
                <span className="text-gold-soft" aria-hidden="true">
                  {group.items.length}
                </span>
              </a>
            ))}
          </div>
        </nav>
      ) : null}

      {resultCount === 0 ? (
        <div className="mt-12 px-2 text-center">
          <p className="font-serif text-2xl text-ink">Nenhum resultado</p>
          <p className="mx-auto mt-3 max-w-xs text-sm leading-6 font-light text-taupe">
            Tente outro termo, como “toxina”, “limpeza” ou “plano start”.
          </p>
          <button
            type="button"
            className="mt-6 text-[0.68rem] font-medium tracking-[0.16em] text-gold uppercase"
            onClick={() => setQuery("")}
          >
            Ver todos
          </button>
        </div>
      ) : (
        <div className="mt-8 flex flex-col gap-12 sm:mt-10 sm:gap-14">
          {groups.map((group, groupIndex) => {
            const editorial = group.items.length === 1;

            return (
              <section
                key={group.category}
                id={group.category}
                aria-labelledby={`categoria-${group.category}`}
                className="scroll-mt-24"
              >
                <div className="flex items-end justify-between gap-4">
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
                      ? "mt-5"
                      : "mt-5 grid min-w-0 grid-cols-2 gap-x-2.5 gap-y-5 min-[375px]:gap-x-3 min-[375px]:gap-y-6"
                  }
                >
                  {group.items.map((service, index) => (
                    <li key={service.slug} className="min-w-0">
                      <ServiceCard
                        service={service}
                        layout={editorial ? "editorial" : "tile"}
                        priority={groupIndex === 0 && index === 0 && !isFiltering}
                      />
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
        </div>
      )}
    </div>
  );
}
