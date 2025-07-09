# ecommerce-mfe monorepo

## Estrutura do Projeto

```
apps/
  ├── ecommerce/   # MFE principal de ecommerce (Next.js)
  ├── checkout/    # MFE de checkout (Next.js)
  └── shared/      # Módulo compartilhado (schemas, tipos, utils)

pnpm-workspace.yaml
package.json
.dockerignore
.gitignore
.docker/
nginx/
docker-compose.yml
```

## Comandos Globais

- Instalar dependências:
  ```sh
  pnpm install
  ```
- Rodar localmente:
  ```sh
  pnpm --filter ecommerce... dev
  pnpm --filter checkout... dev
  ```
- Build de produção:
  ```sh
  pnpm --filter ecommerce... build
  pnpm --filter checkout... build
  ```
- Testes:
  ```sh
  pnpm --filter ecommerce... test
  pnpm --filter checkout... test
  ```
- Lint:
  ```sh
  pnpm --filter ecommerce... lint
  pnpm --filter checkout... lint
  ```

## Docker & Orquestração

Cada MFE possui seu próprio Dockerfile em `apps/ecommerce/Dockerfile` e `apps/checkout/Dockerfile`.
O contexto de build é sempre a raiz do monorepo.

### Subindo o projeto integrado (ecommerce + checkout + NGINX)

```sh
pnpm install
sudo docker-compose up --build
```

- O NGINX faz o proxy para os MFEs.
- Acesse:
  - Ecommerce: [http://localhost:3000](http://localhost:3000)
  - Checkout: [http://localhost:3001](http://localhost:3001)
- O reverse proxy do NGINX está configurado em `nginx/default.conf`.

## Módulo Compartilhado (`shared`)

Schemas e tipos compartilhados entre os MFEs ficam em `apps/shared/schemas`.

Exemplo de uso:
```ts
import { Product, ProductSchema, CartItem, CartItemSchema } from '@shared/schemas'
```

## Observações e Boas Práticas

- Todos os módulos estão em `apps/`.
- O arquivo `pnpm-workspace.yaml` já está configurado para reconhecer a estrutura.
- O uso de prefixo `@` nos nomes dos pacotes facilita a identificação dos módulos.
- O `.gitignore` já cobre node_modules, builds, arquivos de ambiente, IDEs, etc.
- Scripts globais no `package.json` da raiz facilitam automação.
- Para adicionar novos MFEs ou libs, crie uma nova pasta em `apps/` e adicione ao `pnpm-workspace.yaml`.

## Requisitos

- Node.js 18+ (recomendado)
- pnpm 8+ (monorepo)
- Docker e Docker Compose
