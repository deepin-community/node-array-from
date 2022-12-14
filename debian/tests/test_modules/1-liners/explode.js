"use strict";

exports.__esModule = true;
/**
 * @module 1-liners/explode
 * 
 * @description
 *
 * The opposite of [implode](#implode).
 * 
 * @example
 * 
 * 	var explode = require('1-liners/explode');
 * 
 * 	const sum = (numbers) => numbers.reduce((a, b) => a + b);
 * 
 * 	explode(sum)(1, 2, 3, 4);  // => 10
 * 
 */

exports["default"] = function (func) {
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return func(args);
  };
};

module.exports = exports["default"];