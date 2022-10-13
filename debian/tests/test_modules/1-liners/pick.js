"use strict";

exports.__esModule = true;
/**
 * @module 1-liners/pick
 *
 * @description
 *
 * Copies only specified `properties` from an `object` into a new object.
 *
 * @example
 *
 * 	const pick = require('1-liners/pick');
 *
 * 	const object = {foo: 1, bar: 2, baz: 3};
 *
 * 	pick(['foo', 'baz'], object);  // => {foo: 1, baz: 3}
 *
 */

exports["default"] = function (properties, object) {
  return Object.assign.apply(Object, [{}].concat(properties.map(function (key) {
    var _ref;

    return (_ref = {}, _ref[key] = object[key], _ref);
  })));
};

module.exports = exports["default"];