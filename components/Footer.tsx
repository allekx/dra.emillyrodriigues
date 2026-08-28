import Link from "next/link";
import { clinic } from "@/data/clinic";
import { routes } from "@/data/routes";
import { cn } from "@/lib/cn";

type FooterProps = {
  className?: string;
};

export function Footer({ className }: FooterProps) {
  const locality =
    clinic.address.confirmed
      ? [clinic.address.city, clinic.address.state].filter(Boolean).join(" — ")
      : "";

  return (
    <footer className={cn("px-2 pb-[max(2.5rem,env(safe-area-inset-bottom))] pt-6 text-center", className)}>
      <p className="text-[0.62rem] leading-relaxed font-light tracking-[0.08em] text-muted min-[375px]:text-[0.65rem] sm:tracking-[0.12em]">
        <Link href={routes.bio} className="text-inherit no-underline hover:text-ink">
          {clinic.name}
        </Link>
        {locality ? ` · ${locality}` : ""}
      </p>
    </footer>
  );
}
