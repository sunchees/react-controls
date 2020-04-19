import React from 'react';
import PropTypes from 'prop-types';
import WrapWithLabel from '../wrap-with-label';
import MultiSelect from '../multi-select';

/**
 * Компонент списка с множественным выбором с фильтром с добавленным заголовком.
 * Представляет собой компонент [MultiSelect](/#multiSelect), обернутый в компонент [WrapWithLabel](/#wrapwithlabel).
 */
const MultiSelectWithLabel = ({
  className = '',
  label,
  mandatory = false,
  multiSelectProps = {}
}) => (
  <WrapWithLabel className={className} label={label} mandatory={mandatory}>
    <MultiSelect {...multiSelectProps} />
  </WrapWithLabel>
);

export default MultiSelectWithLabel;

MultiSelectWithLabel.propTypes = {
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
   * Свойства компонента [MultiSelect](/#multiSelect).
   */
  multiSelectProps: PropTypes.shape()
};