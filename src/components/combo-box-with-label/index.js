import React from 'react';
import PropTypes from 'prop-types';
import WrapWithLabel from '../wrap-with-label';
import ComboBox from '../combo-box';

/**
 * Компонент выпадающего списка с фильтром с добавленным заголовком.
 * Представляет собой компонент [ComboBox](/#comboBox), обернутый в компонент [WrapWithLabel](/#wrapwithlabel).
 */
const ComboBoxWithLabel = ({
  className = '',
  label,
  mandatory = false,
  comboBoxProps = {}
}) => (
  <WrapWithLabel className={`combo-box-with-label ${className}`} label={label} mandatory={mandatory}>
    <ComboBox {...comboBoxProps} />
  </WrapWithLabel>
);

export default ComboBoxWithLabel;

ComboBoxWithLabel.propTypes = {
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
   * Свойства компонента [ComboBox](/#comboBox).
   */
  comboBoxProps: PropTypes.shape({})
};