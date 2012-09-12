# AngularJS directives for jQueryUI plugins

## Installation

In order to install the directives you must include the file _jui.js_ located on the build directory on your project.
You will have to make a reference to the module on your application module like the following:

```javascript
angular.module('myApp', ['jui']);
```

### Currently implemented plugins

* Draggable
* Button / ButtonSet
* ProgressBar
* Droppable
* Resizable

The module can be found in the [Directives](https://github.com/wlepinski/angularjs-jqueryui/tree/master/app/scripts/directives) folder.

### Requirements

We're currently using [Yeoman](http://yeoman.io), instructions to install it can be found on the website.

### Testing

To run tests, use the Yeoman's test task.

```bash
yeoman test
```

We're curretly testing over GoogleChrome and PhantomJS.



