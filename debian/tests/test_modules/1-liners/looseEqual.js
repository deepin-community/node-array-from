"use strict";

exports.__esModule = true;
/**
 * @module 1-liners/looseEqual
 * 
 * @description
 *
 * Same as `a == b`.
 * 
 * @example
 * 
 * 	var looseEqual = require('1-liners/looseEqual');
 * 
 * 	looseEqual(true, true); // => true
 * 	looseEqual(false, true); // => false
 * 	looseEqual(1, true); // => true
 * 
 */

exports["default"] = function (x, y) {
  return x == y;
};

module.exports = exports["default"];