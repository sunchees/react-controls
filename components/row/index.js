import React from 'react';
import './row.css';

const Row = ({ className = '', children, ...props }) => (
  <div className={`row ${className}`} {...props}>
    {children}
  </div>
);

export default Row;
