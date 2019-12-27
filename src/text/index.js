import React from 'react';
import './text.css';

const Text = ({
  className = '',
  value,
  capitalized = false,
  bold = false,
  ...props
}) => (
  <span
    className={`text ${capitalized ? 'capitalized' : ''} ${
      bold ? 'bold' : ''
    } ${className}`}
    {...props}
  >
    {value}
  </span>
);

export default Text;
