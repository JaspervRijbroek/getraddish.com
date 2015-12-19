---
title: Essentials - File Structure
layout: default
header: File Structure
navigation: guide
---

The components in Raddish are heavily dependent on a file structure. When a part of the component isn't found its likely to be an issue here.

However, most of the component files are created when overriding.
The only file required is the [component file]({{site.baseurl}}getting-started/setup/component-file.html) defined here as ```<component_name>.js``` this file must have the same name as the component itself.

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