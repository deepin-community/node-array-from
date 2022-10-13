"use strict";

exports.__esModule = true;
/**
 * @module 1-liners/nth
 * 
 * @description
 *
 * Returns the nth item of an array.
 * 
 * @example
 * 
 * 	var nth = require('1-liners/nth');
 * 
 * 	nth(1, [1, 2, 3]); // => 2
 * 

 */

exports["default"] = function (n, arr) {
  return arr[n];
};

module.exports = exports["default"];