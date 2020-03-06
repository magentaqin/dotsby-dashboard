FROM nginx:1.17.6-alpine

WORKDIR /usr/src/dotsby-dashboard

COPY ./build /usr/share/nginx/html

COPY ./nginx-server.conf /etc/nginx/conf.d/default.conf

