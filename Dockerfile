# REACT
FROM node:lts-alpine3.10

RUN mkdir /app

WORKDIR /appp

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "build"]

# SERVER
FROM nginx

COPY --from=0 /app/build /usr/share/nginx/html