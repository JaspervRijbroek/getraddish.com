---
title: Row
author: Jasper van Rijbroek
layout: guide
---

The row object is basically a single entity of the data source.
The row object can be extended to allow for extra functionality which you can use further in the framework.

Or you have the possibility to add extra functionality to the row object when it is being saved, updated or deleted.

## Adding extra functionality
All the methods added to the row object can later also be used in a loop through the [rowset](/guide/getting-started/components/rowset.html) object.  
When extra methods are added you can use them further in the framework or even use them in behaviors.

Also it is possible to add extra functions to a save method on row level. (which is preferred over a table override without behaviors).
This can be done on the following methods: ```save```, ```update``` and ```delete```. If you add any method here, this will execute no matter what.

**Note!:**  
When extending the functionality be sure to call the parent. Else return the data.

## Getting the pure data
To get the pure data from the row object you can call the method ```getData``` which will then return an object with only the data.