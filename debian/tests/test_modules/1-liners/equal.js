"use strict";

exports.__esModule = true;
/**
 * @module 1-liners/equal
 * 
 * @description
 *
 * Same as `a === b`.
 * 
 * @example
 * 
 * 	var equal = require('1-liners/equal');
 * 
 * 	equal(true, true); // => true
 * 	equal(false, true); // => false
 * 	equal(1, true); // => false
 * 
 */

exports["default"] = function (x, y) {
  return x === y;
};

module.exports = exports["default"];