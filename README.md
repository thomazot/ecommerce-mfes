# ecommerce-mfe monorepo

## Visão Geral

Monorepo para um ecossistema de micro frontends (MFEs) de e-commerce, utilizando Next.js, TypeScript, TailwindCSS, Jest, ESLint, Husky, lint-staged, Docker e Nginx para orquestração e proxy reverso.

---

## Estrutura do Projeto

```
apps/
  ├── ecommerce/   # MFE principal de ecommerce (Next.js)
  ├── checkout/    # MFE de checkout (Next.js)
  └── shared/      # Módulo compartilhado (schemas, tipos, utils)

pnpm-workspace.yaml
package.json
nginx/
docker-compose.yml
```

---

## Stacks e Ferramentas
- **Next.js** (React 19, App Router)
- **TypeScript**
- **TailwindCSS**
- **Jest** (testes unitários, coverage)
- **ESLint** (configuração DRY e centralizada)
- **Husky** + **lint-staged** (validação automática em pre-commit)
- **Docker** e **Docker Compose**
- **Nginx** (reverse proxy)

---

## Scripts Globais

- Instalar dependências:
  ```sh
  pnpm install
  ```
- Rodar localmente:
  ```sh
  pnpm run dev:ecommerce
  pnpm run dev:checkout
  ```
- Build de produção:
  ```sh
  pnpm run build:ecommerce
  pnpm run build:checkout
  ```
- Testes (todos os módulos):
  ```sh
  pnpm run test:all
  pnpm run test:ecommerce
  pnpm run test:checkout
  pnpm run test:shared
  ```
- Coverage:
  ```sh
  pnpm run check:all
  # ou
  pnpm --filter ecommerce... test:coverage
  pnpm --filter checkout... test:coverage
  pnpm run test:shared:coverage
  ```
- Lint (todos os módulos):
  ```sh
  pnpm run lint:all
  pnpm run lint:ecommerce
  pnpm run lint:checkout
  pnpm run lint:shared
  ```

---

## Rodando com Docker Compose

- Subir o projeto integrado (ecommerce + checkout + NGINX):
  ```sh
  pnpm install
  pnpm run docker:up
  ```
- Parar todos os containers:
  ```sh
  pnpm run docker:down
  ```
- Ver logs dos containers:
  ```sh
  pnpm run docker:logs
  ```
- Reiniciar os containers:
  ```sh
  pnpm run docker:restart
  ```

- O NGINX faz o proxy para os MFEs.
- Acesse:
  - Ecommerce: [http://localhost/](http://localhost/)
  - Checkout: [http://localhost/checkout/](http://localhost/checkout/)
- O reverse proxy do NGINX está configurado em `nginx/default.conf`.

> **Nota:** Em produção, o volume do ecommerce é removido para não sobrescrever o build da pasta `.next`.

---

## Configuração do Nginx (proxy reverso)

O arquivo `nginx/default.conf` já está pronto para rotear corretamente assets, imagens otimizadas (`/_next/image`), estáticos e rotas dos MFEs:

```nginx
server {
    listen 80;
    # Ecommerce
    location /_next/static/ { ... }
    location ~ ^/_next/image { ... }
    location /public/ { ... }
    location / { ... }
    # Checkout
    location /checkout/_next/static/ { ... }
    location ~ ^/checkout/_next/image { ... }
    location /checkout/public/ { ... }
    location /checkout/ { ... }
}
```

---

## Módulo Compartilhado (`shared`)

Schemas e tipos compartilhados entre os MFEs ficam em `apps/shared/schemas`.

Exemplo de uso:
```ts
import { Product, ProductSchema, Category, CategorySchema, getCategories } from '@shared/schemas'

// Validando uma categoria
CategorySchema.parse('electronics');

// Buscando categorias da API
const categories = await getCategories();
```

---

## Boas Práticas
- Todos os módulos ficam em `apps/`.
- O arquivo `pnpm-workspace.yaml` já reconhece a estrutura.
- Scripts globais no `package.json` da raiz facilitam automação.
- Para adicionar novos MFEs ou libs, crie uma nova pasta em `apps/` e adicione ao `pnpm-workspace.yaml`.
- Sempre rode lint e testes antes de commitar (validação automática via Husky/lint-staged).
- Use os schemas compartilhados para garantir tipagem e validação entre MFEs.
- Imagens externas devem ser declaradas em `images.domains` na config global do Next.js.

---

## Requisitos
- Node.js 18+
- pnpm 8+
- Docker e Docker Compose

---

## Contribuindo
1. Crie uma branch a partir da `main`.
2. Faça suas alterações e rode os testes/lint.
3. Abra um Pull Request com uma descrição clara.

---

## Observações
- O projeto está pronto para CI/CD e integração com pipelines.
- O uso de Nginx permite deploy em qualquer ambiente Docker/K8s.
- O build de produção do Next.js é gerado no Dockerfile e não deve ser sobrescrito por volumes em produção.
- O proxy de imagens otimizadas do Next.js está corretamente configurado para evitar redirects e garantir performance.
