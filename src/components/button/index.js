import React from 'react';
import './button.css';

const Button = ({ className = '', children, ...props }) => (
  <button className={`button ${className}`} {...props}>
    {children}
  </button>
);

export default Button;
