import React from 'react';
import { ScrollbarProps } from '../scrollbar';
import { TextWithLabelProps } from '../text-with-label';

export interface TextWithScrollbarAndLabelProps extends TextWithLabelProps {
  /**
   * Свойства, передаваемые вложенному компоненту <ContentHeightScrollbar />
   */
  scrollbarProps?: ScrollbarProps;
}

/**
 * Компонент текста с добавленным заголовком и скроллбаром. Предназначен для отображения многострочных текстовых значений
 * Представляет собой компонент <Text/>, обернутый в компонент <ContentHeightScrollbar/>, обернутый в <WrapWithLabel/>.
 */
declare class TextWithScrollbarAndLabel extends React.Component<TextWithScrollbarAndLabelProps> {}

export default TextWithScrollbarAndLabel;