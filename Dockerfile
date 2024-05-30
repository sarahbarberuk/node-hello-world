FROM node:12-alpine

COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json

WORKDIR /app

COPY . .

RUN npm install

CMD ["node", "index.js"]
EXPOSE 3000