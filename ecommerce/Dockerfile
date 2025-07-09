# Dockerfile para ecommerce
FROM node:20-alpine AS builder

WORKDIR /app

COPY pnpm-lock.yaml pnpm-workspace.yaml package.json .npmrc ./
COPY shared ./shared
COPY ecommerce ./ecommerce

RUN npm install -g pnpm
RUN pnpm install --frozen-lockfile
RUN pnpm --filter ecommerce... build

FROM node:20-alpine AS runner
WORKDIR /app/ecommerce
ENV NODE_ENV=production

# Copie toda a estrutura de dependências do monorepo
COPY --from=builder /app/node_modules /app/node_modules
COPY --from=builder /app/node_modules/.pnpm /app/node_modules/.pnpm
COPY --from=builder /app/pnpm-lock.yaml /app/pnpm-lock.yaml
COPY --from=builder /app/pnpm-workspace.yaml /app/pnpm-workspace.yaml
COPY --from=builder /app/package.json /app/package.json
COPY --from=builder /app/shared /app/shared
COPY --from=builder /app/ecommerce /app/ecommerce

EXPOSE 3000
CMD ["node_modules/.bin/next", "start"]