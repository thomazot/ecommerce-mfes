# Stage 1 - Dependencies
FROM node:20-alpine AS deps
WORKDIR /app

# Copia arquivos essenciais da raiz do monorepo
COPY pnpm-lock.yaml pnpm-workspace.yaml package.json tsconfig.json ./

# Copia todos os apps (ecommerce, checkout, core, shared)
COPY apps ./apps

RUN apk add --no-cache libc6-compat
RUN npm install -g pnpm
RUN pnpm install

# Stage 2 - Build
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app ./

RUN npm install -g pnpm
RUN pnpm --filter @ecommerce-mfe/shared... build
RUN pnpm --filter @ecommerce-mfe/ecommerce... build

# Stage 3 - Runtime
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

COPY --from=builder /app/pnpm-workspace.yaml ./pnpm-workspace.yaml
COPY --from=builder /app/apps/core ./apps/core
COPY --from=builder /app/apps/shared ./apps/shared
COPY --from=builder /app/apps/ecommerce/.next .next
COPY --from=builder /app/apps/ecommerce/next.config.ts ./next.config.ts
COPY --from=builder /app/apps/ecommerce/public ./public
COPY --from=builder /app/apps/ecommerce/package.json ./package.json

RUN npm install -g pnpm && pnpm install --prod --filter .

CMD ["pnpm", "start"]
