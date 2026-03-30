#!/bin/bash
mkdir -p /tmp/mongodb

if ! pgrep -x mongod > /dev/null; then
    mongod --dbpath /tmp/mongodb --logpath /tmp/mongodb.log --bind_ip 127.0.0.1 &
    sleep 3
fi

cd backend && uvicorn server:app --host localhost --port 8000 --reload
