import React from 'react';
import PropTypes from 'prop-types';
import './text.css';

/**
 * Базовый компонент текста.
 * <br>
 * Представляет собой обертку над HTML-элементом span с добавлением стилей.
 */
const Text = ({
  className = '',
  value,
  capitalized = false,
  bold = false,
  multiline = true,
  ...props
}) => (
  <span
    className={`text ${capitalized ? 'capitalized' : ''} ${
      bold ? 'bold' : ''
    } ${multiline ? 'multiline' : ''} ${className}`}
    {...props}
  >
    {value}
  </span>
);

export default Text;

Text.propTypes = {
  /** Текст, отображаемый компонентом */
  value: PropTypes.any,
  /**
   * Флаг, определяющий нужно ли отображать 'props.value' с большой буквы.
   * <br>
   * Если флаг выставлен в значение true - к тексту применяется стиль 'capitalized'
   */
  capitalized: PropTypes.bool,
  /**
   * Флаг, определяющий нужно ли отображать 'props.value' жирным шрифтом.
   * <br>
   * Если флаг выставлен в значение true - к тексту применяется стиль 'bold'
   */
  bold: PropTypes.bool,
  /**
   * Флаг, определяющий нужно ли отображать 'props.value' в несколько строк, при наличии переносов или ограниченной ширине.
   * <br>
   * Если флаг выставлен в значение true - к тексту применяется стиль 'multiline'. По умолчанию true
   */
  multiline: PropTypes.bool
};
