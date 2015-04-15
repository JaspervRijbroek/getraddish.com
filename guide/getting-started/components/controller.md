---
title: Controller
author: Jasper van Rijbroek
layout: guide
---

The controller will handle the request received from the dispatcher.
In most situations you will only use behaviors to extend the functionality of the requests, the other actions are mostly enough.

## Default behavior
The default behavior of then controller is that it assumes the needed action you need for a certain request.

When a ```GET``` request is received with a plural view name the controller will return a list of results, however when the view name is singular it will return a single item.
When this item does not exist, it will return an empty item.

With a ```POST``` request the controller will first check if the item exists or not, if not the item will be created and returned with a 201 status.
Whenever the item does exist it will update the existing item with the data in the request.
 
A ```DELETE``` request will remove the item specified, when no unique states are given the action is omitted.

When a request is started, the controller will get the model for the request.
The model the gets the data which is then returned.

## Custom actions
Within Raddish it is possible to add your own custom actions. However these actions will only respond on a ```POST``` request.

