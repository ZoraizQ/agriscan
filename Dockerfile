FROM node:12-slim

WORKDIR /starter
ENV NODE_ENV production

COPY package.json /starter/package.json

RUN npm install --production
RUN pip3 install -r requirements.txt

COPY .env.setup /starter/.env.setup
COPY . /starter

CMD ["npm","start"]

EXPOSE 8080
