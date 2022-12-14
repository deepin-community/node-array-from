"use strict";

exports.__esModule = true;
/**
 * @module 1-liners/some
 * 
 * @description
 *
 * Same as `[1,2,3].some(GreaterThan16)`
 * 
 * @example
 * 
 * 	var some = require('1-liners/some');
 * 
 * 	some(elem => elem > 16, [16,17,18]); // => true
 * 
 */

exports["default"] = function (some, arr) {
  return arr.some(some);
};

module.exports = exports["default"];