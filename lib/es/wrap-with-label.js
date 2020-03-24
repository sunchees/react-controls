import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-4576a74b.js';
import React from 'react';
import { P as PropTypes } from './index-1e9a47a9.js';
import Text from './text.js';
import Column from './column.js';

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
