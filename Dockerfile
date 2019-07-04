FROM node:8.9-alpine



RUN mkdir -p /app

WORKDIR /app



RUN npm install -g nodemon

RUN npm config set registry https://registry.npmjs.org

COPY package.json /app/package.json

RUN npm install

COPY . /app



ENV PORT 80

EXPOSE 3001



CMD ["node", "main.js"]
