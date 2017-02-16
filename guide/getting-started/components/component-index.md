---
title: Docs
title_extra: Component Index
author: Jasper van Rijbroek
layout: guide
navigation: guide
---

Components are the heart of raddish, these will connect to data sources and return the formatted data as json or other object back to you.
However a component is separated into a few smaller pieces. All of these we will cover in its own section.

<div class="note blue-light">
    Be advised! all the files which fall under a component are for overrides and extensions only!<br/>
    Except for the component index itself!
</div>

## The component file
The first thing we will start out with is the component index itself. This file needs to be added for the system to know that your component is there.  
If this file is missing you we get a ```404``` error telling the component isn't found.

The thing we do in this file is starting the dispatcher of the component, after the dispatcher the system will find its way to the correct object.

An example of how this file could be:

<div class="code-highlight">
    <span class="js-copy-to-clipboard copy-code">copy</span>
{% highlight javascript %}
var ObjectManager = require('raddish').ObjectManager;

function ComponentFoo(request, response) {
    return ObjectManager.get('com://demo/foo.dispatcher.http')
        .then(function(dispatcher) {
            return dispatcher.dispatch(request, response);
        });
}

module.exports = ComponentMenu;{% endhighlight %}
</div>