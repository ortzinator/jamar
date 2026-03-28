## Installation (development)

### Prerequisites

-   PHP 8.2
-   Docker (https://docs.docker.com/get-docker/)

```
$ git clone git@github.com:ortzinator/jamar.git
$ cd jamar && composer install && npm install
$ cp .env.example .env
$ php artisan key:generate
$ chmod -R 775 storage bootstrap/cache
$ ./vendor/bin/sail up -d
$ ./vendor/bin/sail artisan migrate --seed
$ npm run dev
```

## Installation (production)

```
TBD
```
