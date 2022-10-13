"use strict";

exports.__esModule = true;
/**
 * @module 1-liners/take
 * 
 * @description
 *
 * Take n items of an array. Same as `arr.slice(0, n)`.
 * 
 * @example
 * 
 * 	var take = require('1-liners/take');
 * 
 * 	take(2, [1, 2, 3]); // => [1, 2]
 * 
 */

exports["default"] = function (take, arr) {
  return arr.slice(0, take);
};

module.exports = exports["default"];