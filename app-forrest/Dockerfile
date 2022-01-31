FROM node:16

# NPM Install for building
WORKDIR /usr/src/app-forrest
ADD package.json /usr/src/app-forrest
ADD package-lock.json /usr/src/app-forrest
RUN npm install

WORKDIR /usr/src/app-forrest
ENTRYPOINT [ "npm", "start" ]