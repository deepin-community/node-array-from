"use strict";

exports.__esModule = true;
/**
 * @module 1-liners/map
 * 
 * @description
 *
 * Same as `[1, 2, 3].map(Math.sqrt)`.
 * 
 * @example
 * 
 * 	var map = require('1-liners/map');
 * 
 * 	map(Math.sqrt, [9, 25]); // => [3, 5]
 * 
 */

exports["default"] = function (map, arr) {
  return arr.map(map);
};

module.exports = exports["default"];