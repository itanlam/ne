FROM node:alpine

EXPOSE 1912

#ENV
ARG STAGING
ENV STAGING=${STAGING}

COPY .next .next
COPY package.json package.json
COPY public public
COPY env.js env.js

#RUN yarn --production
COPY node_modules node_modules

CMD [ "yarn", "start" ]
