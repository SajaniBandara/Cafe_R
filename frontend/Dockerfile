# Single-stage production build
FROM node:20-alpine



WORKDIR /app

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm" , "run", "start"]