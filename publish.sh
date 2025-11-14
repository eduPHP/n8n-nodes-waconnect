#!/usr/bin/env bash
set -e  # ← exit immediately if any command returns non-zero

npm run build
npm link

cd ../../

docker compose down
docker compose up --build -d
