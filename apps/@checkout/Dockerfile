# Dockerfile para checkout
FROM node:20-alpine AS builder

WORKDIR /app

# Copia arquivos essenciais do monorepo
COPY pnpm-lock.yaml pnpm-workspace.yaml package.json .npmrc ./
COPY shared ./shared
COPY checkout ./checkout

RUN npm install -g pnpm
RUN pnpm install --frozen-lockfile
RUN pnpm --filter checkout... build

FROM node:20-alpine AS runner
WORKDIR /app/checkout
ENV NODE_ENV=production

# Copie toda a estrutura de dependências do monorepo
COPY --from=builder /app/node_modules /app/node_modules
COPY --from=builder /app/node_modules/.pnpm /app/node_modules/.pnpm
COPY --from=builder /app/pnpm-lock.yaml /app/pnpm-lock.yaml
COPY --from=builder /app/pnpm-workspace.yaml /app/pnpm-workspace.yaml
COPY --from=builder /app/package.json /app/package.json
COPY --from=builder /app/shared /app/shared
COPY --from=builder /app/checkout /app/checkout

EXPOSE 3000
CMD ["node_modules/.bin/next", "start"]