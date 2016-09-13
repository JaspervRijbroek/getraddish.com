---
title: Docs
title_extra: Identifiers
author: Jasper van Rijbroek
layout: guide
navigation: guide
---

Before you start to read this section, please make sure you have read: [URLs](/guide/essentials/urls.html).
This is needed because the identifiers are almost the same as the URLs used in raddish.

Within Raddish the objects use identifiers to be retrieved. These identifiers use a defined schema.
Below some examples will be given.

``` com://foo/bar.database.table.baz ```

This identifier will instruct the system that a component is called
the component being called is foo and we request the baz file in the "database/table" folder of the foo component.

So basically you can split up a component like this:

``` <locator>://<application>/<component>.<path>.<name> ```

- Locator: The locator to use, by default core and com are supported.
- Application: In which application the component to call resides.
- Component: The component to call.
- Path: A dot separated string as to path to follow to the object.
- Name: The name of the file to load.

Note: Core locator work a little different although using the same data.
A core identifier could look like this:

``` core:database.table.default ```

This core identifier will try to get the file "default" in the path "database/table".
Most of the time you wouldn't need to load core object directly however this functionality is available to you.

Basically a core identifier looks like this:

``` core:<path>.<name> ```