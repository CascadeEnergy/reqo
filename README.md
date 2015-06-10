# reqo [![Build Status](https://travis-ci.org/CascadeEnergy/reqo.svg?branch=master)](https://travis-ci.org/CascadeEnergy/reqo)

> Function decorator for validating required options in an options hash.

This project mostly exists as an example of `$ yo es6nm` [generator-es6nm](using https://www.npmjs.com/package/generator-es6nm)

## Example

```javascript
'use strict';

var reqo = require('reqo');
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
```

## Install

```
$ npm install --save reqo
```
