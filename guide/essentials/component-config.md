---
title: Component Config
author: Jasper van Rijbroek
layout: default
navigation: guide
---

Within raddish it is possible to have certain config files.
Config files are separated into a certain order and inheritance and dominance.

The dominance order is as follows.

- Object overrides
- Application config file (if exists)
- Component config file (if exists)
- Default values

As you can see the system will try to "assume" the default values (which will be explained later)
