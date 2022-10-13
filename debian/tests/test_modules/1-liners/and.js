"use strict";

exports.__esModule = true;
/**
 * @module 1-liners/and
 * 
 * @description
 *
 * Same as `a && b`.
 * 
 * @example
 * 
 * 	var and = require('1-liners/and');
 * 
 * 	and(true, true); // => true
 * 	and(false, true); // => false
 * 
 */

exports["default"] = function (x, y) {
  return x && y;
};

module.exports = exports["default"];