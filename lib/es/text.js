import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-4576a74b.js';
import React from 'react';
import { P as PropTypes } from './index-1e9a47a9.js';

/**
 * Базовый компонент текста.
 * <br>
 * Представляет собой обертку над HTML-элементом span с добавлением стилей.
 */

var Text = function Text(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      value = _ref.value,
      _ref$capitalized = _ref.capitalized,
      capitalized = _ref$capitalized === void 0 ? false : _ref$capitalized,
      _ref$bold = _ref.bold,
      bold = _ref$bold === void 0 ? false : _ref$bold,
      props = _objectWithoutProperties(_ref, ["className", "value", "capitalized", "bold"]);

  return React.createElement("span", _extends({
    className: "text ".concat(capitalized ? 'capitalized' : '', " ").concat(bold ? 'bold' : '', " ").concat(className)
  }, props), value);
};
Text.propTypes = {
  /** Текст, отображаемый компонентом */
  value: PropTypes.string,

  /**
   * Флаг, определяющий нужно ли отображать 'props.value' с большой буквы.
   * <br>
   * Если флаг выставлен в значение true - к тексту применяется стиль 'capitalized'
   */
  capitalized: PropTypes.bool,

  /**
   * Флаг, определяющий нужно ли отображать 'props.value' жирным шрифтом.
   * <br>
   * Если флаг выставлен в значение true - к тексту применяется стиль 'bold'
   */
  bold: PropTypes.bool
};

export default Text;
