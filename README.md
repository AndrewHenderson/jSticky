jSticky
=======

jQuery plugin to keep select DOM element(s) in view while scrolling the page. Features stop points and z-indexing. Works when being applied to a class of multiple elements simultanesouly.

### Using jSticky

```
$('#foo').sticky();
```

### Options
Top spacing, z-index, and stopper.

```
$('#foo').sticky({
	topSpacing: 80, // Space between element and top of the viewport
	zIndex: 100, // z-index
	stopper: "#bar" // Id, class, or number value
	stickyClass: false // Class applied to element when it's stuck
});
```

Note: If no stopper id or class is provided, the default is 'sticky-stopper'. You can also use number values for pixel points on the y-axis.

_Tip: Use the zIndex option if you need to stack various sticky elements while scrolling the page._


