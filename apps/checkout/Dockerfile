# Dockerfile para checkout
FROM node:20-alpine AS builder

WORKDIR /app

COPY pnpm-lock.yaml pnpm-workspace.yaml package.json .npmrc ./
COPY apps/shared ./apps/shared
COPY apps/checkout ./apps/checkout

RUN npm install -g pnpm
RUN pnpm install --frozen-lockfile
RUN pnpm --filter @checkout... build

FROM node:20-alpine AS runner
WORKDIR /app/apps/checkout
ENV NODE_ENV=production

COPY --from=builder /app/node_modules /app/node_modules
COPY --from=builder /app/node_modules/.pnpm /app/node_modules/.pnpm
COPY --from=builder /app/pnpm-lock.yaml /app/pnpm-lock.yaml
COPY --from=builder /app/pnpm-workspace.yaml /app/pnpm-workspace.yaml
COPY --from=builder /app/package.json /app/package.json
COPY --from=builder /app/apps/shared /app/apps/shared
COPY --from=builder /app/apps/checkout /app/apps/checkout

EXPOSE 3000
CMD ["node_modules/.bin/next", "start"]