import React from 'react';

export interface TextProps extends React.HTMLProps<HTMLSpanElement> {
  /** Текст, отображаемый компонентом */
  value: string;
  /**
   * Флаг, определяющий нужно ли отображать 'props.value' с большой буквы.
   * Если флаг выставлен в значение true - к тексту применяется стиль 'capitalized'
   */
  capitalized?: boolean;
  /**
   * Флаг, определяющий нужно ли отображать 'props.value' жирным шрифтом.
   * Если флаг выставлен в значение true - к тексту применяется стиль 'bold'
   */
  bold?: boolean;
  /**
   * Флаг, определяющий нужно ли отображать 'props.value' в несколько строк, при наличии переносов или ограниченной ширине.
   * Если флаг выставлен в значение true - к тексту применяется стиль 'multiline'. По умолчанию true
   */
  multiline?: boolean;
}

/**
 * Базовый компонент текста.
 * Представляет собой обертку над HTML-элементом <span /> с добавлением стилей.
 */
declare class Text extends React.Component<TextProps> {}

export default Text;