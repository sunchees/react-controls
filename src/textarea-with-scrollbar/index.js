import React from 'react';
import Textarea from '../textarea';
import ContentHeightScrollbar from '../content-height-scrollbar';
import './textarea-with-scrollbar.css';

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
