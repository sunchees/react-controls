import React from 'react';
import './cluster-loader.css';

const ClusterLoader = ({ className = '', ...props }) => (
  <div {...props} className={`cluster-loader ${className}`}>
    <span />
  </div>
);

export default ClusterLoader;
