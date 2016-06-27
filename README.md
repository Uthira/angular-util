# angular-util
#Usage
Import `ututils.js`:
```html
<srcipt type="text/javascript" src="ututils.js">
```
Inject `ut.utils` to your angular project:
```js
var app = angular.module('appName', [
        //...
        'ut.utils'
        //...
    ])
```
------
## Copy  text from table

First, add a `table-copy` attribute as an angular directive in your trigger element.

Then you can set table id by adding a `table-id` attribute in your trigger element.

Additionally, you can define a `ignore-columns` attribute to specify if you dont want to copy the column content.

```html
<!-- Target -->
<table id="mytable">

<!-- Trigger -->
<button table-copy table-id="mytable" ignore-columns="ignoreColumns" class="btn" >
    Copy to clipboard
</button>
```
------
