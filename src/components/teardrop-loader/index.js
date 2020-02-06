import React from 'react';
import './teardrop-loader.css';

/**
 * Компонент лоадера с анимацией "Teardrop".
 * @see https://codepen.io/rbv912/pen/dYbqLQ (loader-6)
 */
const TeardropLoader = ({ className = '', ...props }) => (
  <div {...props} className={`teardrop-loader ${className}`}>
    <span />
  </div>
);

export default TeardropLoader;
