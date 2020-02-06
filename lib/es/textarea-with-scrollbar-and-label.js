import './style-inject.es-4d895b0c.js';
import React from 'react';
import { P as PropTypes } from './index-aba1d7fe.js';
import './text.js';
import './index-4f87497b.js';
import './column.js';
import './_react_commonjs-external-132f0747.js';
import './content-height-scrollbar.js';
import './scrollbar.js';
import WrapWithLabel from './wrap-with-label.js';
import './textarea.js';
import TextareaWithScrollbar from './textarea-with-scrollbar.js';

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
  return React.createElement(WrapWithLabel, {
    className: className,
    label: label,
    mandatory: mandatory
  }, React.createElement(TextareaWithScrollbar, textareaWithScrollbarProps));
};
TextareaWithScrollbarAndLabel.propTypes = {
  /**
   * Текст заголовка
   */
  label: PropTypes.string,

  /**
   * Обязательность контента внутри обертки.
   * <br>
   * true - Добавляет класс 'mandatory' к компоненту обертки
   */
  mandatory: PropTypes.bool,

  /**
   * Свойства, передаваемые вложенному компоненту [TextareaWithScrollbar](#textareaWithScrollbar)
   */
  textareaWithScrollbarProps: PropTypes.shape()
};

export default TextareaWithScrollbarAndLabel;
