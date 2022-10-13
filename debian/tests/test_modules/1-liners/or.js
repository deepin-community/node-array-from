"use strict";

exports.__esModule = true;
/**
 * @module 1-liners/or
 * 
 * @description
 *
 * Same as `a || b`.
 * 
 * @example
 * 
 * 	var or = require('1-liners/or');
 * 
 * 	or(true, true); // => true
 * 	or(false, true); // => true
 * 	or(false, false); // => false
 * 
 */

exports["default"] = function (a, b) {
  return a || b;
};

module.exports = exports["default"];