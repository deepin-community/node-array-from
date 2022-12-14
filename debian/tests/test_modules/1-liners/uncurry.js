"use strict";

exports.__esModule = true;
/**
 * @module 1-liners/uncurry
 *
 * @description
 *
 * Uncurry a function – collapse 2 lists of parameters into one.
 *
 * @example
 *
 *  import uncurry from '1-liners/uncurry';
 *
 *  const f = (a) => (b) => a + b;
 *  const fβ = uncurry(f);
 *  fβ(1, 2);  // => 3
 *
 *  const g = (a) => (b, c) => a + b + c
 *  const gβ = uncurry(g);
 *  gβ(1, 2, 3);  // => 6
 *
 */

exports["default"] = function (f) {
  return function (a) {
    for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      rest[_key - 1] = arguments[_key];
    }

    return f(a).apply(undefined, rest);
  };
};

module.exports = exports["default"];