jSticky
=======

jQuery plugin to keep select DOM element(s) in view while scrolling the page.

##Using jSticky
```
$('#foo').sticky();
```
##Options
Top spacing, z-index, and stopper.
```
$('#foo').sticky({
	topSpacing: 80,
	zIndex:100,
	stopper: "#bar"
});
```
Note: If no stopper id or class is provided, the default is 'sticky-stopper'.

Tip: Use the zIndex option if you need to stack various sticky elements when scrolling the page.


