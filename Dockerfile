FROM node:20-alpine

RUN apk add --no-cache gettext librsvg ghostscript graphicsmagick

WORKDIR /usr/app

COPY package*.json ./

COPY . .

EXPOSE 5001
CMD [ "node", "ren3server.js" ]