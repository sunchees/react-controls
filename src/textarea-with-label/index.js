import React from 'react';

import Textarea from '../textarea';
import WrapWithLabel from '../wrap-with-label';

const TextareaWithLabel = ({
  className = '',
  label,
  mandatory,
  textareaProps
}) => (
  <WrapWithLabel className={className} label={label} mandatory={mandatory}>
    <Textarea {...textareaProps} />
  </WrapWithLabel>
);

export default TextareaWithLabel;
