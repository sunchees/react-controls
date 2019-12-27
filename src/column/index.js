import React from 'react';
import './column.css';

const Column = ({ className = '', children, ...props }) => (
  <div className={`column ${className}`} {...props}>
    {children}
  </div>
);

export default Column;
