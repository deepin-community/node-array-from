"use strict";

exports.__esModule = true;
/**
 * @module 1-liners/every
 * 
 * @description
 *
 * Same as `[1,2,3].every(GreaterThan16)`.
 * 
 * @example
 * 
 * 	var every = require('1-liners/every');
 * 
 * 	every(elem => elem > 16, [16,17,18]); // => false
 * 
 */

exports["default"] = function (every, arr) {
  return arr.every(every);
};

module.exports = exports["default"];