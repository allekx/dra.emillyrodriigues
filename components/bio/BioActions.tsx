import { Button } from "@/components/Button";
import { clinic, getWhatsAppHref } from "@/data/clinic";
import { routes } from "@/data/routes";
import {
  InstagramMark,
  TwitterMark,
  WhatsAppMark,
} from "@/components/bio/Marks";

const socialIconClass =
  "inline-flex size-11 items-center justify-center rounded-full border border-border bg-surface text-ink shadow-soft no-underline transition-[border-color,box-shadow,transform] duration-200 hover:border-gold-soft hover:shadow-lift hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold";

export function BioCta() {
  const twitterUrl = clinic.contact.twitterUrl?.trim();

  return (
    <div className="flex w-full flex-col gap-3">
      <Button
        href={routes.services}
        className="w-full min-h-14 tracking-[0.1em] whitespace-normal sm:tracking-[0.16em]"
      >
        Conheça nossos serviços
      </Button>
      <Button
        href={getWhatsAppHref("booking")}
        variant="accent"
        className="w-full min-h-14 gap-2.5 tracking-[0.08em] whitespace-normal sm:tracking-[0.12em]"
        aria-label="Agendar avaliação pelo WhatsApp"
      >
        <WhatsAppMark className="h-4 w-4 shrink-0" />
        Agendar avaliação
      </Button>

      <nav
        aria-label="Redes sociais"
        className="mt-2 flex items-center justify-center gap-3"
      >
        {clinic.contact.instagramConfirmed ? (
          <a
            href={clinic.contact.instagramUrl}
            className={socialIconClass}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Abrir Instagram de ${clinic.name}`}
          >
            <InstagramMark className="h-5 w-5" />
          </a>
        ) : null}
        {twitterUrl ? (
          <a
            href={twitterUrl}
            className={socialIconClass}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Abrir Twitter de ${clinic.name}`}
          >
            <TwitterMark className="h-4 w-4" />
          </a>
        ) : (
          <span className={socialIconClass} aria-hidden="true">
            <TwitterMark className="h-4 w-4" />
          </span>
        )}
      </nav>
    </div>
  );
}
