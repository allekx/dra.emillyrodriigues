import { cn } from "@/lib/cn";

type RevealProps = {
  as?: "div" | "header" | "main" | "section" | "footer";
  children: React.ReactNode;
  className?: string;
  delay?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
};

export function Reveal({
  as: Component = "div",
  children,
  className,
  delay = 0,
}: RevealProps) {
  return (
    <Component
      className={cn("reveal", delay > 0 && `reveal-delay-${delay}`, className)}
    >
      {children}
    </Component>
  );
}
