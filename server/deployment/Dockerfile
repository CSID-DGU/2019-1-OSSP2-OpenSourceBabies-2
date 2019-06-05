
### STAGE 1: Build ###

# We label our stage as 'builder'
FROM node:10-alpine as builder


COPY package.json package-lock.json ./


## Storing node modules on a separate layer will prevent unnecessary npm installs at each build
RUN npm ci && mkdir /ionic-app && mv ./node_modules ./ionic-app/

## Move to /ionic-app (eq: cd /ionic-app)
WORKDIR /ionic-app


# Copy everything from host to /ionic-app in the container
COPY . .

## Build the ionic app in production mode and store the artifacts in dist folder
ARG NG_ENV=production
RUN npm run ng build -- --configuration=$NG_ENV


### STAGE 2: Setup ###

FROM nginx:1.13.3-alpine

## Copy our default nginx config
COPY nginx/default.conf /etc/nginx/conf.d/

## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

## From 'builder' stage copy over the artifacts in dist folder to default nginx public folder
COPY --from=builder /ionic-app/dist/www /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
