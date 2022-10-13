"use strict";

exports.__esModule = true;
/**
 * @module 1-liners/pipe
 * 
 * @description
 *
 * Pipe arguments through functions.
 * 
 * @example
 * 
 * 	var pipe = require('1-liners/pipe');
 * 
 * 	pipe(f, g)(1, 2) === g(f(1, 2));
 * 
 */

exports["default"] = function (f, g) {
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return g(f.apply(undefined, args));
  };
};

module.exports = exports["default"];