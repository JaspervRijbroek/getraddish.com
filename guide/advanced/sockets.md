---
title: Docs
title_extra: Sockets
author: Jasper van Rijbroek
layout: guide
navigation: guide
---

[Socket.io](http://socket.io) is also supported right out-of-the-box and with this you can also use all its functions,  
which is available trough ```require('raddish').Socket.io``` this will return an initialized and connected socket.io instance.

By default a basic socket.io is implemented in form of a database adapter called ```socketable```,  
this will emit events on add, edit and delete to certain rooms.

Of course it is also possible to add your own events and methods, this can be done in plugins or in behaviors.
An example plugin:

<div class="code-highlight">
    <span class="js-copy-to-clipboard copy-code">copy</span>
{% highlight javascript %}
class SocketPlugin {
    onBeforeRegister(alias, path) {
        // The addListener method will add an extra listener function to the sockets.
        Socket.addListener('demo', function(message) {
            // We only log the received message but you can do everything you want here,
            // even ObjectManager calls.
            console.log(message);
        });        
    }
}

module.exports = SocketPlugin;
{% endhighlight %}
</div>