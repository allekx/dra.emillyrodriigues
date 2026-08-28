import { cn } from "@/lib/cn";

type ContainerProps = {
  as?: "div" | "main" | "section" | "header" | "footer" | "article";
  children: React.ReactNode;
  className?: string;
  size?: "default" | "narrow";
};

const sizes = {
  default: "max-w-5xl",
  narrow: "max-w-[26.5rem] sm:max-w-md",
} as const;

export function Container({
  as: Component = "div",
  children,
  className,
  size = "default",
}: ContainerProps) {
  return (
    <Component
      className={cn(
        "mx-auto w-full min-w-0 px-4 min-[375px]:px-5 sm:px-8 lg:px-12",
        sizes[size],
        className,
      )}
    >
      {children}
    </Component>
  );
}
