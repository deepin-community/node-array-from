"use strict";

exports.__esModule = true;
/**
 * @module 1-liners/curryRight
 *
 * @description
 *
 * Curry a function from the right – split its parameters into 2 lists. Apply the second list of parameters first, without changing the order within the lists.
 *
 * @example
 *
 * 	import curryRight from '1-liners/curryRight';
 *
 * 	const g = (a, b, c, d) => a + b * c - d;
 * 	g(1, 2, 3, 4);  // => 3
 *
 * 	const gλ = curryRight(g);
 * 	gλ(4)(1, 2, 3);  // => 3
 * 	gλ(3, 4)(1, 2);  // => 3
 * 	gλ(2, 3, 4)(1);  // => 3
 *
 */

exports["default"] = function (f) {
  return function () {
    for (var _len = arguments.length, a = Array(_len), _key = 0; _key < _len; _key++) {
      a[_key] = arguments[_key];
    }

    return function () {
      for (var _len2 = arguments.length, b = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        b[_key2] = arguments[_key2];
      }

      return f.apply(undefined, b.concat(a));
    };
  };
};

module.exports = exports["default"];