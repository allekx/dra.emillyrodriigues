import { Button } from "@/components/Button";
import { WhatsAppMark } from "@/components/bio/Marks";
import { getWhatsAppHref } from "@/data/clinic";
import { servicesPage } from "@/data/services";

export function ServicesCta() {
  return (
    <section className="mt-14 border-t border-border pt-10 pb-4 text-center sm:mt-20 sm:pt-14">
      <h2 className="px-1 text-[1.45rem] leading-tight sm:text-3xl md:text-4xl">{servicesPage.ctaTitle}</h2>
      <div className="mt-8 flex justify-center">
        <Button
          href={getWhatsAppHref("services")}
          variant="accent"
          className="min-h-14 w-full max-w-md gap-2.5 px-4 tracking-[0.06em] whitespace-normal sm:px-5 sm:tracking-[0.08em]"
          aria-label={servicesPage.ctaAction}
        >
          <WhatsAppMark className="h-4 w-4 shrink-0" />
          {servicesPage.ctaAction}
        </Button>
      </div>
    </section>
  );
}
