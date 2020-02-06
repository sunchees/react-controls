'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

require('./style-inject.es-4c81be79.js');
var React = require('react');
var React__default = _interopDefault(React);
var index$2 = require('./index-ca26b417.js');
require('./text.js');
require('./index-f47bf584.js');
require('./column.js');
var wrapWithLabel = require('./wrap-with-label.js');
var textarea = require('./textarea.js');

/**
 * Компонент многострочного поля ввода с добавленным заголовком.
 * <br>
 * Представляет собой компонент [Textarea](#textarea), обернутый в компонент [WrapWithLabel](#wrapWithLabel).
 */

var TextareaWithLabel = function TextareaWithLabel(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      label = _ref.label,
      _ref$mandatory = _ref.mandatory,
      mandatory = _ref$mandatory === void 0 ? false : _ref$mandatory,
      _ref$textareaProps = _ref.textareaProps,
      textareaProps = _ref$textareaProps === void 0 ? {} : _ref$textareaProps;
  return React__default.createElement(wrapWithLabel, {
    className: className,
    label: label,
    mandatory: mandatory
  }, React__default.createElement(textarea, textareaProps));
};
TextareaWithLabel.propTypes = {
  /**
   * Текст заголовка
   */
  label: index$2.PropTypes.string,

  /**
   * Обязательность контента внутри обертки.
   * <br>
   * true - Добавляет класс 'mandatory' к компоненту обертки
   */
  mandatory: index$2.PropTypes.bool,

  /**
   * Свойства, передаваемые вложенному компоненту [Textarea](#textarea)
   */
  textareaProps: index$2.PropTypes.shape()
};

module.exports = TextareaWithLabel;
