import React from 'react';
import PropTypes from 'prop-types';
import DashLoader from '../dash-loader';
import Row from '../row';
import './wrap-with-loader.css';

/**
 * Компонент-обертка, добавляющий к дочернему компоненту опциональный лоадер.
 * <br>
 * Основано на базе компонента [Row](#row)
 */
const WrapWithLoader = ({
  className = '',
  loading,
  LoaderComponent = DashLoader,
  children,
  ...props
}) => (
  <Row className={`wrap-with-loader ${className}`} {...props}>
    {children}
    {loading ? <LoaderComponent className='wrap-with-loader__loader' /> : null}
  </Row>
);

export default WrapWithLoader;

WrapWithLoader.propTypes = {
  /**
   * Флаг, указывающий на необходимость отрисовки лоадера
   */
  loading: PropTypes.bool,
  /**
   * Класс компонента для отрисовки лоадера. По умолчанию используется DashLoader
   */
  LoaderComponent: PropTypes.elementType
};
