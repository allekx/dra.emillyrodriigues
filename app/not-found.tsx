import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { routes } from "@/data/routes";

export const metadata: Metadata = {
  title: "Página não encontrada",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="py-16">
        <Container className="max-w-md text-center">
          <p className="text-[0.7rem] tracking-[0.28em] text-muted uppercase">
            Página não encontrada
          </p>
          <h1 className="mt-4 text-4xl">Conteúdo indisponível</h1>
          <p className="mt-5 text-sm leading-relaxed font-light text-muted">
            O endereço acessado não existe ou ainda não foi publicado.
          </p>
          <div className="mt-10">
            <Button href={routes.bio}>Voltar à Bio</Button>
          </div>
        </Container>
      </main>
    </>
  );
}
