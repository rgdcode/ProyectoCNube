FROM node:20-alpine as BASE

WORKDIR /app
COPY . .

FROM base AS builder
WORKDIR /app 
# COPY .gitignore .gitignore
# COPY --from=builder /app/out/json/ .
# COPY --from=builder /app/out/package-lock.json ./package-lock.json
RUN npm i 

RUN npm run build

FROM base as runner 

ENV PORT=3000
ENV DB_URI=mongodb+srv://brgalindo18:26152823bgr$@proyectosrgd.rdexbis.mongodb.net/?retryWrites=true&w=majority&appName=ProyectosRGD
EXPOSE $PORT

CMD ["npm", "start"]