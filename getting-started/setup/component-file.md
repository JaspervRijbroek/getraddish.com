---
title: Setup - Component File
layout: default
header: Component File
navigation: guide
---

When you have created a component directory and the component file isn't created you will recieve a 404 error (component not found).
To prevent this error you can create the component file, here we will basically call the [dispatcher]({{site.baseurl}}getting-started/component/dispatcher.html),
which will take over the rest of the request.

In the component file you can do other actions when the component is called.

Below is an example of the component file.

{% highlight javascript %}
function DemoComponent(request, response) {
    ObjectManager.get('com://demo/demo.dispatcher.http')
        .then(function(dispatcher) {
            dispatcher.dispatch(request, response);
        });
}
        
module.exports = DemoComponent;        
{% endhighlight %}