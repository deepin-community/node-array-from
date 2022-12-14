"use strict";

exports.__esModule = true;
/**
 * @module 1-liners/min
 * 
 * @description
 *
 * Same as `Math.min` – but with a stable number of arguments.
 * 
 * @example
 * 
 * 	var min = require('1-liners/min');
 * 
 * 	min(3, 6);  // => 3
 * 
 * 	[3, 6, 1].reduce(min);       // => 1
 * 	[3, 6, 1].reduce(Math.min);  // => NaN
 * 
 */

exports["default"] = function (a, b) {
  return a > b ? b : a;
};

module.exports = exports["default"];