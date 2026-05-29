FROM node:20-alpine
LABEL authors="Yann Mulonda"

# Install curl for healthchecks
RUN apk add --no-cache curl

# Create app directory
WORKDIR /app

# Copy package files first for better layer caching
COPY package*.json ./

# Install all dependencies (including devDeps needed for babel-node)
RUN npm ci

# Copy the rest of the source
COPY . .

EXPOSE 30002

CMD ["npm", "start"]
