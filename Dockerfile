FROM node:12-alpine

COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json

WORKDIR /app

RUN npm ci

COPY . /app

CMD ["npm", "run", "test"]
CMD ["node", "./app/index.js"]
