import React from 'react';
import { LinkProps } from 'react-router-dom';

export interface WrapWithLabelProps extends React.HTMLProps<HTMLDivElement> {
  /**
   * Обязательность контента внутри обертки. 
   * @example true - Добавляет класс .mandatory к компоненту поля ввода
   */
  mandatory?: boolean;
  /**
   * Текст заголовка
   */
  label: string;
  /**
   * Текст, отображаемый внутри обертки при отсутствии дочерних компонентов
   */
  emptyText?: string;
}

/**
 * Компонент-обертка, добавляющий к дочернему компоненту заголовок.
 * Основано на базе компонента <Column />
 */
declare class WrapWithLabel extends React.Component<WrapWithLabelProps> {}

export default WrapWithLabel;