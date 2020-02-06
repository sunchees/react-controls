'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

require('./style-inject.es-4c81be79.js');
var React = require('react');
var React__default = _interopDefault(React);
var index = require('./index-ca26b417.js');
require('./text.js');
require('./index-f47bf584.js');
require('./column.js');
require('./_react_commonjs-external-30e5c7b3.js');
var input = require('./input.js');
var wrapWithLabel = require('./wrap-with-label.js');

/**
 * Компонент поля ввода с добавленным заголовком.
 * Представляет собой компонент Input, обернутый в компонент WrapWithLabel.
 */

var InputWithLabel = function InputWithLabel(_ref) {
  var className = _ref.className,
      label = _ref.label,
      _ref$mandatory = _ref.mandatory,
      mandatory = _ref$mandatory === void 0 ? false : _ref$mandatory,
      _ref$inputProps = _ref.inputProps,
      inputProps = _ref$inputProps === void 0 ? {} : _ref$inputProps;
  return React__default.createElement(wrapWithLabel, {
    className: className,
    label: label,
    mandatory: mandatory
  }, React__default.createElement(input, inputProps));
};
InputWithLabel.propTypes = {
  /**
   * Текст заголовка
   */
  label: index.PropTypes.string,

  /**
   * Обязательность контента внутри обертки.
   * <br>
   * true - Добавляет класс 'mandatory' к компоненту обертки
   */
  mandatory: index.PropTypes.bool,

  /**
   * Свойства компонента [Input](/#input).
   */
  inputProps: index.PropTypes.shape()
};

module.exports = InputWithLabel;
