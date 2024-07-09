FROM node:20-alpine as BASE

WORKDIR /app
COPY . .

FROM base AS builder
WORKDIR /app 
# COPY .gitignore .gitignore
# COPY --from=builder /app/out/json/ .
# COPY --from=builder /app/out/package-lock.json ./package-lock.json
RUN npm ci 

RUN npm run build

FROM base as runner

ENV PORT=3001

EXPOSE $PORT

CMD ["npm", "start"]