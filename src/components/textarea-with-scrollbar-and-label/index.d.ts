import React from 'react';
import { WrapWithLabelProps } from '../wrap-with-label';
import { TextareaWithScrollbarProps } from '../textarea-with-scrollbar';

export interface TextareaWithScrollbarAndLabelProps extends WrapWithLabelProps {
  /**
   * Свойства, передаваемые вложенному компоненту <TextareaWithScrollbar />
   */
  textareaWithScrollbarProps?: TextareaWithScrollbarProps;
}

/**
 * Компонент многострочного поля ввода с добавленным скроллбаром.
 * Представляет собой компонент <TextareaWithScrollbar />, обернутый в компонент <WrapWithLabel />.
 */
declare class TextareaWithScrollbarAndLabel extends React.Component<TextareaWithScrollbarAndLabelProps> {}

export default TextareaWithScrollbarAndLabel;