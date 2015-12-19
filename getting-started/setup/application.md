---
title: Setup - Application
layout: default
header: Application
navigation: guide
---

In the previous guide ([introduction]({{site.baseurl}}getting-started/setup/)) we created a configuration file and the inintial file to call.

Within this guide we also registred an application.
Here we will dive deeper in the application files.

Below is an example of a configuration file.
        
{% highlight javascript %}
var Application = require('raddish').Application;
var util        = require('util');
    
function DemoApp() {
    Application.call(this);                     // Call the parent object.
    
    this.setConfig({
        component: __dirname + '/components',   // Set the directory for the components. (required)
        config: __dirname + '/config'           // Set the directory for the config files. (used for component config, optional)
    });
};
    
util.inherits(DemoApp, Application);
    
module.exports = DemoApp;
{% endhighlight %}

Within the example we call ```setConfig```, this method basically is a convenience wrapper around ```this.config```.
You can also directly set values on ```this.config```.

**For the following guide it is best you have basic knowledge of the [file structure]({{site.baseurl}}getting-started/essentials/file-structure.html).**