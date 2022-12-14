"use strict";

exports.__esModule = true;
/**
 * @module 1-liners/takeUntil
 * 
 * @description
 *
 * Take items of an array until they fulfill a predicate.
 * 
 * @example
 * 
 * 	var takeUntil = require('1-liners/takeUntil');
 * 
 * 	takeUntil(i => i % 2 === 1, [2, 4, 6, 8, 7, 8, 8]); // => [2, 4, 6, 8]
 * 
 */

exports["default"] = function (pred, arr) {
  return arr.reduce(function (newArr, i) {
    if (pred(i)) arr.length = 0;else newArr.push(i);return newArr;
  }, []);
};

module.exports = exports["default"];