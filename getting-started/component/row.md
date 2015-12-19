---
title: Component - Row
layout: default
header: Row
navigation: guide
---

In the row object the actual data resides. This object can have extra functions. <br/>
It is possible to extend the row object on the load, save and delete functions but this can better be done in a behavior.

In the following example I will show how we get the category of a row, if category_id is set. <br/>
We will do this using Promises.

{% highlight javascript %}
var Row     = require('raddish').Row;
var util    = require('util');
        
function DemoRow(config) {
    Row.call(this, config);
}
        
util.inherits(DemoRow, Row);
        
DemoRow.prototype.getCategory = function() {
    var self = this;
        
    if(this.data.category_id) {
        return this.getObject('com://demo/foo.model.category')
            .then(function(model) {
                return model.set('id', self.data.category_id).getItem();
            });
    } else {
        return {};
    }
};
        
module.exports = DemoRow;
{% endhighlight %}


In the next tutorial we will cover the view object.