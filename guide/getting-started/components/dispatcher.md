---
title: Docs
title_extra: Dispatcher
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

When for the controller and the authenticator only an name is given instead of a complete identifier,
it will search for the object using the the identifier of the dispatcher.

<div class="row">
    <div class="col-md-6">
        <p><strong>Object Override</strong>:</p>
        <div class="code-highlight">
            <span class="js-copy-to-clipboard copy-code">copy</span>
    {% highlight javascript %}
var Dispatcher  = require('raddish').Dispatcher;

class DemoDispacher extends Dispatcher {
    _initialize(config) {
        config.controller = 'foo';
        config.authenticator = 'bar';
        
        super._initialize(config);
    }
}

module.exports = DemoDispatcher;{% endhighlight %}
        </div>
    </div>
    <div class="col-md-6">
        <p>Component Config:</p>
        <div class="code-highlight">
            <span class="js-copy-to-clipboard copy-code">copy</span>
        {% highlight javascript %}
{
    "dispatcher": {
        "controller": "foo",
        "authenticator": "bar"
    }
}{% endhighlight %}
        </div>
    </div>
</div>