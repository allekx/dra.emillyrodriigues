# Dra. Emilly Rodrigues — Bio & Catálogo

Site premium da clínica: **link da bio** (Instagram → WhatsApp) + **catálogo de serviços** com páginas individuais.

Stack: **Next.js 16** (App Router), **React 19**, **TypeScript**, **Tailwind CSS v4**. Deploy pensado para a **Vercel**.

## Escopo

- Bio (`/bio`) com identidade, especialidades e CTAs
- Catálogo (`/servicos`) e páginas por slug (`/servicos/[slug]`)
- Conversão via WhatsApp e Instagram
- SEO básico (metadata, sitemap, robots, JSON-LD)

**Fora do escopo:** CRM, login, banco de dados, agendamento online ou painel admin.

## Rotas

| Rota | Função |
|------|--------|
| `/` | Redireciona para `/bio` |
| `/bio` | Link na bio |
| `/servicos` | Catálogo |
| `/servicos/[slug]` | Detalhe do serviço |
| `/sitemap.xml` | Sitemap |
| `/robots.txt` | Robots |

Slugs atuais: `harmonizacao-facial`, `botox`, `tratamentos-faciais`, `limpeza-de-pele`, `tratamentos-corporais`, `procedimentos-esteticos`.

## Como rodar

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

Outros scripts:

```bash
npm run build   # build de produção
npm run start   # servir o build
npm run lint    # ESLint
```

## Variáveis de ambiente

Copie `.env.example` para `.env.local`:

```bash
NEXT_PUBLIC_SITE_URL=https://www.seudominio.com.br
```

- Use URL completa com `https://`, **sem** barra no final.
- Na Vercel, se a variável ficar vazia, o projeto usa a URL do deploy automaticamente (`lib/site-url.ts`).

## Onde editar o conteúdo

| Arquivo | O que altera |
|---------|-------------|
| `data/clinic.ts` | Nome, tagline, credencial, textos, WhatsApp, Instagram, endereço, foto |
| `data/services.ts` | Serviços, textos, FAQs, imagens, destaques da bio |
| `data/routes.ts` | Caminhos das rotas |
| `public/images/` | Fotos e assets estáticos |

### Contato e endereço

Em `data/clinic.ts`:

- **WhatsApp:** hoje usa o link oficial `contact.whatsappUrl` (QR). Quando houver número em dígitos, preencha `whatsapp` / `whatsappDisplay` e, se quiser, remova o `whatsappUrl`.
- **Endereço:** só aparece em SEO, Schema.org e rodapé quando `address.confirmed` for `true`. Não invente cidade.

### Imagens

```
public/images/
  brand/          # logo
  clinic/         # perfil, fundos (bio/catálogo)
  services/       # fotos dos procedimentos
```

Fotos JPG do catálogo podem ser stock temporário até as oficiais da clínica.

## Estrutura do projeto

```
app/                 # páginas (App Router), SEO, OG images
components/
  bio/               # identidade e CTAs da bio
  services/          # catálogo
  service-page/      # detalhe do serviço
data/                # conteúdo da clínica e dos serviços
lib/                 # SEO, URL do site, fontes, utilitários
public/images/       # assets
styles/              # animações
```

## Deploy (Vercel)

1. Conecte o repositório GitHub.
2. Branch de produção: `main`.
3. Opcional: defina `NEXT_PUBLIC_SITE_URL` com o domínio final.
4. Push em `main` gera o deploy.

## Pendências da clínica

Antes de considerar o conteúdo “final”:

- [ ] Número de WhatsApp oficial (dígitos)
- [ ] Endereço confirmado (`address.confirmed: true`)
- [ ] Logo próprio (se substituir o atual)
- [ ] Fotos oficiais dos procedimentos
- [ ] `NEXT_PUBLIC_SITE_URL` com o domínio real

## Licença

Projeto privado da clínica.
