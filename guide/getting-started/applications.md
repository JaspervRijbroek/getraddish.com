---
title_extra: Applications
author: Jasper van Rijbroek
layout: guide
navigation: guide
---

The application will search for the component and if present it will start your components when requested.  
For this to happen a component holds a few values, where it can find the components and (if enabled) where to find the config files.

Before this all works you must create an application file.  
Which can look like this:

<div class="js-copy code-highlight">
	<span class="js-copy-to-clipboard copy-code">copy</span>
    {% highlight javascript %}
var Application = require('raddish').Application;
var util        = require('util');

function HomeApp() {
    Application.call(this);

    this.setConfig({
        component: __dirname + '/components',
        config: __dirname + '/config'
    });
};

util.inherits(HomeApp, Application);

module.exports = HomeApp;{% endhighlight %}
</div>

The application has quite some functions which we have added the basics in the Application object.
This is the object we will require next to ```util```.

First we will call the parent so all the essentials are into place. After this we will call the setConfig method.
This method only accepts an object as single parameter. in this object you must include the component key which holds a string to a directory.

This directory holds all your components.
The second key is config (which is optional), this also hold a string to a folder, in this folder all your
application level [component config](/guide/essentials/component-config.html) files are stored.

After this we inherit the prototype in the util.inherits call and return the application object.