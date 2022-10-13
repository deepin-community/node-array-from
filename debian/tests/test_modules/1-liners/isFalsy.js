"use strict";

exports.__esModule = true;
/**
 * @module 1-liners/isFalsy
 *
 * @description
 *
 * Same as `!`.
 *
 * @example
 *
 *  var isFalsy = require('1-liners/isFalsy');
 *
 *  isFalsy('yes');  // => false
 *  isFalsy(true);   // => false
 *  isFalsy([]);     // => false
 *
 *  isFalsy('');     // => true
 *  isFalsy(0);      // => true
 *  isFalsy(false);  // => true
 *
 */

exports["default"] = function (x) {
  return !x;
};

module.exports = exports["default"];