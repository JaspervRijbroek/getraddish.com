---
title: Models
author: Jasper van Rijbroek
layout: guide
navigation: guide
---

Because Raddish does its work based on components the models within Ember need to follow a specific naming convention.
Apart from the naming convention you can use them like you are used to.

The naming convention is as follows: lowercase Component and uppercase singular view.  
Examples: ```articlesArticle```, ```eventsEvent```.

The ```articlesArticle``` model will go to the component articles and based on if the identifier is send in the find method,  
it will find a single article or the complete list.