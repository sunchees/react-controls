import React from 'react';

import WrapWithLabel from '../../../wrap-with-label';
import TextareaWithScrollbar from '..';

const TextareaWithScrollbarAndLabel = ({
  className = '',
  label,
  mandatory,
  textareaProps
}) => (
  <WrapWithLabel className={className} label={label} mandatory={mandatory}>
    <TextareaWithScrollbar {...textareaProps} />
  </WrapWithLabel>
);

export default TextareaWithScrollbarAndLabel;
