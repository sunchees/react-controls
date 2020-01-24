import React from 'react';
import { WrapWithLabelProps } from '../wrap-with-label';
import { DropdownProps } from '../dropdown';

export interface DropdownWithLabelProps extends React.HTMLProps<WrapWithLabelProps> {
  /**
   * Свойства, передаваемые вложенному компоненту <Dropdown />
   */
  dropdownProps?: DropdownProps;
}

/**
 * Компонент выпадающего списка с добавленным заголовком.
 * Представляет собой компонент <Dropdown />, обернутый в компонент <WrapWithLabel />.
 */
declare class DropdownWithLabel extends React.Component<DropdownWithLabelProps> {}

export default DropdownWithLabel;