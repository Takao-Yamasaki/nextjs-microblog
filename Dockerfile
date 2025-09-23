# https://www.docker.com/ja-jp/blog/how-to-dockerize-react-app/
FROM node:18

WORKDIR /nextjs-microblog

COPY nextjs-microblog/package*.json ./

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "dev"]
