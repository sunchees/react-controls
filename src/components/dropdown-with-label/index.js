import React from 'react';
import WrapWithLabel from '../wrap-with-label';
import Dropdown from '../dropdown';

const DropdownWithLabel = ({
  className = '',
  label,
  mandatory = false,
  dropdownProps = {}
}) => (
  <WrapWithLabel className={className} label={label} mandatory={mandatory}>
    <Dropdown {...dropdownProps} />
  </WrapWithLabel>
);

export default DropdownWithLabel;
