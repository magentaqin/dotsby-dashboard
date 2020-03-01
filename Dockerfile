# builder stage
FROM node:13.8.0

# Install yarn
RUN curl -o- -L https://yarnpkg.com/install.sh | bash -s -- --version 1.22.0

WORKDIR /usr/src/dotsby-dashboard

# Install app dependencies
COPY ["package.json", "yarn.lock", "./"]
RUN yarn install

# Bundle app source
COPY . .
RUN yarn build

EXPOSE 80

# Stage 2. Smaller base image.
FROM nginx:1.17.6-alpine

COPY --from=0 ./build /usr/share/nginx/html

COPY ./nginx-server.conf /etc/nginx/conf.d/default.conf

