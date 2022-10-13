"use strict";

exports.__esModule = true;
/**
 * @module 1-liners/join
 * 
 * @description
 *
 * Same as `[1, 'liners'].join('-')`
 * 
 * @example
 * 
 * 	var join = require('1-liners/join');
 * 
 * 	join('-', [1, 'liners']); // => '1-liners'
 * 
 */

exports["default"] = function (superglue, arr) {
  return arr.join(superglue);
};

module.exports = exports["default"];