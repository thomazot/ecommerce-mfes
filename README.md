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
  # ou
  pnpm run install
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
- Testes:
  ```sh
  pnpm run test:ecommerce
  pnpm run test:checkout
  ```
- Lint:
  ```sh
  pnpm run lint:ecommerce
  pnpm run lint:checkout
  ```

## Comandos Docker

- Subir o projeto integrado (ecommerce + checkout + NGINX):
  ```sh
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

---

### Subindo o projeto integrado (ecommerce + checkout + NGINX)

```sh
pnpm install
pnpm run docker:up
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
