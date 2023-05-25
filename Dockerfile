FROM node:14

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --production=false

COPY . .

RUN yarn build

EXPOSE 3001

# CMD [ "yarn", "start" ]

CMD [ "yarn", "dev2" ]

# CMD [ "node", "dist/server.js" ]
