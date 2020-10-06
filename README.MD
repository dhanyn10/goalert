# BootsAlert

Simple library to create alert from Bootstrap Framework.

[![dependencies Status](https://david-dm.org/dhanyn10/bootsalert/status.svg)](https://david-dm.org/dhanyn10/bootsalert)
[![npm version](https://badge.fury.io/js/bootsalert.svg)](https://badge.fury.io/js/bootsalert)

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

| variable  	| type 	| condition | default | content |
|--------------	|-------|-----------|---------|---------|
| className     | string   	| required | empty | class name of alert provide by bootstrap. you can use success or other type or your own custom type |
| message   	| string   	| required | empty | your message to user after doing something |
| container 	| string   	| required | empty | alert will be inserted to this component. Selected component must have id attributes |
| closebtn  	| boolean  	| optional | false | specify that alert will have close button or not. |
|append         |boolean    | optional | true | bootsalert can be appended with several alert elements in one container |
