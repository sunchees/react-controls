import { s as styleInject, _ as _objectWithoutProperties, a as _extends } from './style-inject.es-4d895b0c.js';
import React from 'react';

var css = ".button {\r\n  width: 217px;\r\n  background: none;\r\n  border-radius: 5px;\r\n  border: 1px solid #d3d3d3;\r\n  cursor: pointer;\r\n  font-size: 16px;\r\n  text-align: center;\r\n  color: #424242;\r\n  outline: none;\r\n  padding: 10px;\r\n}\r\n\r\n.button:disabled {\r\n  cursor: default;\r\n  opacity: 0.5;\r\n}\r\n";
styleInject(css);

/**
 * Базовый компонент кнопки.
 */

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
