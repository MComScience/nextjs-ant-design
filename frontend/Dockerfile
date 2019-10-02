FROM node:latest
RUN mkdir -p /usr/src/app-demo
WORKDIR /usr/src/app-demo
COPY ./ /usr/src/app-demo/
RUN npm install && npm run build
EXPOSE 5000
CMD ["npm", "start"]