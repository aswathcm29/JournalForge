# Backend Dockerfile
FROM node:18

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json for installing dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app source code
COPY . .

# Expose the backend server port (adjust this based on your backend's configuration)
EXPOSE 8000

# Start the Node.js server
CMD ["npm", "run", "start"]
