import React from 'react';
import './dash-loader.css';

const DashLoader = ({ className = '', ...props }) => (
  <div className={`dash-loader ${className}`} {...props}>
    <span />
  </div>
);

export default DashLoader;
