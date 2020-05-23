# use an exisitng docker image as a base
# specify the node base image with your desired version node:<version>
FROM node:10
# replace this with your application's default port
# downlload and install  dependencies
WORKDIR /usr/app
COPY ./package.json ./
RUN npm install
COPY ./ ./
# Default command
CMD ["npm","start"]