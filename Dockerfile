FROM node:18

WORKDIR /app

COPY package*.json ./

RUN yarn install --production=false

# RUN yarn build

COPY . .

EXPOSE 3001

CMD [ "node", "dist/server.js"]
# CMD [ "yarn", "dev2" ]