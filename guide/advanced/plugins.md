---
title: Plugins
author: Jasper van Rijbroek
layout: default
navigation: guide
---

Within Raddish it is possible to let the system do certain action upon certain events.  
These events are registred in Plugins, added in the separate folder defined in the [config file](/guide/essentials/config.html).

Events which can be fired are separated into a few different groups,
these are:

- Application Events
- System Events
- Custom Events

## Application Events
Application events are fired when an application gets registered.  
And thus having the events ```onBeforeRegister``` and ```onAfterRegister```.

The ```onBeforeRegister``` has as parameters the alias of the application to register and the path.  
The ```onAfterRegister``` has the raw application as a parameter.

## System events
On the system level by default there are the start events.  
These events are called just before and just after the server has started.

Both of the start events ```onBeforeStart``` and ```onAfterStart``` get no parameters.  
In her you can add extra functions which need to be called at these start events.

## Custom events
Within the system it is possible for you to call your own events.  
I will give an example below:

```javascript
var Plugin = require('raddish').Plugin,
    plugin = new Plugin();
    
plugin.get('custom.foo')
    .execute('before.bar', 'any', 'number', 'of', 'parameters')
    .then(function(data_from_plugin) {
        ...
    });
```

The ```get``` method will be able to handle a dot separated value.  
The last value can be a file or a folder, when a folder is presented all the files in this folder will be loaded  
else the only file found is loaded.

The ```execute``` method the first parameter is required, this is the dot separated name of the function which is called,
all the other parameters are optional and there is no fixed number of parameters.