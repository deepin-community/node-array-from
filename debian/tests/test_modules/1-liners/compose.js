"use strict";

exports.__esModule = true;
/**
 * @module 1-liners/compose
 * 
 * @description
 *
 * Compose a new function from two given functions.
 * 
 * @example
 * 
 * 	var compose = require('1-liners/compose');
 * 
 * 	compose(f, g)(1, 2) === f(g(1, 2));
 * 
 */

exports["default"] = function (f, g) {
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return f(g.apply(undefined, args));
  };
};

module.exports = exports["default"];