import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-4576a74b.js';
import React from 'react';

/**
 * Компонент лоадера с анимацией "Teardrop".
 * @see https://codepen.io/rbv912/pen/dYbqLQ (loader-6)
 */

var TeardropLoader = function TeardropLoader(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      props = _objectWithoutProperties(_ref, ["className"]);

  return React.createElement("div", _extends({}, props, {
    className: "teardrop-loader ".concat(className)
  }), React.createElement("span", null));
};

export default TeardropLoader;
