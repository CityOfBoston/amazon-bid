FROM nginx:1.13-alpine

WORKDIR /site
RUN apk add --update nodejs openssl && npm install -g npm

# LB -> backend connections are HTTPS, so we make a self-signed here
RUN openssl req -nodes -new -x509 \
  -keyout /etc/nginx/server.key \
  -out /etc/nginx/server.crt \
  -subj "/C=US/ST=MA/L=Boston/O=City of Boston/OU=DoIT Digital Team/CN=boston.gov/emailAddress=digital@boston.gov"

COPY package.json package-lock.json gatsby-config.js ./
COPY src ./src/

RUN npm install && \
  npx gatsby build && \
  rm -rf node_modules

COPY nginx/default.conf /etc/nginx/conf.d/
COPY nginx/.htpasswd /etc/nginx/
