import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-5be4169f.js';
import React from 'react';
import { s as styleInject } from './style-inject.es-1f59c1d0.js';

var css = ".text {\r\n  color: #424242;\r\n}\r\n\r\n.text.capitalized::first-letter {\r\n  text-transform: capitalize;\r\n}\r\n\r\n.text.bold {\r\n  font-weight: bold;\r\n}\r\n";
styleInject(css);

var Text = function Text(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      value = _ref.value,
      _ref$capitalized = _ref.capitalized,
      capitalized = _ref$capitalized === void 0 ? false : _ref$capitalized,
      _ref$bold = _ref.bold,
      bold = _ref$bold === void 0 ? false : _ref$bold,
      props = _objectWithoutProperties(_ref, ["className", "value", "capitalized", "bold"]);

  return React.createElement("span", _extends({
    className: "text ".concat(capitalized ? 'capitalized' : '', " ").concat(bold ? 'bold' : '', " ").concat(className)
  }, props), value);
};

export default Text;
