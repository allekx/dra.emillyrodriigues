import Link from "next/link";
import { cn } from "@/lib/cn";
import { routes } from "@/data/routes";

type NavBackProps = {
  href?: string;
  children: React.ReactNode;
  className?: string;
};

export function NavBack({
  href = routes.services,
  children,
  className,
}: NavBackProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex min-h-11 max-w-full items-center gap-2 text-[0.65rem] font-light tracking-[0.14em] text-muted uppercase no-underline min-[375px]:text-[0.68rem] sm:tracking-[0.22em] hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold",
        className,
      )}
    >
      <svg
        viewBox="0 0 16 16"
        fill="none"
        aria-hidden="true"
        className="h-3.5 w-3.5 shrink-0 transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-x-0.5"
      >
        <path
          d="M10 3L5 8L10 13"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {children}
    </Link>
  );
}
