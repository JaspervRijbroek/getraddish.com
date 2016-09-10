---
title_extra: System calls
author: Jasper van Rijbroek
layout: guide
navigation: guide
---

Within Raddish it is possible to call all kind of files. This goes with the ```ObjectManager```.  
This object makes sure that the object you receive is the correct one.

Apart from using the ```ObjectManager``` you can also use the ```ObjectLoader```.

I will explain the difference.

## ObjectLoader
The ObjectLoader object is a global object, which can be used to require objects.

The ObjectLoader has a few public methods.  
These are:

- require: Used to require files based on the identifier. This returns an uninitialized object.
- addLocator: The method used to add custom locators.
- load: This method will return a promise holding the initialize method.

### Example
Below is an example usage of the ObjectLoader.

```javascript
// Here we will require the model from the foo component, for extendability purposes.
var RemoteModel = ObjectLoader.require('com://demo/foo.model.bar'),
    util = require('util');
    
function BazModel(config) {
    RemoteModel.call(this, config);
}

util.inherits(BazModel, RemoteModel);

module.exports = BazModel;

```

## ObjectManager
The ObjectManager requires the ObjectLoader object to receive an object by identifier.  
But apart from that the ObjectManager also acts like a base class from which almost every object in Raddish extends from.

The ObjectManager therefor also utilizes [Mixins](/guide/advanced/mixins.html) with its method mixin which accepts an object.