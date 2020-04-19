import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-4576a74b.js';
import React from 'react';

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
