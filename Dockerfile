# Base image with Node.js and Alpine Linux
FROM node:18-alpine AS builder

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies including devDependencies
RUN npm install

# Copy the rest of your application code to the container
COPY . .

RUN npm run build

#build the applicaton

FROM node:18-alpine AS runner

WORKDIR /app

COPY --from=builder /app/.next/standalone .
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000

ENTRYPOINT [ "node", "server.js" ]
