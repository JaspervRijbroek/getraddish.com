---
title: Essentials - Identifiers
layout: default
header: Identifiers
navigation: guide
---

The identifiers are another powerfull tool to receive objects and to interact with them.
The identifiers have a specific format and are URIs (Unique Resource Identifiers) as well.
Later on in the advanced tutorial I will give an example to register your own Identifier Locator.
The identifiers are as follows:
            
```com://<application>/<component>.<path>.<name>```
Where path is also dot-separated.

Below a few examples of identifiers and what kind of objects they return.

```com://demo/foo.model.bar```
This identifier will return the model bar from the component foo in the demo application.

```com://home/bar.database.table.baz```
This identifier will return the table object baz from the bar component in the home application.

I hope that this makes the identifiers a little more clear.
In the tutorial you will find some more to get more familliar with them.