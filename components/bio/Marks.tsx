type MarkProps = {
  className?: string;
};

export function HarmonizacaoMark({ className }: MarkProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M14 32C16.8 22 24 16 24 16C24 16 31.2 22 34 32"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
      <path
        d="M18 28C20 22.8 24 20 24 20C24 20 28 22.8 30 28"
        stroke="currentColor"
        strokeWidth="0.9"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function BotoxMark({ className }: MarkProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M24 14V34"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
      <circle cx="24" cy="24" r="2.2" fill="currentColor" />
    </svg>
  );
}

export function FaciaisMark({ className }: MarkProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <circle cx="24" cy="24" r="10" stroke="currentColor" strokeWidth="1.1" />
      <circle cx="24" cy="24" r="4.5" stroke="currentColor" strokeWidth="0.9" />
    </svg>
  );
}

export function CorporaisMark({ className }: MarkProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <ellipse
        cx="24"
        cy="24"
        rx="7"
        ry="12"
        stroke="currentColor"
        strokeWidth="1.1"
      />
    </svg>
  );
}

export function WhatsAppMark({ className }: MarkProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M5 19L6.2 15.4C5.4 14.1 5 12.6 5 11C5 7.1 8.1 4 12 4C15.9 4 19 7.1 19 11C19 14.9 15.9 18 12 18C10.6 18 9.3 17.6 8.1 16.9L5 19Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function VerifiedMark({ className }: MarkProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      role="img"
      aria-label="Verificado"
      className={className}
    >
      <title>Verificado</title>
      <path
        fill="#0095F6"
        fillRule="evenodd"
        d="M19.998 3.094 14.638 0l-2.972 5.15H5.432v6.354L0 14.64 3.094 20 0 25.359l5.432 3.137v5.905h5.975L14.638 40l5.36-3.094L25.358 40l3.232-5.6h6.162v-6.01L40 25.359 36.905 20 40 14.641l-5.248-3.03v-6.46h-6.419L25.358 0l-5.36 3.094Zm7.415 11.225 2.254 2.287-11.43 11.5-6.835-6.93 2.244-2.258 4.587 4.581 9.18-9.18Z"
      />
    </svg>
  );
}

export function InstagramMark({ className }: MarkProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <rect
        x="4.5"
        y="4.5"
        width="15"
        height="15"
        rx="4"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="16.2" cy="7.8" r="0.8" fill="currentColor" />
    </svg>
  );
}

export function LocationMark({ className }: MarkProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M12 21C12 21 6.5 14.8 6.5 10.5C6.5 7.5 9 5 12 5C15 5 17.5 7.5 17.5 10.5C17.5 14.8 12 21 12 21Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10.5" r="1.8" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

const marks = {
  "harmonizacao-facial": HarmonizacaoMark,
  botox: BotoxMark,
  "tratamentos-faciais": FaciaisMark,
  "tratamentos-corporais": CorporaisMark,
} as const;

export function ServiceMark({
  slug,
  className,
}: {
  slug: string;
  className?: string;
}) {
  const Icon = marks[slug as keyof typeof marks] ?? FaciaisMark;
  return <Icon className={className} />;
}
