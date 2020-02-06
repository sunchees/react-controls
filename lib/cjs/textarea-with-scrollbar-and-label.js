'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

require('./style-inject.es-4c81be79.js');
var React = require('react');
var React__default = _interopDefault(React);
var index$2 = require('./index-ca26b417.js');
require('./text.js');
require('./index-f47bf584.js');
require('./column.js');
require('./_react_commonjs-external-30e5c7b3.js');
require('./content-height-scrollbar.js');
require('./scrollbar.js');
var wrapWithLabel = require('./wrap-with-label.js');
require('./textarea.js');
var textareaWithScrollbar = require('./textarea-with-scrollbar.js');

/**
 * Компонент многострочного поля ввода с добавленным скроллбаром.
 * <br>
 * Представляет собой компонент [TextareaWithScrollbar](#textareaWithScrollbar), обернутый в компонент [WrapWithLabel](#wrapWithLabel).
 */

var TextareaWithScrollbarAndLabel = function TextareaWithScrollbarAndLabel(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      label = _ref.label,
      _ref$mandatory = _ref.mandatory,
      mandatory = _ref$mandatory === void 0 ? false : _ref$mandatory,
      _ref$textareaWithScro = _ref.textareaWithScrollbarProps,
      textareaWithScrollbarProps = _ref$textareaWithScro === void 0 ? {} : _ref$textareaWithScro;
  return React__default.createElement(wrapWithLabel, {
    className: className,
    label: label,
    mandatory: mandatory
  }, React__default.createElement(textareaWithScrollbar, textareaWithScrollbarProps));
};
TextareaWithScrollbarAndLabel.propTypes = {
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
   * Свойства, передаваемые вложенному компоненту [TextareaWithScrollbar](#textareaWithScrollbar)
   */
  textareaWithScrollbarProps: index$2.PropTypes.shape()
};

module.exports = TextareaWithScrollbarAndLabel;
