import React from 'react';
import WrapWithLabel from '../wrap-with-label';
import TextareaWithScrollbar from '../textarea-with-scrollbar';

const TextareaWithScrollbarAndLabel = ({
  className = '',
  label,
  mandatory = false,
  textareaWithScrollbarProps = {}
}) => (
  <WrapWithLabel className={className} label={label} mandatory={mandatory}>
    <TextareaWithScrollbar {...textareaWithScrollbarProps} />
  </WrapWithLabel>
);

export default TextareaWithScrollbarAndLabel;
