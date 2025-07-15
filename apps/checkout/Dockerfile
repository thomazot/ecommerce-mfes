# Stage 1 - Dependencies
FROM node:20-alpine AS deps
WORKDIR /app

# Copia arquivos essenciais da raiz do monorepo
COPY pnpm-lock.yaml pnpm-workspace.yaml package.json tsconfig.json ./

# Copia todos os apps (checkout, ecommerce, core, shared)
COPY apps ./apps

RUN apk add --no-cache libc6-compat
RUN npm install -g pnpm
RUN pnpm install --frozen-lockfile

# Stage 2 - Build
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app ./

RUN npm install -g pnpm
RUN pnpm --filter @ecommerce-mfe/shared... build
RUN pnpm --filter @ecommerce-mfe/checkout... build

# Stage 3 - Runtime
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

COPY --from=builder /app/pnpm-workspace.yaml ./pnpm-workspace.yaml
COPY --from=builder /app/apps/core ./apps/core
COPY --from=builder /app/apps/shared ./apps/shared
COPY --from=builder /app/apps/checkout/.next ./apps/checkout/.next
COPY --from=builder /app/apps/checkout/public ./apps/checkout/public
COPY --from=builder /app/apps/checkout/package.json ./apps/checkout/package.json
COPY --from=builder /app/apps/checkout/next.config.ts ./apps/checkout/next.config.ts

WORKDIR /app/apps/checkout

RUN npm install -g pnpm && pnpm install --prod --filter .

EXPOSE 3000

CMD ["pnpm", "start"]
