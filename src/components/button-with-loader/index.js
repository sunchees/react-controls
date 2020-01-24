import React from 'react';
import Button from '../button';
import DashLoader from '../dash-loader';
import Text from '../text';
import './button-with-loader.css';

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
