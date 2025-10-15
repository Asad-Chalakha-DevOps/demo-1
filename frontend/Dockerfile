# Stage 1: Build React app
FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install --force
COPY . .
RUN npm run build

# Stage 2: Serve React build
FROM node:22-alpine
RUN npm install -g serve
WORKDIR /app
COPY --from=build /app/build /app/build
EXPOSE 3000
CMD ["serve", "-s", "build", "-l", "3000"]
