import React from 'react';
import './cluster-loader.css';

const ClusterLoader = ({ className = '', ...props }) => (
  <div className={`cluster-loader ${className}`} {...props}>
    <span />
  </div>
);

export default ClusterLoader;
