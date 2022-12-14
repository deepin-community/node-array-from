"use strict";

exports.__esModule = true;
/**
 * @module 1-liners/shave
 * 
 * @description
 *
 * Shave ensures that a function is called with n arguments.
 * 
 * @example
 * 
 * 	var shave = require('1-liners/shave');
 * 
 * 	map(parseInt, [0, 1.1, 2.2]); // => [0, NaN, NaN]
 * 	map(shave(1, parseInt), [0, 1.1, 2.2]); // => [0, 1, 2]
 * 
 */

exports["default"] = function (shave, f) {
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return f.apply(undefined, args.slice(0, shave));
  };
};

module.exports = exports["default"];