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
  hideIfEmpty = true,
  textProps = {}
}) =>
  textProps.value || !hideIfEmpty ? (
    <WrapWithLabel className={`text-with-label ${className}`} label={label} mandatory={mandatory}>
      <Text
        {...textProps}
        className='text-with-label__text'
      />
    </WrapWithLabel>
  ) : null;

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
   * Скрывает компонент в случае, если textProps.value не указан
   * <br>
   * По умолчанию: true
   */
  hideIfEmpty: PropTypes.bool,
  /**
   * Свойства компонента [Text](/#text).
   */
  textProps: PropTypes.shape({})
};
