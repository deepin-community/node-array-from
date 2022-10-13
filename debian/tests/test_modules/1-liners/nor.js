"use strict";

exports.__esModule = true;
/**
 * @module 1-liners/nor
 * 
 * @description
 *
 * Same as `!(a || b)`.
 * 
 * @example
 * 
 * 	var nor = require('1-liners/nor');
 * 
 * 	nor(0, 0); // => true
 * 	nor(1, 0); // => false
 * 
 */

exports["default"] = function (x, y) {
  return !(x || y);
};

module.exports = exports["default"];