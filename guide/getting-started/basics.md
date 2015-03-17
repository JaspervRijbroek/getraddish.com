---
title: Basics
layout: guide
---

# Basics
Here we will tell you about some basics of Raddish.  
These you will need further in this guide.

## MVC
Raddish at its core is an MVC framework, if you don't know what MVC is you can best read [this article](http://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller){:target="_blank"}.
MVC was chosen for its nice separation of concern and its possible extension for DCI.

In Raddish we have split the MVC triad down some more, we have:

- Controllers
- Models
- Tables
- Rowsets
- Rows
- Views

This is done so you have more control over what happens where and this allows for cleaner code as well.

## DCI
DCI stands for Data Context Interaction, for more on this subject you can [look here](http://en.wikipedia.org/wiki/Data,_context_and_interaction){:target="_blank"}.

## Identifiers
Within Raddish identifiers are being used to load and receive certain objects.
Identifiers are based upon urls and can be used virtually everywhere.

The identifiers are build like this:
```<application>://<package>/<path>.<name>```

- application: The application you want to call
- package: The component you want the object from
- path: A dot separated string to the object
- name: The name of the object to recieve
  
An example is:  
```foo://bar/database.table.baz```  
This will get the baz table from component bar located in the application foo.

When this object isn't found, don't worry, Raddish has a fallback system build in so it will try to get a suitable replacement for this object.

## Behaviors
Behaviors in Raddish can contain DCI methods or reusable code. Behaviors can only be bound to Controllers and Tables.
More on behaviors will be explained later on.

## Component Config
Component config is a sollution for certain projects. It will try to read data form a JSON file,
in which data for behaviors, table names etc. is stored.

You can use component config to make object overrides obsolete or remove code from the object overrides.

More on this later.