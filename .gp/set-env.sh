#!/usr/bin/env bash

url=$(gp url 8080)

cp .env .env.dusk.local

sed -i'' "s|^APP_URL=http://web*|APP_URL=$url|g" .env
sed -i'' "s|^ASSET_URL=http://web*|ASSET_URL=$url|g" .env