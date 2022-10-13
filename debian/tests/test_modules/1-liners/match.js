"use strict";

exports.__esModule = true;
/**
 * @module 1-liners/match
 *
 * @description
 *
 * Same as `haystack.match(needle)`.
 *
 * @example
 *
 * 	var match = require('1-liners/match');
 *
 * 	match(/\d+/g, 'Items: 3,2'); // => ["3", "2"]
 *
 */

exports["default"] = function (needle, haystack) {
  return haystack.match(needle);
};

module.exports = exports["default"];