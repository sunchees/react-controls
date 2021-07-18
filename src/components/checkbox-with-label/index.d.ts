import React from 'react';

export interface CheckobxWithLabelProps extends React.HTMLProps<HTMLDivElement> {
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
  /**
   * Label displayed next to checkbox
   */
  label?: string;
  /**
   * Disables the checkbox.
   * Also applies 'disabled' selector to the component wrap.
   */
  disabled?: boolean
}

/**
 * Checkbox with label
 */
declare class CheckboxWithLabel extends React.Component<CheckobxWithLabelProps> {}

export default CheckboxWithLabel;