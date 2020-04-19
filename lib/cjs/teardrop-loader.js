'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-a036f66d.js');
var React = require('react');
var React__default = _interopDefault(React);

/**
 * Компонент лоадера с анимацией "Teardrop".
 * @see https://codepen.io/rbv912/pen/dYbqLQ (loader-6)
 */

var TeardropLoader = function TeardropLoader(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      props = _rollupPluginBabelHelpers._objectWithoutProperties(_ref, ["className"]);

  return React__default.createElement("div", _rollupPluginBabelHelpers._extends({}, props, {
    className: "teardrop-loader ".concat(className)
  }), React__default.createElement("span", null));
};

module.exports = TeardropLoader;
