'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-a036f66d.js');
var React = require('react');
var React__default = _interopDefault(React);

/**
 * Базовый компонент кнопки.
 */

var Button = function Button(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      children = _ref.children,
      props = _rollupPluginBabelHelpers._objectWithoutProperties(_ref, ["className", "children"]);

  return React__default.createElement("button", _rollupPluginBabelHelpers._extends({
    className: "button ".concat(className)
  }, props), children);
};

module.exports = Button;
