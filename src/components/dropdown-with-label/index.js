import React from 'react';
import PropTypes from 'prop-types';
import WrapWithLabel from '../wrap-with-label';
import Dropdown from '../dropdown';

/**
 * Компонент выпадающего списка с добавленным заголовком.
 * Представляет собой компонент [Dropdown](/#dropdown), обернутый в компонент [WrapWithLabel](/#wrapwithlabel).
 */
const DropdownWithLabel = ({
  className = '',
  label,
  mandatory = false,
  dropdownProps = {}
}) => (
  <WrapWithLabel className={className} label={label} mandatory={mandatory}>
    <Dropdown {...dropdownProps} />
  </WrapWithLabel>
);

export default DropdownWithLabel;

DropdownWithLabel.propTypes = {
  /**
   * Текст заголовка
   */
  label: PropTypes.string,
  /**
   * Обязательность контента внутри обертки.
   * <br>
   * true - Добавляет класс 'mandatory' к компоненту обертки
   */
  mandatory: PropTypes.bool,
  /**
   * Свойства компонента [Dropdown](/#dropdown).
   */
  dropdownProps: PropTypes.shape()
};