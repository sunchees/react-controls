import React from 'react';
import { WrapWithLabelProps } from '../wrap-with-label';
import { TextareaProps } from '../textarea';

export interface TextareaWithLabelProps extends React.HTMLProps<WrapWithLabelProps> {
  /**
   * Свойства, передаваемые вложенному компоненту <Textarea />
   */
  textareaProps?: TextareaProps;
}

/**
 * Компонент многострочного поля ввода с добавленным заголовком.
 * Представляет собой компонент <Textarea />, обернутый в компонент <WrapWithLabel />.
 */
declare class TextareaWithLabel extends React.Component<TextareaWithLabelProps> {}

export default TextareaWithLabel;