---
title: Essentials - Config
layout: default
header: Config
navigation: guide
---

Raddish is config based and everything will come from a config file.
In the config file you register the databases, ssl settings and a lot more.
In this section I will explain the config file in total detail.

{% highlight json %}
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
{% endhighlight %}

**db**
This are the database connections.
The connection ```default``` is required.

For the details ```host```, ```user```, ```password``` and ```database``` are required, ```prefix``` and ```port``` are optional.
When you are using another ```port``` than default please add port.
Where as ```prefix``` will give an extra layer of security.

**router**
This setting can be an object or not defined.
Here we can add extra settings to the router.
We can controll how CORS (Cross Origin Resource Sharing) and the routes.

Simple complete url redirects:
This is as simple as doing: ```"/foos": "/demo/menu/items"```

For automatic dynamic states you can do:
```"/bar/:id": "/demo/menu/item"``` In this case the state id will automatically be set when available.


For complete redirects you can add:
```"/baz/*": "/templates/css/"``` This will redirect everything with ```"/baz/"``` to ```/templates/css/```.


**ssl**
This setting can only be false or an object.
When false (or not defined) ssl will not be started.
When it is an object ```key``` and ```cert``` are required and must point to the of the ssl key and ssl certificate files.


**threads**
Can be true, false, not defined or an object,
when true it will start threads with the default values.
When an object it will override the default values with your custom values, displayed here are the default values.

The ```maxThreshold``` and ```minThreshold``` is the amount of usage a process might have before an extra thread is started or removed.
The ```interval``` is the interval in millisecond when the system must check for process usage.


**socketio**
The value can be true, an object, false or not defined.

When true it will start sockets on port 1338,
when an object you can manually set the ```port``` to start on.


**logging**
With the logging object you can specify a logging object.
Whenever an error is thrown the RaddishError object will log to this object.

For more details read <a href="/advanced/logging.html">here</a>.


**plugins**
Specify the path to the plugins directory.
When not defined plugins will not be used in the system.


**cache**
This value can be true, false or not defined.
When true it will cache the initialized objects resulting in a huge speed advantage.
When false or not defined the system will not cache any objects.


**gzip**
Enable gzip compression or not.
When the client doesn't support gzip compression the result isn't compressed.


**format**
This value is required.
Specify the default returned value.


**port**
This value is required.
Specify on which port the system starts.


**public**
This value is required.
Specify the folder where the public files are stored.