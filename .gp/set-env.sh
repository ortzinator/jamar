#!/usr/bin/env bash

url=$(gp url 8080)

if [ ! -f .env.dusk.local ]; then
  cp .env .env.dusk.local
fi

sed -i "s|^APP_URL=.*\$|APP_URL=$url|g" .env
sed -i "s|^ASSET_URL=.*\$|ASSET_URL=$url|g" .env
