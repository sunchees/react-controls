import React from 'react';
import PropTypes from 'prop-types';
import Textarea from '../textarea';
import ContentHeightScrollbar from '../content-height-scrollbar';
import './textarea-with-scrollbar.css';

/**
 * Компонент многострочного поля ввода с добавленным скроллбаром.
 * <br>
 * Представляет собой компонент [Textarea](#textarea), оберутый в компонент [ContentHeightScrollbar](#contentHeightScrollbar).
 */
const TextareaWithScrollbar = ({
  className = '',
  scrollbarProps = {},
  textareaProps = {}
}) => (
  <div className={`textarea-with-scrollbar ${className}`}>
    <ContentHeightScrollbar
      {...scrollbarProps}
      className='textarea-with-scrollbar__scrollbar'
    >
      <Textarea
        {...textareaProps}
        className='textarea-with-scrollbar__textarea'
      />
    </ContentHeightScrollbar>
  </div>
);

export default TextareaWithScrollbar;

TextareaWithScrollbar.propTypes = {
  /**
   * Дополнительные стили, применяемые к div-обертке компонента
   */
  className: PropTypes.string,
  /**
   * Свойства, передаваемые вложенному компоненту [ContentHeightScrollbar](#contentHeightScrollbar)
   */
  scrollbarProps: PropTypes.shape(),
  /**
   * Свойства, передаваемые вложенному компоненту [Textarea](#textarea)
   */
  textareaProps: PropTypes.shape()
};