#!/usr/bin/env bash

bash .gp/set-env.sh

bash .ddev/gitpod-setup-ddev.sh

ddev composer install && npm i && gp sync-done npm
ddev exec "cat .env.example | sed  -E 's/DB_(HOST|DATABASE|USERNAME|PASSWORD)=(.*)/DB_\1=db/g' > .env"
ddev exec "php artisan key:generate && php artisan migrate --seed"
