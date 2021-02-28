import React from 'react';
import PropTypes from 'prop-types';
import Textarea from '../textarea';
import WrapWithLabel from '../wrap-with-label';

/**
 * Компонент многострочного поля ввода с добавленным заголовком.
 * <br>
 * Представляет собой компонент [Textarea](#textarea), обернутый в компонент [WrapWithLabel](#wrapWithLabel).
 */
const TextareaWithLabel = ({
  className = '',
  label,
  mandatory = false,
  textareaProps = {}
}) => (
  <WrapWithLabel className={`textarea-with-label ${className}`} label={label} mandatory={mandatory}>
    <Textarea {...textareaProps} />
  </WrapWithLabel>
);

export default TextareaWithLabel;

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
  textareaProps: PropTypes.shape({})
};