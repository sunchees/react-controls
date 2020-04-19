'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-a036f66d.js');
var React = require('react');
var React__default = _interopDefault(React);

/**
 * Компонент лоадера с анимацией "Cluster".
 * @see https://codepen.io/rbv912/pen/dYbqLQ (loader-5)
 */

var ClusterLoader = function ClusterLoader(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      props = _rollupPluginBabelHelpers._objectWithoutProperties(_ref, ["className"]);

  return React__default.createElement("div", _rollupPluginBabelHelpers._extends({
    className: "cluster-loader ".concat(className)
  }, props), React__default.createElement("span", null));
};

module.exports = ClusterLoader;
