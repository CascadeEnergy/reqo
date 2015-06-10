'use strict';

var _Object$defineProperty = require('babel-runtime/core-js/object/define-property')['default'];

_Object$defineProperty(exports, '__esModule', {
  value: true
});

var _lodash = require('lodash');

/**
 * Decorator which validates an options hash and delegates to `func`.
 * If the `options` are not an object a `TypeError` is thrown. If the options
 * hash is missing any of the required properties a `RangeError` is thrown.
 *
 * @param {Function} func The underlying function for which you want to validate
 * the options.
 *
 * @param {Array} requiredKeys An array describing the required option keys.
 *
 * @param {Number} optionsIndex The arguments index of the options hash you want
 * to validate. Defaults to 0, the first argument. This param is useful if your
 * options hash is not the first argument to the underlying function.
 *
 * @param {object} context Object to apply as the receiver for `func`.
 *
 * @returns {Function}
 */
function reqo(func, requiredKeys) {
  var optionsIndex = arguments[2] === undefined ? 0 : arguments[2];
  var context = arguments[3] === undefined ? undefined : arguments[3];

  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var options = args[optionsIndex];

    if (!(0, _lodash.isPlainObject)(options)) {
      throw new TypeError('options must be a plain object literal');
    }

    // Check that all of the properties represented in requiredKeys are present
    // as properties in the options hash. Does so by taking an intersection
    // of the options keys and the required keys, and then checking the
    // intersection is equivalent to the requirements.
    var optionsKeys = (0, _lodash.keys)(options);
    var intersectionOfKeys = (0, _lodash.intersection)(requiredKeys, optionsKeys);
    var hasAllRequiredKeys = (0, _lodash.isEqual)(intersectionOfKeys, requiredKeys);

    // If any required keys are missing in options hash.
    if (!hasAllRequiredKeys) {
      var missingOptions = (0, _lodash.difference)(requiredKeys, intersectionOfKeys);
      throw new RangeError('Options must contain ' + missingOptions.toString());
    }

    // Call the decorated function in the right context with its' arguments.
    var boundFunc = func.bind(context);
    return boundFunc.apply(undefined, args);
  };
}

exports['default'] = reqo;
module.exports = exports['default'];