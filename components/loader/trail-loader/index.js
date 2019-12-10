import React from 'react';
import './trail-loader.css';

const TrailLoader = ({ className = '', ...props }) => (
  <div {...props} className={`trail-loader ${className}`}>
    <span />
  </div>
);

export default TrailLoader;
