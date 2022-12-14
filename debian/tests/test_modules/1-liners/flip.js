"use strict";

exports.__esModule = true;
/**
 * @module 1-liners/flip
 * 
 * @description
 *
 * Flip a function’s arguments.
 * 
 * @example
 * 
 * 	var flip = require('1-liners/flip');
 * 
 * 	var f = (a, b) => a / b;
 * 
 * 	flip(f)(2, 6);        // => 3
 * 	flip(flip(f))(6, 2);  // => 3
 * 
 */

exports["default"] = function (f) {
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return f.apply(undefined, args.reverse());
  };
};

module.exports = exports["default"];