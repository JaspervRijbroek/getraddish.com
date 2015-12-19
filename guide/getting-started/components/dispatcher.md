---
title: Component Dispatcher
author: Jasper van Rijbroek
layout: guide
override_only: true
navigation: guide
---

The dispatcher is responsible for handling request and response, next to this, in raddish the dispatcher will also send the needed data to the controller.

## Default behavior
Within the dispatcher it is the default behavior to send you to the controller having the same name as the component whenever there is no view name specified.
This default behavior can be overridden with an object override or a component config value.

Also by default the dispatcher handles the user authentication. and it will search to the authenticator with the name default.
This as well can be overridden in an object override or a component config value.

An example of an object override and component config:

<div class="row">
    <div class="col-md-6">
{% highlight javascript %}
var Dispatcher  = require('raddish').Dispatcher;
var util        = require('util');

function DemoDispatcher(config) {
    Dispatcher.call(this, config);
};

util.inherits(DemoDispatcher, Dispatcher);

DemoDispatcher.prototype.initialize = function(config) {
    config.controller = 'foo';
    config.authenticator = 'bar';

    return Dispatcher.prototype.initialize.call(this, config);
};

module.exports = DemoDispatcher;
{% endhighlight %}
    </div>
    <div class="col-md-6">
{% highlight json %}
{
    "dispatcher": {
        "controller": "foo",
        "authenticator": "bar"
    }
}
{% endhighlight %}
    </div>
</div>