---
title: Essentials - Url
layout: default
header: Url
navigation: guide
---

The system relies a lot on URLs these will be the main entries to the framework.
When going to a URL the system will first check if this is a static file, if so it will return this file.
If not it will traverse the framework.

The urls of the system have a fixed setting.
URLs are build up as follows (this is not for public files) ```http://example.com/<app>/<component>/<view>``` where view is optional.
If new view is given the system will use the plural of the component name for the view. (unless it is overridden in the dispatcher)

I will give some examples:

```http://example.com/demo/foo``` this url will go to the demo application and will run the component foo with the view foos.
```http://example.com/demo/foo/bar``` will go to the same application but will go to the view bar.