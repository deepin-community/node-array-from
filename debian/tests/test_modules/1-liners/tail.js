"use strict";

exports.__esModule = true;
/**
 * @module 1-liners/tail
 *
 * @description
 *
 * Returns the tail of an array
 *
 * @example
 *
 *  var tail = require('1-liners/tail');
 *
 *  tail([1, 2, 3]); // => [2, 3]
 *
 */

exports["default"] = function (_ref) {
  var tail = _ref.slice(1);

  return tail;
};

module.exports = exports["default"];