'use strict';

var reqo = require('../es5/index');
var decoratedFunc;

// Function where options.a and options.b are both required to exist.
function myFunc(options) {
  console.log(options.a + ':' + options.b);
}

decoratedFunc = reqo(myFunc, ['a', 'b']);

// Works, logs 'a:b'
decoratedFunc({a: 'a', b: 'b'});

// Throws a RangeError: Options must contain b
decoratedFunc({a: 'a'});
