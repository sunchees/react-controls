import './_rollupPluginBabelHelpers-4576a74b.js';
import React from 'react';
import { P as PropTypes } from './index-3248c44c.js';
import './text.js';
import './index-4f87497b.js';
import './column.js';
import './_react_commonjs-external-132f0747.js';
import Input from './input.js';
import WrapWithLabel from './wrap-with-label.js';

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
  return React.createElement(WrapWithLabel, {
    className: className,
    label: label,
    mandatory: mandatory
  }, React.createElement(Input, inputProps));
};
InputWithLabel.propTypes = {
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
   * Свойства компонента [Input](/#input).
   */
  inputProps: PropTypes.shape()
};

export default InputWithLabel;
