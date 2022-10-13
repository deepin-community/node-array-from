"use strict";

exports.__esModule = true;
/**
 * @module 1-liners/reduce
 * 
 * @description
 *
 * Same as `[1, 2, 3].reduce(sum)`.
 * 
 * @example
 * 
 * 	var reduce = require('1-liners/reduce');
 * 
 * 	reduce(sum, [1, 2, 3]); // => 6
 * 
 */

exports["default"] = function (reduce, arr) {
  return arr.reduce(reduce);
};

module.exports = exports["default"];