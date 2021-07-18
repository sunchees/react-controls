import React from 'react';
import { ButtonProps } from '../button';

export interface CheckboxProps extends ButtonProps {
  /** 
   * Adds checkmark to checkbox.
   * Also applies 'checked' selector to the component.
   */
  checked?: boolean;
  /** 
   * Function that will be called when checkbox is clicked.
   * @param item - Item associated with this checkbox. Set by the 'item' component prop.
   * @param name - Checkbox name. Set by the 'name' component prop.
   */
  onClick?: (item?: any, name?: string) => void;
  /**
   * Item associated with this checkbox
   */
  item?: any;
  /**
   * Checkbox name
   */
  name?: string;
}

/**
 * Basic checkbox component
 */
declare class Checkbox extends React.Component<CheckboxProps> {}

export default Checkbox;