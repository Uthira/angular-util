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
## Copy table to clipboard

First, add a `table-copy` attribute as an angular directive in the trigger element.

Then  set table id by adding a `table-id` attribute in the trigger element.

Additionally, by  defining `ignore-columns` attribute it ignore the column content that dont want to copy.

```html
<!-- Target -->
<table id="mytable">

<!-- Trigger -->
<button table-copy table-id="mytable" ignore-columns="ignoreColumns" class="btn" >
    Copy to clipboard
</button>
```
------
