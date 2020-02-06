import React from 'react';
import PropTypes from 'prop-types';
import Text from '../text';
import Column from '../column';
import './wrap-with-label.css';

/**
 * Компонент-обертка, добавляющий к дочернему компоненту заголовок.
 * <br>
 * Основано на базе компонента [Column](#column)
 */
const WrapWithLabel = ({
  className = '',
  label,
  mandatory = false,
  children,
  emptyText,
  ...props
}) => (
  <Column
    className={`wrap-with-label ${mandatory ? 'mandatory' : ''} ${className}`}
    {...props}
  >
    <Text className='wrap-with-label__label' value={label} />
    <Column className='wrap-with-label__content'>
      {children instanceof Array && children.length
        ? children
        : children ||
          (emptyText ? (
            <Text className='wrap-with-label__empty-text' value={emptyText} />
          ) : null)}
    </Column>
  </Column>
);

export default WrapWithLabel;

WrapWithLabel.propTypes = {
  /**
   * Обязательность контента внутри обертки.
   * <br>
   * true - Добавляет класс .mandatory к компоненту поля ввода
   */
  mandatory: PropTypes.bool,
  /**
   * Текст заголовка
   */
  label: PropTypes.string,
  /**
   * Текст, отображаемый внутри обертки при отсутствии дочерних компонентов
   */
  emptyText: PropTypes.string
};