import React from 'react';

export interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  /** 
   * Adds default button styles (height, padding, borders, background).
   */
  stylized?: boolean;
}

/**
 * Basic button component.
 */
declare class Button extends React.Component<ButtonProps> {}

export default Button;