---
title: Universal-Query
layout: default
header: Universal-Query
navigation: guide
---

**Universal-query is the answer of having multiple querybuilders for multiple databases.**

Universal Query is a pure javascript query builder for your application,
the query builder supports the following database types:

- MySQL
- MongoDB
- SQLite (using MySQL)

Featuring one single API for all these databases makes it super user friendly and makes it more attractive to use.

## How to use

**Create a query builder type**
{% highlight javascript %}
var query = require('universal-query');

var mysql = query('mysql'); // returns a mysql query builder
var mongo = query('mongo'); // returns a mongo query builder
{% endhighlight %}

**Selecting data**
{% highlight javascript %}
var command = mysql.table('foo').where('bar', '=', 'baz'); // SELECT * FROM `foo` WHERE `bar` = 'baz'
var command = mysql.table('foo', 'tbl').where('tbl.bar', '=', 'baz'); // SELECT * FROM `foo` AS `tbl` WHERE `tbl`.`bar` = 'baz'
{% endhighlight %}