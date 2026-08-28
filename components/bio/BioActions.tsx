import { Button } from "@/components/Button";
import { clinic, getMapsUrl, getWhatsAppHref } from "@/data/clinic";
import { routes } from "@/data/routes";
import {
  InstagramMark,
  LocationMark,
  WhatsAppMark,
} from "@/components/bio/Marks";

export function BioCta() {
  return (
    <Button
      href={routes.services}
      className="w-full min-h-14 tracking-[0.1em] whitespace-normal sm:tracking-[0.16em]"
    >
      Conheça nossos serviços
    </Button>
  );
}

export function BioLinks() {
  const showInstagram = clinic.contact.instagramConfirmed;
  const showLocation = clinic.address.confirmed;
  const showChannels = showInstagram || showLocation;

  return (
    <nav aria-label="Canais da clínica" className="flex flex-col gap-3">
      <Button
        href={getWhatsAppHref("bio")}
        variant="accent"
        className="w-full min-h-14 gap-2.5 tracking-[0.08em] whitespace-normal sm:tracking-[0.12em]"
        aria-label="Falar pelo WhatsApp"
      >
        <WhatsAppMark className="h-4 w-4 shrink-0" />
        Falar pelo WhatsApp
      </Button>

      {showChannels ? (
        <div
          className={
            showInstagram && showLocation
              ? "grid grid-cols-1 gap-3 min-[360px]:grid-cols-2"
              : "grid grid-cols-1 gap-3"
          }
        >
          {showInstagram ? (
            <Button
              href={clinic.contact.instagramUrl}
              variant="secondary"
              className="min-h-12 min-w-0 gap-1.5 px-2 tracking-[0.08em] min-[360px]:px-3"
              aria-label={`Abrir Instagram de ${clinic.name}`}
            >
              <InstagramMark className="h-4 w-4 shrink-0" />
              Instagram
            </Button>
          ) : null}
          {showLocation ? (
            <Button
              href={getMapsUrl()}
              variant="secondary"
              className="min-h-12 min-w-0 gap-1.5 px-2 tracking-[0.08em] min-[360px]:px-3"
              aria-label={`Ver localização de ${clinic.name}`}
            >
              <LocationMark className="h-4 w-4 shrink-0" />
              Localização
            </Button>
          ) : null}
        </div>
      ) : null}
    </nav>
  );
}
