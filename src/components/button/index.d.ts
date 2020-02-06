import React from 'react';

export interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {}

/**
 * Базовый компонент кнопки.
 */
declare class Button extends React.Component<ButtonProps> {}

export default Button;