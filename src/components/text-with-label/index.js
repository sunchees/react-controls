import React from 'react';
import PropTypes from 'prop-types';
import WrapWithLabel from '../wrap-with-label';
import Text from '../text';
import './text-with-label.css';

/**
 * Компонент текста с добавленным заголовком.
 * Представляет собой компонент Text, обернутый в компонент WrapWithLabel.
 */
const TextWithLabel = ({
  className,
  label,
  mandatory = false,
  textProps = {}
}) => (
  <WrapWithLabel className={className} label={label} mandatory={mandatory}>
    <Text {...textProps} className={`text-with-label__text ${textProps.className || ''}`} />
  </WrapWithLabel>
);

export default TextWithLabel;

TextWithLabel.propTypes = {
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
   * Свойства компонента [Text](/#text).
   */
  textProps: PropTypes.shape()
};
