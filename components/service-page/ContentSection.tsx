type ContentSectionProps = {
  id: string;
  title: string;
  children: React.ReactNode;
};

export function ContentSection({ id, title, children }: ContentSectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-titulo`}
      className="scroll-mt-8 border-t border-border pt-12 sm:pt-16"
    >
      <h2
        id={`${id}-titulo`}
        className="text-[0.62rem] font-light tracking-[0.14em] text-muted uppercase min-[375px]:text-[0.68rem] min-[375px]:tracking-[0.2em] sm:tracking-[0.28em]"
      >
        {title}
      </h2>
      <div className="mt-6 max-w-2xl">{children}</div>
    </section>
  );
}
