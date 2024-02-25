FROM node:latest
WORKDIR /app
COPY package.json .
COPY . /app
RUN npm install 
COPY . ./
EXPOSE 8082
CMD ["npm", "start"]
