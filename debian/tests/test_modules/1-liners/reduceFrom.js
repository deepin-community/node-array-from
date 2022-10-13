"use strict";

exports.__esModule = true;
/**
 * @module 1-liners/reduceFrom
 * 
 * @description
 *
 * Same as `[1, 2, 3].reduceFrom(sum, 8)`.
 * 
 * @example
 * 
 * 	var reduceFrom = require('1-liners/reduceFrom');
 * 
 * 	reduceFrom(sum, 8, [1, 2, 3]); // => 2
 * 
 */

exports["default"] = function (reduce, initial, arr) {
  return arr.reduce(reduce, initial);
};

module.exports = exports["default"];