import React from 'react';
import './teardrop-loader.css';

const TeardropLoader = ({ className = '', ...props }) => (
  <div {...props} className={`teardrop-loader ${className}`}>
    <span />
  </div>
);

export default TeardropLoader;
