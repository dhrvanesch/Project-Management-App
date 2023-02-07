FROM node:18-slim

WORKDIR /usr/src/app

COPY ./package*.json ./

RUN npm ci

COPY . /app

EXPOSE 3000

CMD [ "npm", "run", "start" ]
 