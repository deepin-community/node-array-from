"use strict";

exports.__esModule = true;
/**
 * @module 1-liners/nand
 * 
 * @description
 *
 * Same as `!(a && b)`.
 * 
 * @example
 * 
 * 	var nand = require('1-liners/nand');
 * 
 * 	nand(0, 0); // => true
 * 	nand(1, 1); // => false
 * 
 */

exports["default"] = function (x, y) {
  return !(x && y);
};

module.exports = exports["default"];