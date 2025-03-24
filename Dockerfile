FROM 943897082161.dkr.ecr.us-east-1.amazonaws.com/node:16.19.0

# create & set working directory
RUN mkdir -p /home/node/nodejsapp
WORKDIR /home/node/nodejsapp

# copy global package.json files
#COPY --chown=node package*.json ./
COPY . .

# install dependencies
RUN npm install 

ENV HOST=0.0.0.0 PORT=80

EXPOSE ${PORT}
CMD [ "npm", "run", "start" ]