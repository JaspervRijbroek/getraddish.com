---
title_extra: Config
author: Jasper van Rijbroek
layout: guide
navigation: guide
---

Applications written with Raddish are required to create a config.json which needs to be send to Raddish before starting.
Below I will give an example config file, with more detail underneath.

<div class="code-highlight">
    <span class="js-copy-to-clipboard copy-code">copy</span>
    {% highlight javascript %}
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
}{% endhighlight %}
</div>

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
    
    <dt>
        socketio    
    </dt>
    <dd>
        <p>
            The value can be true, an object, false or not defined.
        </p>
        
        <p>
            When true it will start sockets on port 1338, 
            when an object you can manually set the <code>port</code> to start on.
        </p>
    </dd>
    
    <dt>
        logging
    </dt>
    <dd>
        <p>
            With the logging object you can specify a logging object. 
            Whenever an error is thrown the RaddishError object will log to this object.
        </p>
        
        <p>
            For more details read here.
        </p>
    </dd>
    
    <dt>
        plugins
    </dt>
    <dd>
        Specify the path to the plugins directory. 
        When not defined plugins will not be used in the system.
    </dd>
    
    <dt>
        cache
    </dt>
    <dd>
        This value can be true, false or not defined. 
        When true it will cache the initialized objects resulting in a huge speed advantage. 
        When false or not defined the system will not cache any objects.
    </dd>
    
    <dt>
        gzip
    </dt>
    <dd>
        Enable gzip compression or not. 
        When the client doesn't support gzip compression the result isn't compressed.
    </dd>
    
    <dt class="required">
        format
    </dt>
    <dd>
        This value is required. 
        Specify the default returned value.
    </dd>
    
    <dt class="required">
        port
    </dt>
    <dd>
        This value is required. 
        Specify on which port the system starts.
    </dd>
    
    <dt class="required">
        public
    </dt>
    <dd>
        This value is required. 
        Specify the folder where the public files are stored.
    </dd>
</dl>

<div class="note">
    * = required
</div>