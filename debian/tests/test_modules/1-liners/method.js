"use strict";

exports.__esModule = true;
/**
 * @module 1-liners/method
 *
 * @description
 *
 * Same as `object[method](...args)`
 *
 * @example
 *
 * 	const method = require('1-liners/method');
 *
 * 	const object = {
 * 		base: 1,
 * 		add(number) { return this.base + number; },
 * 	};
 *
 * 	method('add', object)(5);  // => 6
 *
 */

exports["default"] = function (method, object) {
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return object[method].apply(object, args);
  };
};

module.exports = exports["default"];