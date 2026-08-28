import { MediaImage } from "@/components/MediaImage";
import { clinic } from "@/data/clinic";

export function BioIdentity() {
  return (
    <header className="flex flex-col items-center text-center">
      <MediaImage
        src={clinic.logo}
        alt={clinic.name}
        width={44}
        height={44}
        className="h-11 w-11"
      />

      <div className="mt-8 rounded-full p-[3px] ring-1 ring-gold-soft/80">
        <div className="relative size-[8rem] overflow-hidden rounded-full bg-sand sm:size-[9rem]">
          <MediaImage
            src={clinic.photo}
            alt={`Foto de ${clinic.name}`}
            fill
            sizes="(min-width: 640px) 144px, 128px"
            className="object-cover"
            priority
          />
        </div>
      </div>

      <h1 className="mt-8 w-full px-1 font-serif text-[1.55rem] leading-[1.15] tracking-[-0.03em] text-ink min-[375px]:text-[1.8rem] sm:text-[2rem]">
        {clinic.name}
      </h1>
      <p className="mt-3 max-w-[16rem] px-1 text-[0.62rem] font-light tracking-[0.12em] text-muted uppercase min-[375px]:max-w-none min-[375px]:text-[0.68rem] min-[375px]:tracking-[0.18em] sm:tracking-[0.22em]">
        {clinic.tagline}
      </p>
      {clinic.credential ? (
        <p className="mt-2 max-w-full px-1 text-[0.68rem] font-light tracking-[0.06em] text-muted">
          {clinic.credential}
        </p>
      ) : null}
    </header>
  );
}
