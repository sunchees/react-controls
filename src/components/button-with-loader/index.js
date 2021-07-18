import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button';
import DashLoader from '../dash-loader';
import Text from '../text';
import './button-with-loader.css';

/**
 * Basic button component combined with loader and operation result display.
 */
const ButtonWithLoader = ({
  className = '',
  ButtonComponent = Button,
  LoaderComponent = DashLoader,
  loading,
  success,
  error,
  children,
  ...props
}) => (
  <div className={`button-with-loader ${className}`}>
    <ButtonComponent
      className={`button-with-loader__button ${loading ? 'loading' : ''}`}
      disabled={loading}
      {...props}
    >
      {loading ? (
        <LoaderComponent className='button-with-loader__loader' />
      ) : (
        children
      )}
    </ButtonComponent>
    {success ? (
      <Text className='button-with-loader__success' value={success} />
    ) : error ? (
      <Text className='button-with-loader__error' value={error} />
    ) : null}
  </div>
);

export default ButtonWithLoader;

ButtonWithLoader.propTypes = {
  /**
   * React component to render as button
   */
  ButtonComponent: PropTypes.elementType,
  /**
   * React component to render as loader
   */
  LoaderComponent: PropTypes.elementType,
  /**
   * Displays loader in place of button content
   */
  loading: PropTypes.bool,
  /**
   * Successfull operation notification text
   */
  success: PropTypes.string,
  /**
   * Error notification text
   */
  error: PropTypes.string
};

ButtonWithLoader.defaultProps = {
  ButtonComponent: Button,
  LoaderComponent: DashLoader
};