import { s as styleInject, _ as _objectWithoutProperties, a as _extends } from './style-inject.es-4d895b0c.js';
import React from 'react';
import { P as PropTypes } from './index-aba1d7fe.js';
import Text from './text.js';
import Column from './column.js';

var css = ".wrap-with-label {\r\n  width: fit-content;\r\n}\r\n\r\n\r\n.wrap-with-label__label {\r\n  line-height: 27px;\r\n  font-size: 12px;\r\n  color: #a7a7a7;\r\n}\r\n\r\n.wrap-with-label.mandatory > .wrap-with-label__label::after {\r\n  content: \" *\";\r\n  color: #d22c75;\r\n  font-weight: normal;\r\n}\r\n\r\n.wrap-with-label__empty-text {\r\n  line-height: 27px;\r\n}\r\n";
styleInject(css);

/**
 * Компонент-обертка, добавляющий к дочернему компоненту заголовок.
 * <br>
 * Основано на базе компонента [Column](#column)
 */

var WrapWithLabel = function WrapWithLabel(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      label = _ref.label,
      _ref$mandatory = _ref.mandatory,
      mandatory = _ref$mandatory === void 0 ? false : _ref$mandatory,
      children = _ref.children,
      emptyText = _ref.emptyText,
      props = _objectWithoutProperties(_ref, ["className", "label", "mandatory", "children", "emptyText"]);

  return React.createElement(Column, _extends({
    className: "wrap-with-label ".concat(mandatory ? 'mandatory' : '', " ").concat(className)
  }, props), React.createElement(Text, {
    className: "wrap-with-label__label",
    value: label
  }), React.createElement(Column, {
    className: "wrap-with-label__content"
  }, children instanceof Array && children.length ? children : children || (emptyText ? React.createElement(Text, {
    className: "wrap-with-label__empty-text",
    value: emptyText
  }) : null)));
};
WrapWithLabel.propTypes = {
  /**
   * Обязательность контента внутри обертки.
   * <br>
   * true - Добавляет класс .mandatory к компоненту поля ввода
   */
  mandatory: PropTypes.bool,

  /**
   * Текст заголовка
   */
  label: PropTypes.string,

  /**
   * Текст, отображаемый внутри обертки при отсутствии дочерних компонентов
   */
  emptyText: PropTypes.string
};

export default WrapWithLabel;
