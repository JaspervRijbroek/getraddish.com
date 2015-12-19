---
title: Component - View
layout: default
header: View
navigation: guide
---

The view object is responsible for formatting the data to the format you need.
By default the JSON format is used, but it is possible to create views for xml or other types.

When creating a specialized view you can override the display function.
Below I will show you a JSON override for example.

{% highlight javascript %}
var ViewJson    = require('raddish').ViewJson;
var util        = require('util');
        
function DemoJson(config) {
    ViewJson.call(this, config);
}
        
util.inherits(DemoJson, ViewJson);
        
DemoJson.prototype.display = function() {
    var self = this;

    if (Inflector.isPlural(self.request.view)) {
        return Promise.cast(self.data.getData())
            .then(function(data) {
                return [data, self.model.getTotal()];
            })
            .spread(function(data, total) {
                return JSON.stringify({
                    items: data,
                    total: total
                });
            });
    } else {
        return Promise.cast(self.data.getData())
            .then(function(data) {
                return JSON.stringify({
                    item: data
                });
            });
    }
};
        
module.exports = DemoJson;
{% endhighlight %}

You are now ready to continue to the more advanced parts of Raddish.
This concludes the tutorial of Raddish.