FROM node:6

RUN mkdir -p /var/www/api
WORKDIR /var/www/api

COPY dist .
COPY config/server.js .

RUN npm install --save express compression
# Optional POST call
# RUN npm install --save body-parser

EXPOSE 8080
CMD ["node", "server.js"]
