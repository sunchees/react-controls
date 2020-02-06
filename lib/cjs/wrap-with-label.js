'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var styleInject_es = require('./style-inject.es-4c81be79.js');
var React = require('react');
var React__default = _interopDefault(React);
var index = require('./index-ca26b417.js');
var text = require('./text.js');
var column = require('./column.js');

var css = ".wrap-with-label {\r\n  width: fit-content;\r\n}\r\n\r\n\r\n.wrap-with-label__label {\r\n  line-height: 27px;\r\n  font-size: 12px;\r\n  color: #a7a7a7;\r\n}\r\n\r\n.wrap-with-label.mandatory > .wrap-with-label__label::after {\r\n  content: \" *\";\r\n  color: #d22c75;\r\n  font-weight: normal;\r\n}\r\n\r\n.wrap-with-label__empty-text {\r\n  line-height: 27px;\r\n}\r\n";
styleInject_es.styleInject(css);

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
      props = styleInject_es._objectWithoutProperties(_ref, ["className", "label", "mandatory", "children", "emptyText"]);

  return React__default.createElement(column, styleInject_es._extends({
    className: "wrap-with-label ".concat(mandatory ? 'mandatory' : '', " ").concat(className)
  }, props), React__default.createElement(text, {
    className: "wrap-with-label__label",
    value: label
  }), React__default.createElement(column, {
    className: "wrap-with-label__content"
  }, children instanceof Array && children.length ? children : children || (emptyText ? React__default.createElement(text, {
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
  mandatory: index.PropTypes.bool,

  /**
   * Текст заголовка
   */
  label: index.PropTypes.string,

  /**
   * Текст, отображаемый внутри обертки при отсутствии дочерних компонентов
   */
  emptyText: index.PropTypes.string
};

module.exports = WrapWithLabel;
