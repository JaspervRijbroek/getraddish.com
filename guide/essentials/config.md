---
title: Config
author: Jasper van Rijbroek
layout: guide
---

Applications written with Raddish are required to create a config.json which needs to be send to Raddish before starting.
Below I will give an example config file, with more detail underneath.

~~~ json
{
    "db": {
        "default": {
            "host": "localhost",
            "port": 3306,
            "user": "root",
            "password": "root",
            "database": "demo",
            "prefix": "demo_"
        }
    },
    "router" : {
        "cors": {
            "origin": "localhost",
            "methods": ["GET", "HEAD"],
            "credentials": false,
            "headers": ""
        },
        "routes": {
            "/foos": "/demo/menu/items",
            "/bar/:id": "/demo/menu/item",
            "/baz/*": "/templates/css/",
        }
    },
    "ssl": {
        "key": "./ssl.key",
        "cert": "./ss.crt"
    },
    "threads": {
        "maxThreads": 16,
        "maxThreshold": 50,
        "minThreshold": 10,
        "interval": 500
    },
    "socketio": {
        "port": 1338
    },
    "logging": {
        "adapter": "file",
        "options": {
            "file": "/logs/raddish.log"
        }
    },
    "cache": true,
    "format": "json",
    "gzip": true,
    "plugins": "/plugins",
    "port": 1337,
    "public": "/public"
}
~~~