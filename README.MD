# BootsAlert

Simple library to create alert from Bootstrap Framework.  
[![Build Status](https://travis-ci.org/dhanyn10/bootsalert.svg?branch=master)](https://travis-ci.org/dhanyn10/bootsalert) 
![](https://david-dm.org/dhanyn10/bootsalert.svg)

# How to Use
This code below shows you an example about how to use this library:
```html
...
<body>
    <div id="demo"></div>
</body>
<script>
    bootsalert({
        type: "danger",
        message: "be success",
        container: "demo"
    });
</script>
```
There's several variable that must be filled and should be filled to make this library can work perfectly:

| variable  	| valuetype 	| content                                                                             	|
|-----------	|----------	|-------------------------------------------------------------------------------------	|
| type      	| string   	| the type of alert provide by bootstrap. you can use success or other type           	|
| message   	| string   	| your message to user after doing something                                          	|
| container 	| string   	| alert will be inserted to this component, but component must be have id attributes 	|
| closebtn  	| boolean  	| [optional:false] specify that alert will have close button or not.                  	|