---
title_extra: File Structure
author: Jasper van Rijbroek
layout: guide
navigation: guide
---

Raddish is a system based on the file structure. Which in turn create clarity among different projects.
The components their file structure is fixed, starting from the applications component directory to read more about this you can go [here](/guide/objects/application.html).

Without further ado, below the file structure.
This are all the folders there are basically supported within Raddish, of course it is possible for you to add your own directories where you need them.

<div class="file-tree">
    <div class="file-tree-title">
        Component structure
        <ul class="file-tree-buttons">
            <li class="js-expand"><i class="fa fa-plus"></i> Expand all</li>
            <li class="js-collapse"><i class="fa fa-minus"></i> Collapse all</li>
        </ul>
    </div>
    <ul class="file-tree-list js-file-tree treeview" data-expanded="true">
        <li class="is-folder contains-items items-expanded">&lt;component_name&gt;
            <ul style="display: block;">
                <li class="is-folder contains-items">controller
                    <ul>
                        <li class="is-folder">permission</li>
                        <li class="is-folder">behavior</li>
                    </ul>
                </li>
                <li class="is-folder contains-items">database
                    <ul>
                        <li class="is-folder">adapter</li>
                        <li class="is-folder">row</li>
                        <li class="is-folder">rowset</li>
                        <li class="is-folder contains-items">table
                            <ul>
                                <li class="is-folder">behavior</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li class="is-folder contains-items">database
                    <ul>
                        <li class="is-folder">authenticator</li>
                    </ul>
                </li>
                <li class="is-folder">model</li>
                <li class="is-folder">view</li>
                <li class="is-file">&lt;component_name&gt;.js</li>
                <li class="is-file">config.json</li>
            </ul>
        </li>
    </ul>
</div>
