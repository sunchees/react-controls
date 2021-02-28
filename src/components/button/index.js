import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

/**
 * Базовый компонент кнопки.
 */
const Button = ({ className = '', stylized, children, ...props }) => (
  <button
    className={`button ${stylized ? 'stylized' : ''} ${className}`}
    {...props}
  >
    {children}
  </button>
);

Button.propTypes = {
  /**
   * Флаг, добавляющий кнопке стилизацию по умолчанию (высота, отсутпы, граница, заливка).
   */
  stylized: PropTypes.bool
};

export default Button;
