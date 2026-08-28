import { ContentSection } from "@/components/service-page/ContentSection";
import { servicePageCopy } from "@/data/services";
import type { Service } from "@/data/types";

type ServiceDetailsProps = {
  service: Service;
};

export function ServiceDetails({ service }: ServiceDetailsProps) {
  const notes =
    service.importantInfo.length > 0
      ? service.importantInfo
      : [servicePageCopy.notesPlaceholder];

  return (
    <div className="mt-16 flex flex-col gap-4 sm:mt-20">
      <ContentSection id="sobre" title="Sobre o procedimento">
        <div className="flex flex-col gap-8">
          <div>
            <h3 className="font-serif text-xl text-ink sm:text-2xl">O que é</h3>
            <p className="mt-3 text-[0.9rem] leading-7 font-light text-taupe min-[375px]:text-[0.975rem]">
              {service.description}
            </p>
          </div>
          <div>
            <h3 className="font-serif text-xl text-ink sm:text-2xl">Objetivo</h3>
            <p className="mt-3 text-[0.9rem] leading-7 font-light text-taupe min-[375px]:text-[0.975rem]">
              {service.objective}
            </p>
          </div>
          <div>
            <h3 className="font-serif text-xl text-ink sm:text-2xl">Na prática</h3>
            <p className="mt-3 text-[0.9rem] leading-7 font-light text-taupe min-[375px]:text-[0.975rem]">
              {service.howItWorks}
            </p>
          </div>
        </div>
      </ContentSection>

      {service.benefits.length > 0 ? (
        <ContentSection id="beneficios" title="Benefícios">
          <ul className="grid min-w-0 gap-3 sm:grid-cols-2">
            {service.benefits.map((benefit) => (
              <li
                key={benefit}
                className="min-w-0 rounded-lg border border-border bg-surface px-4 py-4 text-sm leading-6 font-light text-ink transition-colors duration-200 sm:px-5 sm:py-5 hover:border-gold-soft"
              >
                {benefit}
              </li>
            ))}
          </ul>
        </ContentSection>
      ) : null}

      {service.indicatedFor.length > 0 ? (
        <ContentSection id="indicacao" title="Para quem é indicado">
          <ul className="flex flex-col gap-4">
            {service.indicatedFor.map((item) => (
              <li
                key={item}
                className="border-l border-gold-soft pl-4 text-[0.9rem] leading-7 font-light text-taupe min-[375px]:pl-5 min-[375px]:text-[0.975rem]"
              >
                {item}
              </li>
            ))}
          </ul>
        </ContentSection>
      ) : null}

      {service.process.length > 0 ? (
        <ContentSection id="processo" title="Como funciona">
          <ol className="flex flex-col gap-8">
            {service.process.map((step, index) => (
              <li key={step.title} className="flex min-w-0 gap-3 sm:gap-5">
                <span className="shrink-0 font-serif text-xl text-gold-soft sm:text-2xl">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0">
                  <h3 className="font-serif text-xl text-ink sm:text-2xl">{step.title}</h3>
                  <p className="mt-2 text-[0.9rem] leading-7 font-light text-taupe min-[375px]:text-[0.975rem]">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </ContentSection>
      ) : null}

      <ContentSection id="orientacoes" title="Informações importantes">
        <ul className="flex flex-col gap-4">
          {notes.map((note) => (
            <li
              key={note}
              className="text-[0.9rem] leading-7 font-light text-taupe min-[375px]:text-[0.975rem]"
            >
              {note}
            </li>
          ))}
        </ul>
      </ContentSection>
    </div>
  );
}
