import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button';
import DashLoader from '../dash-loader';
import Text from '../text';
import './button-with-loader.css';

/**
 * Базовый компонент кнопки с лоадером и результатом выполнения операции.
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
   * Класс компонента для отрисовки кнопки.
   */
  ButtonComponent: PropTypes.elementType,
  /**
   * Класс компонента для отрисовки лоадера.
   */
  LoaderComponent: PropTypes.elementType,
  /**
   * Регулирует отображение лоадера или контента кнопки
   */
  loading: PropTypes.bool,
  /**
   * Текст успешного выполнения операции
   */
  success: PropTypes.string,
  /**
   * Текст ошибки выполнения операции
   */
  error: PropTypes.string
};

ButtonWithLoader.defaultProps = {
  ButtonComponent: Button,
  LoaderComponent: DashLoader
};