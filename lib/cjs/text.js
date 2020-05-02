'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-a036f66d.js');
var React = require('react');
var React__default = _interopDefault(React);
var index = require('./index-54c38a10.js');

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
      props = _rollupPluginBabelHelpers._objectWithoutProperties(_ref, ["className", "value", "capitalized", "bold"]);

  return React__default.createElement("span", _rollupPluginBabelHelpers._extends({
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
