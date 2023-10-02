FROM node:18

# Set the working directory inside the container
WORKDIR /usr/src/app

# Install app dependencies (including dev dependencies for development)
# This step is separate from copying the app files to leverage Docker's cache
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port that your Next.js app will run on
EXPOSE 3000

ENV NODE_ENV=development
# ENV DATABASE_URL=postgres://your_username:your_password@postgres_db:5432/your_db_name

# Start the Next.js app in development mode
CMD ["npm", "run", "dev"]
