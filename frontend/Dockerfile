FROM node:latest
RUN mkdir -p /usr/src/app-demo
WORKDIR /usr/src/app-demo
COPY package*.json /usr/src/app-demo/
RUN npm install
COPY . /usr/src/app-demo
EXPOSE 5000
CMD ["npm", "start"]