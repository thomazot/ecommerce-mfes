# Stage 1 - Dependencies
FROM node:20-slim AS deps
WORKDIR /app

# Instala pnpm global
RUN npm install -g pnpm

# Copia arquivos essenciais da raiz do monorepo
COPY pnpm-workspace.yaml pnpm-lock.yaml package.json tsconfig.json ./
COPY apps ./apps

# Instala apenas o necessário para o ecommerce (e suas dependências)
RUN pnpm install --frozen-lockfile --filter @ecommerce-mfe/ecommerce...

# Stage 2 - Build
FROM node:20-slim AS builder
WORKDIR /app

# Instala pnpm no builder
RUN npm install -g pnpm

COPY --from=deps /app ./

RUN pnpm --filter @ecommerce-mfe/shared... build
RUN pnpm --filter @ecommerce-mfe/ecommerce... build

# Stage 3 - Runtime
FROM node:20-slim AS runner
WORKDIR /app
ENV NODE_ENV=production

# Instala pnpm no runner
RUN npm install -g pnpm

COPY --from=builder /app/pnpm-workspace.yaml ./pnpm-workspace.yaml
COPY --from=builder /app/apps/core ./apps/core
COPY --from=builder /app/apps/shared ./apps/shared
COPY --from=builder /app/apps/ecommerce/.next ./.next
COPY --from=builder /app/apps/ecommerce/public ./public
COPY --from=builder /app/apps/ecommerce/package.json ./package.json
COPY --from=builder /app/apps/ecommerce/next.config.ts ./next.config.ts

RUN pnpm install --prod --filter @ecommerce-mfe/ecommerce...

EXPOSE 3000
CMD ["pnpm", "start"]
