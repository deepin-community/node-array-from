"use strict";

exports.__esModule = true;
/**
 * @module 1-liners/max
 * 
 * @description
 *
 * Same as `Math.max` – but with a stable number of arguments.
 * 
 * @example
 * 
 * 	var max = require('1-liners/max');
 * 
 * 	max(3, 6);  // => 6
 * 
 * 	[3, 6, 9].reduce(max);       // => 9
 * 	[3, 6, 9].reduce(Math.max);  // => NaN
 * 
 */

exports["default"] = function (a, b) {
  return a > b ? a : b;
};

module.exports = exports["default"];