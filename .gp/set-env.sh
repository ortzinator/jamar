#!/usr/bin/env bash

url=$(gp url 8080)
err_code=$?
if [[ $url =~ ^https?:// ]];then
    sed -i'' "s#^APP_URL=http://localhost*#APP_URL=$url\nASSET_URL=$url#g" .env
    err_code=$?
else
    url="$(echo -e "$url" | head -1)"
    log_silent -e "ERROR: malformed url: $url"
fi