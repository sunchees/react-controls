import React from 'react';
import PropTypes from 'prop-types';
import Input from '../input';
import WrapWithLabel from '../wrap-with-label';

/**
 * Компонент поля ввода с добавленным заголовком.
 * Представляет собой компонент Input, обернутый в компонент WrapWithLabel.
 */
const InputWithLabel = ({
  className,
  label,
  mandatory = false,
  inputProps = {}
}) => (
  <WrapWithLabel className={`input-with-label ${className}`} label={label} mandatory={mandatory}>
    <Input {...inputProps} />
  </WrapWithLabel>
);

export default InputWithLabel;

InputWithLabel.propTypes = {
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
   * Свойства компонента [Input](/#input).
   */
  inputProps: PropTypes.shape({})
};