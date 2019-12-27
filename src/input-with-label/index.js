import React from 'react';
import Input from '../input';
import WrapWithLabel from '../wrap-with-label';

const InputWithLabel = ({
  className,
  label,
  inputProps,
  mandatory = false
}) => (
  <WrapWithLabel className={className} label={label} mandatory={mandatory}>
    <Input {...inputProps} />
  </WrapWithLabel>
);

export default InputWithLabel;
