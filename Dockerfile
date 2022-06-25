FROM node:16-alpine

WORKDIR /app

COPY package.json ./
COPY tsconfig.json ./
COPY tsconfig.build.json ./

COPY /src/data/   ./src/data/
COPY /src/domain/   ./src/domain/
COPY /src/infra/  ./src/infra/
COPY /src/main/  ./src/main/
COPY /src/crons/   ./src/crons/

RUN npm install
RUN npm run build

CMD ["npm", "run", "start"]