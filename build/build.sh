#!/bin/bash

echo "Fetching new release..."
DB_PATH=https://github.com/TheSnowfield/BotArcAPI/releases/download/v$1/arcsong.db
wget -O ./build/arcsong.db $DB_PATH >>/dev/null 2>&1
wget_exit_status=$?
if [ $wget_exit_status -eq 8 ]; then
    echo "Invalid version: $1"
    exit $wget_exit_status
fi

node ./build/index.js
