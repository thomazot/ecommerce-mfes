# Stage 1 - Dependencies
FROM node:20-slim AS deps
WORKDIR /app

# Instala pnpm global
RUN npm install -g pnpm

# Copia arquivos essenciais da raiz do monorepo
COPY pnpm-workspace.yaml pnpm-lock.yaml package.json tsconfig.json ./
COPY apps ./apps

# Instala apenas o necessário para o checkout (e suas dependências)
RUN pnpm install --frozen-lockfile --filter @ecommerce-mfe/checkout...

# Stage 2 - Build
FROM node:20-slim AS builder
WORKDIR /app

# Instala pnpm no builder
RUN npm install -g pnpm

COPY --from=deps /app ./

RUN pnpm --filter @ecommerce-mfe/shared... build
RUN pnpm --filter @ecommerce-mfe/checkout... build

# Stage 3 - Runtime
FROM node:20-slim AS runner
WORKDIR /app
ENV NODE_ENV=production

# Instala pnpm no runner
RUN npm install -g pnpm

COPY --from=builder /app/pnpm-workspace.yaml ./pnpm-workspace.yaml
COPY --from=builder /app/apps/core ./apps/core
COPY --from=builder /app/apps/shared ./apps/shared
COPY --from=builder /app/apps/checkout/.next ./.next
COPY --from=builder /app/apps/checkout/public ./public
COPY --from=builder /app/apps/checkout/package.json ./package.json
COPY --from=builder /app/apps/checkout/next.config.ts ./next.config.ts

RUN pnpm install --prod --filter @ecommerce-mfe/checkout...

EXPOSE 3000
CMD ["pnpm", "start"]
