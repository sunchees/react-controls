import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-5be4169f.js';
import React from 'react';
import { s as styleInject } from './style-inject.es-1f59c1d0.js';

var css = ".button {\r\n  background: unset;\r\n  border: none;\r\n  cursor: pointer;\r\n  border-radius: 5px;\r\n  font-size: 18px;\r\n  padding: 5px;\r\n  text-align: center;\r\n  color: #424242;\r\n}\r\n\r\n.button:disabled {\r\n  cursor: default;\r\n  opacity: 0.5;\r\n}\r\n";
styleInject(css);

var Button = function Button(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["className", "children"]);

  return React.createElement("button", _extends({
    className: "button ".concat(className)
  }, props), children);
};

export default Button;
