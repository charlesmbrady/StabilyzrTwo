FROM node
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# copy all the files into the container
COPY . /usr/src/app/
# COPY server.js /usr/src/app/
# COPY package.json /usr/src/app/

RUN yarn install
RUN yarn install && cd frontend && yarn install
RUN cd frontend && yarn build

EXPOSE 8080
CMD [ "node", "./backend/server.js" ]