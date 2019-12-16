import React from 'react';
import './dash-loader.css';

const DashLoader = ({ className = '', ...props }) => (
  <div {...props} className={`dash-loader ${className}`}>
    <span />
  </div>
);

export default DashLoader;
