import { MediaImage } from "@/components/MediaImage";
import Link from "next/link";
import { clinic } from "@/data/clinic";
import { routes } from "@/data/routes";
import { cn } from "@/lib/cn";

type BrandProps = {
  href?: string;
  className?: string;
  showTagline?: boolean;
};

export function Brand({
  href = routes.bio,
  className,
  showTagline = false,
}: BrandProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex flex-col items-center gap-2 text-center no-underline",
        className,
      )}
      aria-label={`${clinic.name} — ${clinic.tagline}`}
    >
      <MediaImage
        src={clinic.logo}
        alt={`Logo ${clinic.name}`}
        width={56}
        height={56}
        className="h-14 w-14"
      />
      <span className="max-w-full px-2 font-serif text-xl leading-tight tracking-[-0.02em] text-ink sm:text-2xl">
        {clinic.name}
      </span>
      {showTagline ? (
        <span className="max-w-[16rem] text-[0.65rem] font-light tracking-[0.14em] text-muted uppercase sm:tracking-[0.2em]">
          {clinic.tagline}
        </span>
      ) : null}
    </Link>
  );
}
