"use strict";

exports.__esModule = true;
/**
 * @module 1-liners/xor
 *
 * @description
 *
 * Same as `(x && !y) || (!x && y)`
 *
 * @example
 *
 * 	var xor = require('1-liners/xor');
 *
 * 	xor(0, 1); // => 1
 * 	xor(1, 1); // => 0
 *
 */

exports["default"] = function (x, y) {
  return x && !y || !x && y;
};

module.exports = exports["default"];