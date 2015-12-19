---
title: Behaviors
author: Jasper van Rijbroek
layout: guide
navigation: guide
---

Behaviors are the part where reusable code and DCI lays. The behaviors at this moment are living in two separate parts in Raddish  
these are the controller and table layers.

## Important knowledge
Behaviors do have some explaining added to them.
Because behaviors are executed in a [Chain of Responsibility](http://en.wikipedia.org/wiki/Chain-of-responsibility_pattern) it means that if one behavior breaks the entire loop stops,
and the request will fail.

Next to this the behaviors are almost like event listeners except that the value returned will be the value used in the rest of the framework.

## Which data to use
Within each layer and each kind of action you have different data which you can use.

The general guideline is in the ```onInitialize``` methods you create the roles of DCI (when using DCI),  
in the ```onBefore``` you have the raw data in the controller the files and fields and on table level the request data.
And in the ```onAfter``` methods you have the parsed data on the controller level and the row/ rowset object on table level.
 
Also data you bind on the context you can always use later on in the chain.