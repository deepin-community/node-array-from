"use strict";

exports.__esModule = true;
/**
 * @module 1-liners/reduceRight
 * 
 * @description
 *
 * Same as `[1, 2, 3].reduceRight(sub)`.
 * 
 * @example
 * 
 * 	var reduceRight = require('1-liners/reduceRight');
 * 
 * 	reduceRight(sub, [1, 2, 3]); // => -4
 * 
 */

exports["default"] = function (reduce, arr) {
  return arr.reduceRight(reduce);
};

module.exports = exports["default"];