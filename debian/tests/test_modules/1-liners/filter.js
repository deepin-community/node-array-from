"use strict";

exports.__esModule = true;
/**
 * @module 1-liners/filter
 * 
 * @description
 *
 * Same as `[1, 2, 3].filter(isOdd)`.
 * 
 * @example
 * 
 * 	var filter = require('1-liners/filter');
 * 
 * 	filter(isOdd, [1, 2, 3]); // => [1, 3]
 * 
 */

exports["default"] = function (filter, arr) {
  return arr.filter(filter);
};

module.exports = exports["default"];