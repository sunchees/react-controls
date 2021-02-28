import React from 'react';
import PropTypes from 'prop-types';
import WrapWithLabel from '../wrap-with-label';
import ContentHeightScrollbar from '../content-height-scrollbar';
import Text from '../text';
import './text-with-scrollbar-and-label.css';

/**
 * Компонент текста с добавленным заголовком и скроллбаром. Предназначен для отображения многострочных текстовых значений
 * Представляет собой компонент Text, обернутый в компонент ContentHeightScrollbar, обернутый в WrapWithLabel.
 */
const TextWithScrollbarAndLabel = ({
  className,
  label,
  mandatory = false,
  hideIfEmpty = true,
  scrollbarProps = {},
  textProps = {}
}) =>
  textProps.value || !hideIfEmpty ? (
    <WrapWithLabel className={`text-with-scrollbar-and-label ${className}`} label={label} mandatory={mandatory}>
      <ContentHeightScrollbar
        {...scrollbarProps}
        className='text-with-scrollbar-and-label__scrollbar'
      >

        <Text
          {...textProps}
          className='text-with-scrollbar-and-label__text'
        />
      </ContentHeightScrollbar>
    </WrapWithLabel>
  ) : null;

export default TextWithScrollbarAndLabel;

TextWithScrollbarAndLabel.propTypes = {
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
   * Свойства компонента [ContentHeightScrollbar](/#contentHeightScrollbar).
   */
  scrollbarProps: PropTypes.shape({}),
  /**
   * Свойства компонента [Text](/#text).
   */
  textProps: PropTypes.shape({})
};
