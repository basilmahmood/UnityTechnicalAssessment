# pull official base image
FROM node:14.15.3

# Install server dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm ci

COPY ./build ./

EXPOSE 3000

# serve
CMD node index.js