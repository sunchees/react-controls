import React from 'react';
import './column.css';

/**
 * Utility component which displays wrapped children components in a column (flex-direction: column).
 */
const Column = ({ className = '', children, ...props }) => (
  <div className={`column ${className}`} {...props}>
    {children}
  </div>
);

export default Column;
