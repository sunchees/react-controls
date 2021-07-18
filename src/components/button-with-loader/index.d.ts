import React from 'react';
import { ButtonProps } from '../button';

export interface ButtonWithLoaderProps extends ButtonProps {
  /**
   * React component to render as button
   */
  ButtonComponent?: React.Component;
  /**
   * React component to render as loader
   */
  LoaderComponent?: React.Component;
  /**
   * Displays loader in place of button content
   */
  loading?: boolean;
  /**
   * Successfull operation notification text
   */
  success?: string;
  /**
   * Error notification text
   */
  error?: boolean;
}

/**
 * Basic button component combined with loader and operation result display.
 */
declare class ButtonWithLoader extends React.Component<ButtonWithLoaderProps> {}

export default ButtonWithLoader;