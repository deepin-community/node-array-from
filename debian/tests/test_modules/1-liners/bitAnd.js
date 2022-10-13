"use strict";

exports.__esModule = true;
/**
 * @module 1-liners/bitAnd
 * 
 * @description
 *
 * Same as `a & b`.
 * 
 * @example
 * 
 * 	var bitAnd = require('1-liners/bitAnd');
 * 
 * 	bitAnd(1, 2); // => 0
 * 	bitAnd(2, 2); // => 2
 * 
 */

exports["default"] = function (x, y) {
  return x & y;
};

module.exports = exports["default"];