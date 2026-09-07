# Dra. Emilly Rodrigues — Bio & Catálogo

Site premium da clínica: **link na bio** (Instagram → serviços / WhatsApp) + **catálogo de serviços** com páginas individuais.

Stack: **Next.js 16** (App Router), **React 19**, **TypeScript**, **Tailwind CSS v4**. Deploy na **Vercel**.

Produção atual: [dra-emillyrodriigues.vercel.app](https://dra-emillyrodriigues.vercel.app)

## Escopo

- Bio (`/bio`) com identidade, CTAs, redes e carrossel de especialidades
- Catálogo (`/servicos`) e páginas por slug (`/servicos/[slug]`)
- Botão flutuante de WhatsApp em todas as páginas
- Conversão via WhatsApp e Instagram
- SEO (metadata, Open Graph, sitemap, robots, JSON-LD)
- Layout mobile-first; no desktop (≥1024px) a bio/catálogo ficam numa coluna central (~28rem)

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

Slugs: `harmonizacao-facial`, `botox`, `tratamentos-faciais`, `limpeza-de-pele`, `tratamentos-corporais`, `procedimentos-esteticos`.

Destaques do carrossel na bio (`featured: true` em `data/services.ts`): harmonização facial, botox, tratamentos faciais e tratamentos corporais.

## Como rodar

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

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

- URL completa com `https://`, **sem** barra no final.
- Na Vercel, se a variável ficar vazia, o projeto usa a URL do deploy (`lib/site-url.ts`).

## Onde editar o conteúdo

| Arquivo | O que altera |
|---------|-------------|
| `data/clinic.ts` | Nome, tagline, credencial, textos, WhatsApp, Instagram, Twitter/X, endereço, foto |
| `data/services.ts` | Serviços, textos, FAQs, imagens, destaques da bio (`featured`) |
| `data/routes.ts` | Caminhos das rotas |
| `public/images/` | Fotos e assets estáticos |
| `components/Footer.tsx` | Rodapé e copyright |
| `components/WhatsAppFloat.tsx` | Botão / popup flutuante do WhatsApp |

### Contato e endereço

Em `data/clinic.ts`:

- **WhatsApp:** hoje usa o link oficial `contact.whatsappUrl` (QR). Quando houver número em dígitos, preencha `whatsapp` / `whatsappDisplay` e, se quiser, remova o `whatsappUrl`.
- **Instagram:** confirmado (`instagramConfirmed: true`).
- **Twitter/X:** preencha `contact.twitterUrl` para ativar o link no ícone da bio.
- **Endereço:** só aparece em SEO, Schema.org e rodapé quando `address.confirmed` for `true`. Não invente cidade.

### Imagens

```
public/images/
  brand/          # logo
  clinic/         # perfil, fundos (ambiente.jpg, catalogo.jpg)
  services/       # fotos dos procedimentos
```

## Estrutura do projeto

```
app/                      # App Router, SEO, OG images
components/
  bio/                    # identidade, CTAs, carrossel (ServiceHighlights)
  services/               # catálogo
  service-page/           # detalhe do serviço
  WhatsAppFloat.tsx       # CTA flutuante
  Footer.tsx              # rodapé + copyright
data/                     # clínica e serviços
lib/                      # SEO, URL do site, fontes, utilitários
public/images/            # assets
styles/animations.css     # motion
app/globals.css           # tema, fundos, carrossel, layout desktop
```

## Deploy (Vercel)

1. Conecte o repositório GitHub `allekx/dra.emillyrodriigues`.
2. Branch de produção: `main`.
3. Opcional: `NEXT_PUBLIC_SITE_URL` com o domínio final.
4. Push em `main` deve gerar o deploy automaticamente.

Se o site oficial ficar desatualizado em relação ao localhost:

1. Confirme no GitHub que o commit desejado está em `main`.
2. No dashboard da Vercel do projeto **dra-emillyrodriigues**, veja se esse commit foi publicado.
3. Se não, faça **Redeploy** do commit mais recente (ou “Create Deployment” em `main`).
4. Abra o link em aba anônima / hard refresh.

## Pendências da clínica

- [ ] Número de WhatsApp oficial (dígitos), se quiser deixar de usar só o QR
- [ ] URL do Twitter/X (`contact.twitterUrl`)
- [ ] Endereço confirmado (`address.confirmed: true`)
- [ ] Logo próprio (se substituir o atual)
- [ ] Fotos oficiais dos procedimentos (hoje parte pode ser stock)
- [ ] `NEXT_PUBLIC_SITE_URL` / domínio customizado definitivo

## Licença

Projeto privado da clínica. © Todos os direitos reservados.
