---
title: Mixins
author: Jasper van Rijbroek
layout: guide
---

Raddish also allows use of mixins, the basics behind mixins is the getMixableMethods method.  
This method will return an object containing the mixable methods in an object like this, the keys are the method names and the values are the functions itself.

In every object extended from the ```ObjectManager``` the mixin method is available in the ```this``` object.  
This will automatically set the target to the current object. The first parameter to this function is the object you want to be mixed.

Below I will give an example for this function:

```javascript
var Model = require('raddish').Model,
    util = require('util');

function MixableObject() {
    getMixableMethods: function() {
        return {
            test: this.test
        }
    },
    test: function() {
        ...
    }
}

function FooModel(config) {
    Model.call(this, config);
    
    // After the mixin call this object also has the method test.
    // Also when the object is a function type it will be automatically created.
    this.mixin(MixableObject);
}

util.inherits(FooModel, Model);

module.exports - FooModel;
```