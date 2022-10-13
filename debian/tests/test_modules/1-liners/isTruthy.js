"use strict";

exports.__esModule = true;
/**
 * @module 1-liners/isTruthy
 * 
 * @description
 *
 * Same as `!!`.
 * 
 * @example
 * 
 * 	var isTruthy = require('1-liners/isTruthy');
 * 
 * 	isTruthy('yes');  // => true
 * 	isTruthy(true);   // => true
 * 	isTruthy([]);     // => true
 * 
 * 	isTruthy('');     // => false
 * 	isTruthy(0);      // => false
 * 	isTruthy(false);  // => false
 * 
 */

exports["default"] = function (x) {
  return !!x;
};

module.exports = exports["default"];