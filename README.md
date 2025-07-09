# ecommerce-mfes

## Visão Geral
Monorepo de e-commerce baseado em Micro Frontends (MFEs) com Next.js 15, Zod, React Query, cookies, Docker e NGINX.

### Estrutura
```
ecommerce-mfes/
├── ecommerce/        # MFE Home (produtos)
├── checkout/         # MFE Checkout
├── shared/schemas/   # Schemas Zod compartilhados
├── nginx/            # Configuração NGINX
├── .husky/pre-push   # Hook Husky
├── .cursor-rules.json
├── README.md
├── pnpm-workspace.yaml
├── docker-compose.yml
```

## Scripts Globais
- `pnpm start:local` — instala, builda e sobe tudo com Docker
- `pnpm check:all` — lint, testes e build
- `pnpm reset` — reseta containers e dependências
- `pnpm stop` — para containers
- `pnpm logs` — logs dos containers

## Como rodar localmente
```sh
pnpm install
pnpm start:local
```
Acesse:
- Home: [http://localhost](http://localhost)
- Checkout: [http://localhost/checkout](http://localhost/checkout)

## MFEs
- **ecommerce/**: Listagem e detalhe de produtos (Next.js 15, SSR, React Query, cookies)
- **checkout/**: Checkout e página de sucesso (Next.js 15, SSR, React Query, cookies)

## Shared
- **shared/schemas/**: Schemas e tipos em Zod compartilhados entre MFEs

## Testes
- Jest + React Testing Library
- 100% cobertura
- Testes em inglês, interface em pt-BR

## Infraestrutura
- Docker Compose orquestra MFEs e NGINX
- NGINX faz proxy para `/` (home) e `/checkout` (checkout)
- Husky com pre-push rodando `pnpm check:all`

## Arquitetura
![Arquitetura](docs/arquitetura.png)

---

> **Todos os schemas, tipos e textos visíveis seguem as regras de idioma: código/testes em inglês, interface em pt-BR.**
