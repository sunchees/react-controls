import React from 'react';
import './cluster-loader.css';

/**
 * Loader component with "Cluster" animation.
 * @see https://codepen.io/rbv912/pen/dYbqLQ (loader-5)
 */
const ClusterLoader = ({ className = '', ...props }) => (
  <div className={`cluster-loader ${className}`} {...props}>
    <span />
  </div>
);

export default ClusterLoader;
