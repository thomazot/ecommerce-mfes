# Stage 1 - Dependencies
FROM node:20-slim AS deps
WORKDIR /app

# Instala pnpm global
RUN npm install -g pnpm

# Copia arquivos essenciais da raiz do monorepo
COPY pnpm-workspace.yaml pnpm-lock.yaml package.json tsconfig.json ./

# Copia somente os apps necessários
COPY apps ./apps

# Instala só as deps necessárias pro checkout (inclui shared)
RUN pnpm install --frozen-lockfile --filter @ecommerce-mfe/checkout...

# Stage 2 - Build
FROM node:20-slim AS builder
WORKDIR /app

# Copia tudo do stage anterior
COPY --from=deps /app ./

RUN pnpm --filter @ecommerce-mfe/shared... build
RUN pnpm --filter @ecommerce-mfe/checkout... build

# Stage 3 - Runtime
FROM node:20-slim AS runner
WORKDIR /app
ENV NODE_ENV=production

# Instala pnpm no runtime
RUN npm install -g pnpm

# Copia apenas o necessário para rodar
COPY --from=builder /app/pnpm-workspace.yaml ./pnpm-workspace.yaml
COPY --from=builder /app/apps/core ./apps/core
COPY --from=builder /app/apps/shared ./apps/shared
COPY --from=builder /app/apps/checkout/.next ./.next
COPY --from=builder /app/apps/checkout/public ./public
COPY --from=builder /app/apps/checkout/package.json ./package.json

# Instala apenas as dependências de produção do checkout
RUN pnpm install --prod --filter @ecommerce-mfe/checkout...

EXPOSE 3000
CMD ["pnpm", "start"]
