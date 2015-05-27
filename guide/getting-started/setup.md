---
title: Setup
layout: guide
author: Jasper van Rijbroek
---

Raddish requires you to have two essential files, these are a startup file and a config file. 
The startup file can be a file like app.js or index.js the config file will be a JSON file.

In the app.js file you will need to require raddish, register your applications, provide the config file
 and start the web server.
 
The app.js file could look like this.

``` javascript
var raddish = require('raddish');

raddish.setConfig(<path to config file>);
raddish.setApplication('home', 'apps/home/app');
raddish.checkUpdate();

raddish.start();
```

The ```setConfig``` has a single parameter, this can be a string to a file
which will then be included, or this can be an object.  
This will be the config used globally within Raddish. Go here to read more about the [config file](/guide/essentials/config.html).

After the ```setConfig``` we call ```setApplication``` this method has 2 parameters and can be called many times.  
the first is the alias of the application, which will be represented in the [identifiers](/guide/essentials/identifiers.html) and the [url](/guide/essentials/urls.html).  
The second parameter is the path to the javascript file which will hold the base for the application.

Then the ```checkUpdate``` method is called which is optional, this method will check for updates on raddish.  
If there are updates you will get a message prompt about this.