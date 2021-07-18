import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

/**
 * Basic button component.
 */
const Button = ({ className = '', stylized, children, ...props }) => (
  <button
    className={`button ${stylized ? 'stylized' : ''} ${className}`}
    {...props}
  >
    {children}
  </button>
);

Button.propTypes = {
  /**
   * Adds default button styles (height, padding, borders, background).
   */
  stylized: PropTypes.bool
};

export default Button;
