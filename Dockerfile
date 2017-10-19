FROM node:8.4-alpine

WORKDIR /app

RUN apk add --update openssl

# LB -> backend connections are HTTPS, so we make a self-signed here
RUN openssl req -nodes -new -x509 \
  -keyout /app/server.key \
  -out /app/server.crt \
  -subj "/C=US/ST=MA/L=Boston/O=City of Boston/OU=DoIT Digital Team/CN=boston.gov/emailAddress=digital@boston.gov"

# By just bringing these in first, we can re-use the npm install layer when the
# package.json and npm-shrinkwrap haven't changed, speeding up recompilation.
ADD package.json package-lock.json /app/
RUN npm install --loglevel warn

COPY package.json package-lock.json /app/

ADD . /app
RUN mv src/pages/private.js src/pages/index.js

RUN npm install
RUN npx gatsby build

RUN npm run-script build-js

EXPOSE 3000

CMD ["npm", "start"]