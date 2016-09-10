---
title_extra: Controller
author: Jasper van Rijbroek
layout: guide
override_only: true
navigation: guide
---

The controller will handle the request received from the dispatcher.
In most situations you will only use behaviors to extend the functionality of the controller, the default actions in most occasions are enough.

## Default behavior
The default behavior of then controller is that it assumes the needed action you need for a certain request.

When a ```GET``` request is received with a plural view name the controller will return a list of results, however when the view name is singular it will return a single item.
When this item does not exist, it will return an empty item.

With a ```POST``` request the controller will first check if the item exists or not, if not the item will be created and returned with a 201 status.
Whenever the item does exist it will update the existing item with the data in the request.
 
A ```DELETE``` request will remove the item specified, when no unique states are given the action is omitted.

When a request is started, the controller will get the model for the request.
The model the gets the data which is then returned.

## Custom actions
Within Raddish it is possible to add your own custom actions. However these actions will only respond on a ```POST``` request.  
To trigger the action, it must be send as the ```POST``` value ```action```. Otherwise the action will not be called.

The method for the action must be placed in the controller with the name: ```_action<Action_name>```.  
The action name must have a capital first letter.

Be sure to add the permissions and the action you want to call to the controller or else you will encounter an error.

## Permissions
The permissions are handled per controller. Within the controller directory a ```permissions``` can be created with files having the same name as the controller itself.
Within here you can add the permissions per action with your own logic.

This is an example:

```jacascript
var Permission  = require('raddish').Permission;
var util        = require('util');

function DefaultPermission(config) {
    Permission.call(this, config);
}

util.inherits(DefaultPermission, Permission);

DefaultPermission.prototype.canAdd = function(context) {
    if(typeof context.auth.isAdmin == 'function') {
        return context.auth.isAdmin();
    }

    return Promise.resolve(true);
};

module.exports = DefaultPermission;
```

## Behaviors
Within Raddish it is possible to add extra behaviors to the controller.
By default on the controller level there are no behaviors, so any behaviors you want you need to add yourself.

The methods that behaviors can have on the controller level are al follows:

- onInitializeBrowse
- onBeforeBrowse
- onAfterBrowse
- onInitializeRead
- onBeforeRead
- onAfterRead
- onInitializeAdd
- onBeforeAdd
- onAfterAdd
- onInitializeEdit
- onBeforeEdit
- onAfterEdit
- onInitializeDelete
- onBeforeDelete
- onAfterDelete

The behaviors also allow for custom defined actions.  
These follow the same pattern and have the methods ```onInitialize```, ```onBefore``` and ```onAfter```.

[More on behaviors](/guide/getting-started/behaviors.html).

## Component Config
Within the controller some parts can be controlled by component config and object override.

<div class="row">
    <div class="col-md-6">
{% highlight javascript %}
var Controller  = require('raddish').Controller;
var util        = require('util');

function DemoController(config) {
    Controller.call(this, config);
}

util.inherits(DemoController, Controller);

DemoController.prototype.initialize = function(config) {
    // When a behavior is in this component you can just give the behavior name
    // but when it is in another component you must give the full identifier.
    config.behaviors = {
        'uploadable': {},
        'com://demo/menu.controller.behavior.itemable': {}
    };

    return Controller.prototype.initialize.call(this, config);
};

DemoController.prototype.getRequest = function() {
    var request = Controller.prototype.getRequest.call(this);

    request.id = 11;

    return request;
};

module.exports = DemoController;
{% endhighlight %}
    </div>
    
    <div class="col-md-6">
{% highlight json %}
{
    "controller": {
        "demo": {
            "behaviors": {
                "uploadable": {},
                "com://demo.menu.controller.behavior.itemable": {}
            }
        }
    }
}
{% endhighlight %}
    </div>
</div>