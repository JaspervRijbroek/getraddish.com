---
title_extra: Logging
author: Jasper van Rijbroek
layout: guide
navigation: guide
---

The logging object in the config has a few options.  
The default logging adapters are ```console``` and ```file```, the ```console adapter``` goes without further options   
The ```file adapter``` only has an option called file this is the file which the logs will be written to.  

When an adapter generates an error, this will be logged to the console and the ```console adapter``` is used.

If written to a subfolder be sure that this folder is present, else it will fall back to the ```console adapter```.

## Create your own

It is possible to create your own error handlers  
Here you can add your own functionality and checks on how you want the errors to be logged.

Because the error logging (still) happens in RaddishError we you have to map the error codes to your error messages.   
As an example I have added the file adapter.

```javascript
var fs      = require('fs');
var path    = require('path');

function FileAdapter(config) {
    this.codes = {
        404: 'Not Found',
        500: 'Error'
    };

    try {
        this.file = fs.openSync(process.cwd() + config.file, 'a+');
    } catch(error) {
        console.log('Path ' + path.dirname(config.file) + ' not found falling back to console');
    }
}

FileAdapter.prototype.log = function(code, message) {
    var type = this.codes[code] ? this.codes[code] : 'Info';
    var date = new Date();

    fs.writeSync(this.file, '[' + date.toISOString() + '][' + type + '] ' + message + "\r\n");
};

module.exports = FileAdapter;
```

The most important functions is the log function.  
This method will export the error message to its destination.