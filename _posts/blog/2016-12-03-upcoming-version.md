---
layout: blog
author: Jasper van Rijbroek
category: blog
---

Currently a lot of work is being put in the new Raddish version 3.  
Which is to be something completely new and yet still feels like the old and trusted.

<!-- more -->

A complete rewrite of the core is done for stability and speed,  
but also other modules have been created which where before part of the core.  

Also the following modules will be included:
- raddish-db: A complete and abstract database layer containing a query builder and one simple API.
- raddish-loader: An abstract object loader depending on identifiers.
- raddish-threads: An auto scaling threads class.
- raddish-inflector: A simple inflector class.

If you like these parts please use them in your project as you see fit.  
Just like Raddish these modules are MIT licensed and free to use and to be found on NPM.

The modules and this version of Raddish will also be completely compatible with [Yarn](https://yarnpkg.com/) for those who use it.