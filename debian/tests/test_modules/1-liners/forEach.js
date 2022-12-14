"use strict";

exports.__esModule = true;
/**
 * @module 1-liners/forEach
 *
 * @description
 *
 * Same as `[1, 2, 3].forEach(Math.sqrt)`.
 *
 * @example
 *
 * 	var forEach = require('1-liners/forEach');
 *
 * 	forEach(i => console.log('Item: ' + i), [9, 25]); // => logs "Item: 9" and "Item: 25"
 *
 */

exports["default"] = function (forEach, arr) {
  return arr.forEach(forEach);
};

module.exports = exports["default"];