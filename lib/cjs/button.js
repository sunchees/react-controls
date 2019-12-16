'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-97d959d1.js');
var React = require('react');
var React__default = _interopDefault(React);
var styleInject_es = require('./style-inject.es-dcee06b6.js');

var css = ".button {\r\n  background: unset;\r\n  border: none;\r\n  cursor: pointer;\r\n  border-radius: 5px;\r\n  font-size: 18px;\r\n  padding: 5px;\r\n  text-align: center;\r\n  color: #424242;\r\n}\r\n\r\n.button:disabled {\r\n  cursor: default;\r\n  opacity: 0.5;\r\n}\r\n";
styleInject_es.styleInject(css);

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
