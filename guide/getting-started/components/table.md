---
title: Table
author: Jasper van Rijbroek
layout: guide
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
If no config values are given for the table name of the identity_column, these values are assumed as explained above.
Next to this the filters for the columns in the table are assumed based on the value of the column.

## Changing the filters
Filters can be changed on two levels. The table level itself as a comment on the column like ```@Filter('<filter_value>')``` of in the filter object in the table.

## Example
In this example we will set some values and we will show the component config values.

<div class="row">
    <div class="col6">
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

    Table.call(this, config);
};

util.inherits(FooTable, Table);

module.exports = FooTable;
{% endhighlight %}
    </div>
    <div class="col6">
{% highlight json %}
{
    "table": {
        "foo": {
            "db": "mongo",
            "name": "foo_bar",
            "identity_column": "id",
            "column_map": {
                "name": "title",
                "user": "complicated_table_column_name"
            }
        }
    }
}
{% endhighlight %}
    </div>
</div>