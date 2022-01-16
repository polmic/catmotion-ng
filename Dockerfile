# STAGE 1
FROM node:alpine AS catmotion-ng-build
WORKDIR /app
COPY . .
RUN npm ci && npm run build

# STAGE 2
FROM nginx:alpine
COPY --from=catmotion-ng-build /app/dist/catmotion-ng /usr/share/nginx/html
EXPOSE 80