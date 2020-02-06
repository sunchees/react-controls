'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var styleInject_es = require('./style-inject.es-4c81be79.js');
var React = require('react');
var React__default = _interopDefault(React);

var css = ".row {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n";
styleInject_es.styleInject(css);

/**
 * Вспомогательный компонент для упрощения верстки и читаемости разметки.
 * Представляет собой обертку над HTML-элементом div с примененными стилями для расположения дочерних элементов в ряд.
 */

var Row = function Row(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      children = _ref.children,
      props = styleInject_es._objectWithoutProperties(_ref, ["className", "children"]);

  return React__default.createElement("div", styleInject_es._extends({
    className: "row ".concat(className)
  }, props), children);
};

module.exports = Row;
