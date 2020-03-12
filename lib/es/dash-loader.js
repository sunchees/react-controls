import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-4576a74b.js';
import React from 'react';

/**
 * Компонент лоадера с анимацией "Dash".
 * @see https://codepen.io/rbv912/pen/dYbqLQ (loader-2)
 */

var DashLoader = function DashLoader(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      props = _objectWithoutProperties(_ref, ["className"]);

  return React.createElement("div", _extends({
    className: "dash-loader ".concat(className)
  }, props), React.createElement("span", null));
};

export default DashLoader;
