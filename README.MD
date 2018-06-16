# BootsAlert

Simple library to create alert from Bootstrap Framework.

![](https://david-dm.org/dhanyn10/bootsalert.svg)
[![GitHub version](https://badge.fury.io/gh/dhanyn10%2Fbootsalert.svg)](https://badge.fury.io/gh/dhanyn10%2Fbootsalert)

# Compatibility
This library is compatible with bootstrap 3 and 4 alert.

# How to Use
This code below shows you an example about how to use this library:
```html
...
<body>
    <div id="demo"></div>
</body>
<script>
    bootsalert({
        className: "success",
        message: "be success",
        container: "demo",
        closebtn: true
    });
</script>
```
There's several variable that must be filled and should be filled to make this library can work perfectly:

| variable  	| valuetype 	| content                                                                             	|
|-----------	|----------	|-------------------------------------------------------------------------------------	|
| className     | string   	| class name of alert provide by bootstrap. you can use success or other type or your own custom type          	|
| message   	| string   	| your message to user after doing something                                          	|
| container 	| string   	| alert will be inserted to this component, but component must be have id attributes 	|
| closebtn  	| boolean  	| [optional:false] specify that alert will have close button or not.                  	|