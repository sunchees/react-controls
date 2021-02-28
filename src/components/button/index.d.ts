import React from 'react';

export interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  /** 
   * Флаг, добавляющий кнопке стилизацию по умолчанию (высота, отсутпы, граница, заливка).
   */
  stylized?: boolean;
}

/**
 * Базовый компонент кнопки.
 */
declare class Button extends React.Component<ButtonProps> {}

export default Button;