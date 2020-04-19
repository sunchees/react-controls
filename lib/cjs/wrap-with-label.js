'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-a036f66d.js');
var React = require('react');
var React__default = _interopDefault(React);
var index = require('./index-ca26b417.js');
var text = require('./text.js');
var column = require('./column.js');

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
      props = _rollupPluginBabelHelpers._objectWithoutProperties(_ref, ["className", "label", "mandatory", "children", "emptyText"]);

  return React__default.createElement(column, _rollupPluginBabelHelpers._extends({
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
