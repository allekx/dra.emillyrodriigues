import { Button } from "@/components/Button";
import { WhatsAppMark } from "@/components/bio/Marks";
import { getServiceWhatsAppHref } from "@/data/clinic";
import { servicePageCopy } from "@/data/services";

type ServiceCtaProps = {
  name: string;
};

export function ServiceCta({ name }: ServiceCtaProps) {
  return (
    <section className="mt-16 border-t border-border pt-14 pb-4 text-center sm:mt-20 sm:pt-16">
      <h2 className="px-1 text-[1.65rem] leading-tight sm:text-3xl md:text-4xl">{servicePageCopy.interestCta}</h2>
      <p className="mx-auto mt-4 max-w-md px-1 text-sm leading-6 font-light text-muted">
        Fale com a equipe e tire suas dúvidas sobre {name}.
      </p>
      <div className="mt-8 flex justify-center">
        <Button
          href={getServiceWhatsAppHref(name)}
          variant="accent"
          className="min-h-14 w-full max-w-md gap-2.5 px-4 tracking-[0.06em] whitespace-normal sm:px-5 sm:tracking-[0.08em]"
          aria-label={`${servicePageCopy.interestCta}: ${name}`}
        >
          <WhatsAppMark className="h-4 w-4 shrink-0" />
          {servicePageCopy.interestCta}
        </Button>
      </div>
    </section>
  );
}
