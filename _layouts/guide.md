---
layout: default
---

<div class="row">
    <div class="col-md-3 sidebar">
        <ul class="nav nav-stacked">
            {% assign guide = site.categories.guide %}
            {% for page in guide | sort:'title' %}
                <li>
                    <a href="{{page.url}}">
                        {{page.title}}
                    </a>
                </li>
            {% endfor %}
        </ul>
    </div>
    <div class="col-md-9">
        {{content}}
    </div>
</div>