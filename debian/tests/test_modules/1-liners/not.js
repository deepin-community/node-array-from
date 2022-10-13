"use strict";

exports.__esModule = true;
/**
 * @module 1-liners/not
 * 
 * @description
 *
 * Same as `!a`.
 * 
 * @example
 * 
 * 	var not = require('1-liners/not');
 * 
 * 	not(true); // => false
 * 	not(false); // => true
 * 
 */

exports["default"] = function (a) {
  return !a;
};

module.exports = exports["default"];