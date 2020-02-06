import React from 'react';
import PropTypes from 'prop-types';
import WrapWithLabel from '../wrap-with-label';
import TextareaWithScrollbar from '../textarea-with-scrollbar';

/**
 * Компонент многострочного поля ввода с добавленным скроллбаром.
 * <br>
 * Представляет собой компонент [TextareaWithScrollbar](#textareaWithScrollbar), обернутый в компонент [WrapWithLabel](#wrapWithLabel).
 */
const TextareaWithScrollbarAndLabel = ({
  className = '',
  label,
  mandatory = false,
  textareaWithScrollbarProps = {}
}) => (
  <WrapWithLabel className={className} label={label} mandatory={mandatory}>
    <TextareaWithScrollbar {...textareaWithScrollbarProps} />
  </WrapWithLabel>
);

export default TextareaWithScrollbarAndLabel;

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