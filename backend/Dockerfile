# Use Node 12 (since your environment is Node 12)
FROM public.ecr.aws/docker/library/node:12-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --force

# Copy backend source code
COPY . .

# Expose port 5000
EXPOSE 5000

# Start backend
CMD ["npm", "start"]
