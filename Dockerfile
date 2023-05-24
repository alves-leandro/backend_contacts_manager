FROM node:14

WORKDIR /app

COPY package.json ./

RUN yarn install --production=false

COPY . .

RUN yarn build

EXPOSE 3001

CMD [ "node", "dist/server.js" ] 


