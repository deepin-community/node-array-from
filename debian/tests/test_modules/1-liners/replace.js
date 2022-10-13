"use strict";

exports.__esModule = true;
/**
 * @module 1-liners/replace
 *
 * @description
 *
 * Same as `haystack.replace(needle, replace)`.
 *
 * @example
 *
 * 	var replace = require('1-liners/replace');
 *
 * 	replace(/\d+/g, sub => `"${sub}"`, 'Items: 3,2'); // => Items: "3","2"
 * 	replace(':', '=', 'Items: 3,2'); // => Items= 3,2
 *
 */

exports["default"] = function (needle, replace, haystack) {
  return haystack.replace(needle, replace);
};

module.exports = exports["default"];