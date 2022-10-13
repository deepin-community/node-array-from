"use strict";

exports.__esModule = true;
/**
 * @module 1-liners/converge
 *
 * @description
 *
 * Converge two functions into one.
 *
 * @example
 *
 *  var converge = require('1-liners/converge');
 *
 *  converge(f, g, h)(1, 2) === f(g(1, 2), h(1, 2));
 *
 */

exports["default"] = function (f, g, h) {
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return f(g.apply(undefined, args), h.apply(undefined, args));
  };
};

module.exports = exports["default"];