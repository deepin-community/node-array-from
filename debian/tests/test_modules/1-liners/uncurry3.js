"use strict";

exports.__esModule = true;
/**
 * @module 1-liners/uncurry3
 *
 * @description
 *
 * Uncurry a function – collapse 3 lists of parameters into one.
 *
 * @example
 *
 *  import uncurry3 from '1-liners/uncurry3';
 *
 *  const f = (a) => (b) => (c) => a + b + c;
 *  const fβ = uncurry3(f);
 *  fβ(1, 2, 3);  // => 6
 *
 *  const g = (a) => (b) => (c, d) => a + b + c + d;
 *  const gβ = uncurry3(g);
 *  gβ(1, 2, 3, 4);  // => 10
 *
 */

exports["default"] = function (f) {
  return function (a, b) {
    for (var _len = arguments.length, rest = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      rest[_key - 2] = arguments[_key];
    }

    return f(a)(b).apply(undefined, rest);
  };
};

module.exports = exports["default"];