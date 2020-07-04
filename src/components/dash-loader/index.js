import React from 'react';
import './dash-loader.css';

/**
 * Компонент лоадера с анимацией "Dash".
 * @see https://codepen.io/rbv912/pen/dYbqLQ (loader-2)
 */
const DashLoader = ({ className = '', ...props }) => (
  <div className={`dash-loader ${className}`} {...props}>
    <span />
  </div>
);

export default DashLoader;
