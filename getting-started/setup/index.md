---
title: Setup - Introduction
layout: default
header: Introduction
navigation: guide
---

To use Raddish the first thing we have to do is make sure it is included as a dependency.
To do this we can issue the command: ```npm install raddish --save```.

After this you can ofcourse also include your own development dependencies (if needed).

Next step is the ```config.json``` this file is used by Raddish and will hold the basic configuration.
In this example I have shown the minimum requirements, for more options go to the [config page]({{site.baseurl}}getting-started/essentials/config.html).
It might look like this:
        
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
    "format": "json",
    "port": 1337,
    "public": "/public"
}
{% endhighlight %}

When the configuration file is into place we need to create the main entry point for the system.
This mostly is a file called ```index.js``` or ```app.js``` (you can also give this file a different name).

Within this file we will require Raddish and give it our config file.
Also here we will also register our applications, and start our service.
        
{% highlight javascript %}
var raddish = require('raddish');               // Require the raddish module.
    
raddish.setConfig('./config.json');             // This function accepts a string or an object for the config.
raddish.setApplication('demo', 'app/demo/app'); // Here we will register the demo application.
raddish.checkUpdate();                          // This function will automatically check for updates and let you know.
    
raddish.start();                                // Start raddish.
{% endhighlight %}