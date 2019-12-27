import React from 'react';
import WrapWithLabel from '../wrap-with-label';
import Dropdown from '../dropdown';

const DropdownWithLabel = ({
  className,
  label,
  dropdownProps,
  mandatory = false
}) => (
  <WrapWithLabel className={className} label={label} mandatory={mandatory}>
    <Dropdown {...dropdownProps} />
  </WrapWithLabel>
);

export default DropdownWithLabel;
