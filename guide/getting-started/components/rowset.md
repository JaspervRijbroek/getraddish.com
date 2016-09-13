---
title: Docs
title_extra: Rowset
author: Jasper van Rijbroek
layout: guide
override_only: true
navigation: guide
---

The rowset object is a collection of row objects.
Also when looping through the rows (rowset.rows) you will get row objects with all the bound methods.

## Extending functionality
It is possible to extend/ add extra functions to the rowset.

Just like the row object there are the ```save``` and ```delete``` methods, which will directly start the associated row method.
And here you can also add extra functionality which will also be executed directly.

When extra methods are added these will only be available to the rowset object and when looped through the rowset object they will not be added to the row object.