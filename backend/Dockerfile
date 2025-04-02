# backend/Dockerfile
FROM node:20-alpine

# Install nodemon globally (for development only)
RUN npm install -g nodemon

WORKDIR /app

# Copy package files first for better caching
COPY package*.json ./
RUN npm install

# Copy remaining files
COPY . .

# Environment variables (adjust for production)
ENV MONGO_URI=mongodb://mongo:27017/Cafe_R-db
ENV NODE_ENV=development

EXPOSE 5000

# Use nodemon for dev, node for production
CMD ["npm", "run", "dev"]