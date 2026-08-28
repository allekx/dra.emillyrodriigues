import { Brand } from "@/components/Brand";
import { Container } from "@/components/Container";
import { cn } from "@/lib/cn";

type HeaderProps = {
  className?: string;
};

export function Header({ className }: HeaderProps) {
  return (
    <header className={cn("pt-10 pb-4 sm:pt-14", className)}>
      <Container className="flex justify-center">
        <Brand showTagline />
      </Container>
    </header>
  );
}
