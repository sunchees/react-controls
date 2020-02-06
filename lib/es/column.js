import { s as styleInject, _ as _objectWithoutProperties, a as _extends } from './style-inject.es-4d895b0c.js';
import React from 'react';

var css = ".column {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n";
styleInject(css);

/**
 * Вспомогательный компонент для упрощения верстки и читаемости разметки.
 * Представляет собой обертку над HTML-элементом div с примененными стилями для расположения дочерних элементов в столбец.
 */

var Column = function Column(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["className", "children"]);

  return React.createElement("div", _extends({
    className: "column ".concat(className)
  }, props), children);
};

export default Column;
