FROM node:18

WORKDIR /app

RUN yarn install --production=false

COPY . .

RUN yarn build

EXPOSE 3001

CMD [ "yarn", "dev2" ]