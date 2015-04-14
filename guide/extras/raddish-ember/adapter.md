---
title: Adapter
author: Jasper van Rijbroek
layout: guide
---

Within Raddish you can have a few applications, Raddish-Ember allows you to specify these applications,
within an adapter you only have to specify the application and most other things will be taken care of automatically.

The adapter and serializer within Ember are a team together, this is also the same in Raddish-Ember,
so you also have to use the serializer together with the adapter (This is only needed for post/ delete actions).

Below an example.

```javascript
App.ApplicationAdapter = RaddishAdapter.extend({
    application: 'site' // "site" is the default value
});

App.ApplicationSerializer = RaddishSerializer.extend();

App.DemoAdapater = RaddishAdapter.extend({
    application: 'demo'
});
```