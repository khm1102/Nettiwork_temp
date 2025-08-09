#!/bin/sh


echo "Build @nettiwork/common..."
yarn --cwd ./common install --check-files
yarn --cwd ./common build


echo "Build @nettiwork/client-modules..."
yarn --cwd ./client-modules install --check-files
yarn --cwd ./client-modules build
