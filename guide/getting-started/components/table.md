---
title: Docs
title_extra: Table
author: Jasper van Rijbroek
layout: guide
override_only: true
navigation: guide
---

The table is called by the model to get all the data from the adapter(server).
However this isn't the only thing the controller will/ can do.

Within the table object it is possible to override the default identity_column and to provide a column map more on this later.

## Naming conventions
Raddish is based on naming conventions. This goes as well for the database tables.
The basic name for the tables are ```<component_name>_<plural_view_name>``` eg: articles_articles. This is without the optional prefix,  
if you have a prefix this has to be prepended.

The ID of the column als has a specific naming convention. This has to be: ```<component_name>_<singular_view_name>_id```.  
Also this column needs to to be the primary key and auto increment.

# Default Behavior
If no config values are given for the table name or the identity_column, these values are assumed as explained above.
Next to this the filters for the columns in the table are assumed based on the value of the column.

The columns available in the table are used in the row and rowset objects.  
Also the parsed data will present these values. The only exception is the ```identity column``` this column will be presented as ```id```.

## Changing the filters
Filters can be changed on two levels. The table level itself as a comment on the column like ```@Filter('<filter_value>')``` of in the filter object in the table.

# Behaviors
Within Raddish it is possible to add behaviors to the table object.  
The behaviors are added in a special subfolder in the table folder called behavior.

In a behavior object you can bind on before and after methods.
In the table the following methods are available:

- onInitializeSelect
- onBeforeSelect
- onAfterSelect
- onInitializeInsert
- onBeforeInsert
- onAfterInsert
- onInitializeUpdate
- onBeforeUpdate
- onAfterUpdate
- onInitializeDelete
- onBeforeDelete
- onAfterDelete

All of these methods will get an context. onBefore methods have an query object and onAfter methods will have the raw data from the database.  
Here you can add DCI or your own reusable code. [More on behaviors](/guide/getting-started/behaviors.html).

## Example
In this example we will set some values and we will show the component config values.

<div class="row">
    <div class="col-md-6">
        <div class="code-highlight">
            <span class="js-copy-to-clipboard copy-code">copy</span>
            {% highlight javascript %}
var Table = require('raddish').Table,
    util = require('util');
    
function FooTable(config) {
    // Force the database connection to mongo, this database has to be defined in the config file.
    config.db = 'mongo';
    
    // Force the table to foo_bar
    config.name = 'foo_bar';
    
    // Force the identity column to id
    config.identity_column = 'id';
    
    // Force part of the column map.
    // This will be like, destination: origin
    config.column_map = {
        name: "title",
        user: "complicated_table_column_name"
    };
    
    // Behaviors will accept name only. But it is also possible to add the complete identifier.
    config.behaviors = {
        'creatable': {},
        'modifiable': {},
        'com://demo/foo.database.table.barable': {}
    }

    Table.call(this, config);
};

util.inherits(FooTable, Table);

module.exports = FooTable;{% endhighlight %}
        </div>
    </div>
    <div class="col-md-6">
        <div class="code-highlight">
            <span class="js-copy-to-clipboard copy-code">copy</span>
            {% highlight javascript %}
{
    "table": {
        "foo": {
            "db": "mongo",
            "name": "foo_bar",
            "identity_column": "id",
            "column_map": {
                "name": "title",
                "user": "complicated_table_column_name"
            },
            "behaviors": {
                "creatable": {},
                "modifiable": {},
                "com://demo/foo.database.table.barable": {}
            }
        }
    }
}{% endhighlight %}
        </div>
    </div>
</div>