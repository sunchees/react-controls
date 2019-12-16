'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-97d959d1.js');
var React = require('react');
var React__default = _interopDefault(React);
var styleInject_es = require('./style-inject.es-dcee06b6.js');

var css = ".column {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n";
styleInject_es.styleInject(css);

var Column = function Column(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      children = _ref.children,
      props = _rollupPluginBabelHelpers._objectWithoutProperties(_ref, ["className", "children"]);

  return React__default.createElement("div", _rollupPluginBabelHelpers._extends({
    className: "column ".concat(className)
  }, props), children);
};

module.exports = Column;
