---
title: Essentials - Component Config
layout: default
header: Component Config
navigation: guide
---

Component config is a powerfull tool which allows you to override certain variables without having to write a complete object to do so.
There are two files for which the system will check. Which is the ```config.json``` in the component directory,
or the ```<component_name>.json``` file in the config directory of the application (if specified).

The file in the application config directory serves as a fallback when the ```config.json``` in the component folder isn't found.
In the tutorial extension details on this file are shown.
Below I will give an example of how a component config file might look like:

{% highlight json %}
{
    "table": {
        "account": {
            "db": "mongo",
            "name": "accounts"
        },
        "character": {
            "db": "mongo",
            "name": "characters"
        }
    },
    "dispatcher": {
        "controller": "product"
    }
}
{% endhighlight %}