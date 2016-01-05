---
title: URLs
author: Jasper van Rijbroek
layout: default
header: URLs
navigation: guide
---

Within raddish almost everything is based on URLs. That is why in raddish it is a must to understand the urls,
because this is also how you can structure you applications.

The urls are build up in the following way.  
```http://example.com/<application>/<component>/<view>```

With this example the file structure and urls should show an resemblance.
When starting to build raddish you need to register an application under an alias, this alias is which you can use in a url like this.
Also within an application you need to create components, these components have a certain name, these you can use here.

Only the view needs some special attention, because raddish isn't really view based but more format based the view will tell which controller and table to call.
So the view will be more of a selector then an actual view.

More about the view will be explained in the rest of the guide.