"use strict";

exports.__esModule = true;
/**
 * @module 1-liners/property
 *
 * @description
 *
 * Same as `object[property]`
 *
 * @example
 *
 * 	const property = require('1-liners/property');
 *
 * 	const object = {foo: 1};
 *
 * 	property('foo', object);  // => 1
 *
 */

exports["default"] = function (property, object) {
  return object[property];
};

module.exports = exports["default"];