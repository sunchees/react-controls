'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var styleInject_es = require('./style-inject.es-4c81be79.js');
var React = require('react');
var React__default = _interopDefault(React);
var index = require('./index-ca26b417.js');

var css = ".text {\r\n  display: block;\r\n  color: #424242;\r\n}\r\n\r\n.text.capitalized::first-letter {\r\n  text-transform: capitalize;\r\n}\r\n\r\n.text.bold {\r\n  font-weight: bold;\r\n}\r\n";
styleInject_es.styleInject(css);

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
      props = styleInject_es._objectWithoutProperties(_ref, ["className", "value", "capitalized", "bold"]);

  return React__default.createElement("span", styleInject_es._extends({
    className: "text ".concat(capitalized ? 'capitalized' : '', " ").concat(bold ? 'bold' : '', " ").concat(className)
  }, props), value);
};
Text.propTypes = {
  /** Текст, отображаемый компонентом */
  value: index.PropTypes.string,

  /**
   * Флаг, определяющий нужно ли отображать 'props.value' с большой буквы.
   * <br>
   * Если флаг выставлен в значение true - к тексту применяется стиль 'capitalized'
   */
  capitalized: index.PropTypes.bool,

  /**
   * Флаг, определяющий нужно ли отображать 'props.value' жирным шрифтом.
   * <br>
   * Если флаг выставлен в значение true - к тексту применяется стиль 'bold'
   */
  bold: index.PropTypes.bool
};

module.exports = Text;
