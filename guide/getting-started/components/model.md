---
title: Docs
title_extra: Model
author: Jasper van Rijbroek
layout: guide
override_only: true
navigation: guide
---

Within Raddish the model is responsible for getting all the data. The data layer is therefore separated into a few layers with the model as the primary layer.  
For all the select queries to Raddish the model will create and execute the queries to the selected database.

The model is also responsible for the definition of the states. For the query builder which we use to create the database queries I refer to the guide of the [query builder](/guide/extras/universal-query.html).
  
## Default behavior
Within the models you have the query methods

- buildQueryColumns
- buildQueryFrom
- buildQueryJoins
- buildQueryWhere
- buildQueryGroup
- buildQueryOrder
- buildQueryLimit

Which might look like a sql query, this is used for the building of the queries.  
Although the query builder doesn't care where the code is, it is advised to place the code in its respective place.

By default the model is aware of the unique columns in the database and its keys.  
The unique columns and keys will automatically be set and are automatically filtered on in the buildQueryWhere if the state has a value.

### States

The states are set per model. To be specific, this is done in the constructor after the parent model is called.

There are some special cases, there are default states and unique columns.
The default states are added automatically in the parent model.

The default states are:

- search
- limit
- offset

### getItem and getList
The getItem and getList are the methods which will queue the table object to get the data.  
When talking to external API's or applications this is the place to do this. In here you can implement your own logics.

### Example
In the following example we will show a little about the query builder, the states and how they relate to each other.

<div class="code-highlight">
    <span class="js-copy-to-clipboard copy-code">copy</span>``
    {% highlight javascript %}
var Model = require('raddish').Model;

class FooModel extends Model {
    constructor(config) {
        super(config);
        
        this.states.insert('bar_id', 'int');
    }
    
    buildQueryWhere(query) {
        if(this.states.get('bar_id')) {
            query.where('tbl.bar_id').is(this.states.get('bar_id'));
        }
        
        if(this.states.get('search')) {
            query.where('tbl.title').like(this.states.get('search'));
        }
    
        return super.buildQueryWhere(query);
    }
};{% endhighlight %}
</div>

## Component Config
At this point the model object doesn't support any component config values.