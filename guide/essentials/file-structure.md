---
title: File Structure
author: Jasper van Rijbroek
layout: guide
navigation: guide
---

Raddish is a system based on the file structure. Which in turn create clarity among different projects.
The components their file structure is fixed, starting from the applications component directory to read more about this you can go [here](/guide/objects/application.html).

Without further ado, below the file structure.
This are all the folders there are basically supported within Raddish, of course it is possible for you to add your own directories where you need them.

```bash
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
```