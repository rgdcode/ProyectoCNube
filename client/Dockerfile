FROM node:20-alpine as BASE

WORKDIR /app
COPY . .

FROM base AS builder
WORKDIR /app 

RUN npm ci 

RUN npm run build

FROM base as runner

ENV PORT=3001
ENV NEXT_PUBLIC_API_URL=http://localhost:3000

EXPOSE $PORT

CMD ["npm", "start"]