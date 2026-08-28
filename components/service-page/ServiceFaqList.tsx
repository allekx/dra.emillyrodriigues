import { ContentSection } from "@/components/service-page/ContentSection";
import type { ServiceFaq } from "@/data/types";

type ServiceFaqListProps = {
  items: ServiceFaq[];
};

export function ServiceFaqList({ items }: ServiceFaqListProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <ContentSection id="faq" title="Perguntas frequentes">
      <div className="divide-y divide-border border-y border-border">
        {items.map((item) => (
          <details key={item.question} className="group py-5">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-3 text-left font-serif text-[1.05rem] leading-snug text-ink marker:content-none transition-colors duration-200 min-[375px]:text-xl sm:items-center sm:gap-4 hover:text-taupe focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold [&::-webkit-details-marker]:hidden">
              <h3 className="min-w-0 flex-1 font-serif text-[1.05rem] leading-snug font-normal min-[375px]:text-xl">
                {item.question}
              </h3>
              <span
                aria-hidden="true"
                className="shrink-0 text-gold-soft transition-transform duration-200 group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="mt-3 max-w-xl text-sm leading-6 font-light text-taupe sm:pr-8">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </ContentSection>
  );
}
