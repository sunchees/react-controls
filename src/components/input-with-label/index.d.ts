import React from 'react';
import { WrapWithLabelProps } from '../wrap-with-label';
import { InputProps } from '../input';

export interface InputWithLabelProps extends React.HTMLProps<WrapWithLabelProps> {
  /**
   * Свойства, передаваемые вложенному компоненту <Input />
   */
  inputProps?: InputProps;
}

/**
 * Компонент поля ввода с добавленным заголовком.
 * Представляет собой компонент <Input />, обернутый в компонент <WrapWithLabel />.
 */
declare class InputWithLabel extends React.Component<InputWithLabelProps> {}

export default InputWithLabel;