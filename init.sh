#!/bin/sh
set -e


rm -rf ./node_modules/@nettiwork
rm -rf ./@nettiwork/client-modules/node_modules/@nettiwork
rm -rf ./api-server/node_modules/@nettiwork

rm -rf ./@nettiwork/client-modules/dist
rm -rf ./@nettiwork/common/dist


echo "Build @nettiwork"
yarn --cwd ./@nettiwork build


echo "Build api-server..."
yarn --cwd ./api-server install --check-files
yarn --cwd ./api-server build


echo "Build react native..."
yarn install --check-files
