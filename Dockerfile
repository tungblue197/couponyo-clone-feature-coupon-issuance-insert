# Base on offical Node.js Alpine image
FROM node:lts-alpine3.14 as builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json before other files
# Utilise Docker cache to save re-installing dependencies if unchanged
COPY ./package*.json ./

RUN npm install --force

COPY ./tsconfig.json ./.prettierrc ./.env.* ./next-env.d.ts ./.eslintrc.json ./next.config.js ./
COPY ./public ./public
COPY ./styles ./styles
COPY ./src ./src

ARG NEXT_PROFILES_ACTIVE

# Build For Different Environments
RUN npm run build:$NEXT_PROFILES_ACTIVE

# Unneccesary dependecy delete
RUN npm prune --production

# Runner
FROM node:lts-alpine3.14 as runner

# Install PM2 globally
RUN npm install --location=global pm2

ARG APP=/app

ENV APP_USER=runner
RUN addgroup -S $APP_USER \
    && adduser -S $APP_USER -G $APP_USER \
    && mkdir -p ${APP}

WORKDIR /app

COPY --from=builder /app/next.config.js /app/package.json ./
COPY --from=builder --chown=$APP_USER:$APP_USER /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

# Expose the listening port
EXPOSE 80

# Run container as non-root (unprivileged) user
# The node user is provided in the Node.js Alpine base image
USER node

# Run npm start script with PM2 when container starts
CMD [ "pm2-runtime", "npm", "--", "start" ]
