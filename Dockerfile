# Install dependencies and build app
FROM node:18-alpine AS builder
WORKDIR /app
COPY . .

ENV NEXT_TELEMETRY_DISABLED 1

# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine 
# to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat && \ 
  npm i -g pnpm && \
  pnpm i --frozen-lockfile --prod && \
  pnpm run build



# Production image, copy all the files and run next
FROM node:18-alpine AS runner
WORKDIR /app

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/static ./.next/static

RUN addgroup -S myappgroup && adduser -S myappuser -G myappgroup
USER myappuser

ENV NEXT_TELEMETRY_DISABLED 1
ENV NODE_ENV production
ENV PORT 3000

EXPOSE 3000

CMD ["node", "server.js"]