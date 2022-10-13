"use strict";

exports.__esModule = true;
/**
 * @module 1-liners/bitOr
 * 
 * @description
 *
 * Same as `a | b`.
 * 
 * @example
 * 
 * 	var bitOr = require('1-liners/bitOr');
 * 
 * 	bitOr(0, 1); // => 1
 * 	bitOr(1, 1); // => 1
 * 
 */

exports["default"] = function (x, y) {
  return x | y;
};

module.exports = exports["default"];