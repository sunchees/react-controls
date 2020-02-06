import { s as styleInject, _ as _objectWithoutProperties, a as _extends } from './style-inject.es-4d895b0c.js';
import React from 'react';
import { P as PropTypes } from './index-aba1d7fe.js';

var css = ".text {\r\n  display: block;\r\n  color: #424242;\r\n}\r\n\r\n.text.capitalized::first-letter {\r\n  text-transform: capitalize;\r\n}\r\n\r\n.text.bold {\r\n  font-weight: bold;\r\n}\r\n";
styleInject(css);

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
