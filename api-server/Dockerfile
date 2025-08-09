FROM node:23-alpine AS node


# install dependencies
FROM node AS install-dependencies

# 🚨 로컬에서 빌드하면 빌드가 되지 않음
# 상위 디렉토리에 있는 @nettiwork/common을 사용하기 위해 tmp로 복사
# deploy-api-server.yml의 `Copy @nettiwork to tmp` 참고
WORKDIR /
COPY ./tmp ./

WORKDIR /app
COPY package.json ./
COPY yarn.lock ./

RUN yarn install --frozen-lockfile --production



# build typescript
FROM install-dependencies AS build-typescript

COPY tsconfig.json ./
COPY src/ ./src

RUN yarn install --frozen-lockfile && yarn tsc



# final
FROM node AS final

RUN mkdir -p /home/node/app/dist
USER node

# set CWD
WORKDIR /home/node/app

COPY --chown=node:node package.json ./
COPY --chown=node:node yarn.lock ./
COPY --chown=node:node --from=install-dependencies \
  /app/node_modules \
  ./node_modules

RUN yarn check --verify-tree --production
COPY --chown=node:node --from=build-typescript \
  /app/dist \
  ./dist

# disable process limit
RUN ulimit -n 65536



EXPOSE 3000
ENTRYPOINT ["node", "./dist/server.js"]
