---
title: Essentials - File Structure
layout: default
header: File Structure
navigation: guide
---

Below I will show the complete file structure for a component, ofcourse when there are no file overrides the folders don't have to be created.
It is ofcourse possible to add own custom folders if needed. Also the config.json is optional and used for component config.

The component_name.js must have the same name as the component and is the file which is first called when requesting a component.

{% highlight bash %}
<component_name>
├── controller/
│   └── permission/
│   └── behavior/
├── database/
│   ├── adapter/
│   ├── row/
│   ├── rowset/
│   └── table/
│       └── behavior/
├── dispatcher/
│   └── authenticator/
├── model/
├── view/
├── <component_name>.js
└── config.json
{% endhighlight %}