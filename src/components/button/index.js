import React from 'react';
import './button.css';

/**
 * Базовый компонент кнопки.
 */
const Button = ({ className = '', children, ...props }) => (
  <button className={`button ${className}`} {...props}>
    {children}
  </button>
);

export default Button;