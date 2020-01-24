import React from 'react';
import { ScrollbarProps } from '../scrollbar';
import { TextareaProps } from '../textarea';

export interface TextareaWithScrollbarProps {
  /**
   * Дополнительные стили, применяемые к <div />-обертке компонента
   */
  className?: string;
  /**
   * Свойства, передаваемые вложенному компоненту <ContentHeightScrollbar />
   */
  scrollbarProps?: ScrollbarProps;
  /**
   * Свойства, передаваемые вложенному компоненту <Textarea />
   */
  textareaProps?: TextareaProps;
}

/**
 * Компонент многострочного поля ввода с добавленным скроллбаром.
 * Представляет собой компонент <Textarea />, оберутый в компонент <ContentHeightScrollbar />.
 */
declare class TextareaWithScrollbar extends React.Component<TextareaWithScrollbarProps> {}

export default TextareaWithScrollbar;