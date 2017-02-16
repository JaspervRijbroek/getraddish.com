---
title: Docs
title_extra: System calls
author: Jasper van Rijbroek
layout: guide
navigation: guide
---

Within Raddish it is possible to call all kind of files. This goes with the ```ObjectManager```.  
This object makes sure that the object you receive is the correct one.

## ObjectManager
The ObjectManager requires the ObjectLoader object to receive an object by identifier.  
But apart from that the ObjectManager also acts like a base class from which almost every object in Raddish extends from.

The ObjectManager therefor also utilizes [Mixins](/guide/advanced/mixins.html) with its method mixin which accepts an object.