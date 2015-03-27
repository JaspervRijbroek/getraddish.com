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

<dl>
    <dt>
        db
    </dt>
    <dd>
        This object hold all the database connection information.
        By default behavior the "default" connection needs to be present.
        This one will be used when no other database connection is specified.
    </dd>
    
    <dt>
        router
    </dt>
    <dd>
        <p>
            The router object holds the values for CORS requests, and hold custom defined routers.
            May the CORS values be clear for them selves otherwise you can check here: <a href="http://www.w3.org/TR/cors/" target="_blank">CORS Specification</a>.
        </p>
        
        <p>
            The routes however are something different. There are redirects and state urls, I will try to explain.
        </p>
        
        <p>
            Simple complete url redirects: 
            This is as simple as doing: <code>"/foos": "/demo/menu/items"</code>
        </p>
        
        <p>
            For automatic dynamic states you can do: 
            <code>"/bar/:id": "/demo/menu/item"</code> In this case the state id will automatically be set when available.
        </p>
        
        <p>
            For complete redirects you can add: 
            <code>"/baz/*": "/templates/css/"</code> This will redirect everything with <code>"/baz/"</code> to <code>/templates/css/</code>.
        </p>
    </dd>
    
    <dt>
        ssl
    </dt>
    <dd>
        This setting can only be false or an object.<br />
        When false (or not defined) ssl will not be started.<br /> 
        When it is an object key and cert are required and must point to the of the ssl key and ssl certificate files.
    </dd>
    
    <dt>
        Threads
    </dt>
    <dd>
        <p>
            Can be true, false, not defined or an object,<br /> 
            when true it will start threads with the default values.<br /> 
            When an object it will override the default values with your custom values, displayed here are the default values.
        </p>
        
        <p>
            The <code>maxThreshold</code> and <code>minThreshold</code> is the amount of usage a process might have before an extra thread is started or removed.<br /> 
            The <code>interval</code> is the interval in millisecond when the system must check for process usage.
        </p>
    <dd>
</dl>