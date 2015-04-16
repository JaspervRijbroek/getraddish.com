---
title: Model
author: Jasper van Rijbroek
layout: guide
---

Within Raddish the model is responsible for getting all the data. The data layer is therefore separated into a few layers with the model as the primary layer.  
For all the select queries to Raddish the model will create and execute the queries to the selected database.

The model is also responsible for the definition of the states. For the query builder which we use to create the database queries I refer to the guide of the [query builder](/guide/extras/universal-query.html).  