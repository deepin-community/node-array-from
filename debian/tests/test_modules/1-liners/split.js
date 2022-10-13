"use strict";

exports.__esModule = true;
/**
 * @module 1-liners/split
 * 
 * @description
 *
 * Same as `'1-liners'.split('-')`
 * 
 * @example
 * 
 * 	var split = require('1-liners/split');
 * 
 * 	split('-', '1-liners'); // => [1, 'liners']
 * 
 */

exports["default"] = function (split, str) {
  return str.split(split);
};

module.exports = exports["default"];