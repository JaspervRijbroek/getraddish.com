---
title: Docs
title_extra: Mixins
author: Jasper van Rijbroek
layout: guide
navigation: guide
---

Raddish also allows use of mixins, the basics behind mixins is the getMixableMethods method.  
This method will return an object containing the mixable methods in an object like this, the keys are the method names and the values are the functions itself.

In every object extended from the ```ObjectManager``` the mixin method is available in the ```this``` object.  
This will automatically set the target to the current object. The first parameter to this function is the object you want to be mixed.

Below I will give an example for this function:

<div class="code-highlight">
    <span class="js-copy-to-clipboard copy-code">copy</span>
{% highlight javascript %}
var Model = require('raddish').Model,
    util = require('util');

class MixableObject {
    getMixableMethods() {
        return {
            test: this.test
        }
    },
    test() {
        ...
    }
}

class FooModel extends Model {
    constructor(config) {
        super();
        
        // After the mixin call this object also has the method test.
        // Also when the object is a function type it will be automatically created.
        this.mixin(new MixableObject());
    }
}

module.exports = FooModel;
{% endhighlight %}
</div>