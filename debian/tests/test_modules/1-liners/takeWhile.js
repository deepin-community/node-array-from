"use strict";

exports.__esModule = true;
/**
 * @module 1-liners/takeWhile
 * 
 * @description
 *
 * Take items of an array while they fulfill a predicate.
 * 
 * @example
 * 
 * 	var takeWhile = require('1-liners/takeWhile');
 * 
 * 	takeWhile(i => i % 2 === 0, [2, 4, 6, 8, 7, 8, 8]); // => [2, 4, 6, 8]
 * 
 */

exports["default"] = function (pred, arr) {
  return arr.reduce(function (newArr, i) {
    if (!pred(i)) arr.length = 0;else newArr.push(i);return newArr;
  }, []);
};

module.exports = exports["default"];