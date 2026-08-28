import Link from "next/link";
import { cn } from "@/lib/cn";

const variants = {
  primary:
    "btn-motion bg-ink text-ivory hover:bg-taupe",
  secondary:
    "btn-motion border border-border bg-surface text-ink hover:border-gold-soft hover:bg-sand",
  accent:
    "btn-motion border border-gold-soft bg-sand text-ink hover:border-gold hover:bg-champagne",
  ghost: "btn-motion text-taupe hover:text-ink",
} as const;

type CommonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: keyof typeof variants;
  "aria-label"?: string;
};

type ButtonAsButton = CommonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps & {
  href: string;
  external?: boolean;
};

type ButtonProps = ButtonAsButton | ButtonAsLink;

const baseClass =
  "inline-flex min-h-12 max-w-full min-w-0 items-center justify-center rounded-md px-4 text-center text-[0.75rem] font-medium leading-snug tracking-[0.06em] uppercase sm:px-6 sm:text-sm sm:tracking-[0.08em] touch-manipulation focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-gold";

export function Button(props: ButtonProps) {
  const { children, className, variant = "primary" } = props;
  const classes = cn(baseClass, variants[variant], className);
  const ariaLabel = props["aria-label"];

  if ("href" in props && props.href) {
    const isExternal =
      props.external ||
      props.href.startsWith("http") ||
      props.href.startsWith("mailto:") ||
      props.href.startsWith("tel:");

    if (isExternal) {
      return (
        <a
          href={props.href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={ariaLabel}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={props.href} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButton;

  return (
    <button
      type={buttonProps.type ?? "button"}
      className={classes}
      disabled={buttonProps.disabled}
      onClick={buttonProps.onClick}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
