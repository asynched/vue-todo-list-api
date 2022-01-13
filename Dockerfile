FROM node:16-alpine

WORKDIR /app

# Set environment variables
ENV DATABASE_URL      "mongodb://database/tasks"
ENV APPLICATION_PORT  "3333"

# Copy package.json to container
COPY package.json .

# Install dependencies
RUN yarn

# Copy left-over files
COPY . .

# Build project
RUN yarn build

# Start the built project
CMD ["yarn", "start"]
