import './_rollupPluginBabelHelpers-4576a74b.js';
import React from 'react';
import { P as PropTypes } from './index-aba1d7fe.js';
import './text.js';
import './index-4f87497b.js';
import './column.js';
import WrapWithLabel from './wrap-with-label.js';
import Textarea from './textarea.js';

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
  return React.createElement(WrapWithLabel, {
    className: className,
    label: label,
    mandatory: mandatory
  }, React.createElement(Textarea, textareaProps));
};
TextareaWithLabel.propTypes = {
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
   * Свойства, передаваемые вложенному компоненту [Textarea](#textarea)
   */
  textareaProps: PropTypes.shape()
};

export default TextareaWithLabel;
