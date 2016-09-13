---
title: Docs
title_extra: Components
author: Jasper van Rijbroek
layout: guide
navigation: guide
---

Components are the heart of raddish, these will connect to data sources and return the formatted data as json or other object back to you.
However a component is separated into a few smaller pieces. All of these we will cover in its own section.

<p class="warning">
    <strong>Be advised! all the files which fall under a component are for overrides and extensions only!</strong><br/>
    <strong>Except for the component file itself!</strong>
</p>

## The component file
The first thing we will start out with is the component file itself. This file needs to be added for the system to know that your component is there.  
If this file is missing you we get a ```404``` error telling the component isn't found.

The thing we do in this file is starting the dispatcher of the component, after the dispatcher the system will find its way to the correct object.

An example of how this file could be:

```javascript
function ComponentFoo(request, response) {
    ObjectManager.get('com://demo/foo.dispatcher.http')
        .then(function(dispatcher) {
            dispatcher.dispatch(request, response);
        });
}

module.exports = ComponentMenu;
```

### Explanation:  
In this file we create a function which accepts request and response as parameters,
after this we will make use of the global [ObjectManager](/api/raddish/object/manager.html) object.  
Of the ```ObjectManager``` object we call the ```get``` method, in here we pass the identifier string of the http dispatcher.

After the call has been done we get a dispatcher object. In here we call the [dispatch](/api/raddish/classes/AbstractDispatcher.html#method_dispatch) method of the dispatcher and send the request and response as parameters.