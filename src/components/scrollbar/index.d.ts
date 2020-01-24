import React from 'react';
import {
  Scrollbars as ReactCustomScrollbar,
  ScrollbarProps as ReactCustomScrollbarProps,
  positionValues as ReactCustomScrollbarPositionValues
} from 'react-custom-scrollbars';

export interface ScrollbarProps extends React.HTMLProps<ReactCustomScrollbarProps> {
  /**
   * Функция, вызываемая в случае, если скроллбар перемещают в самую верхнюю позицию
   * @param currentValues - текущие значения расположения и размеров скроллбара
   * @param nextValues - значения расположения и размеров скроллбара, которые будут применены после обновления компонента
   */
  onScrollToTop?: (currentValues: ReactCustomScrollbarPositionValues, nextValues: ReactCustomScrollbarPositionValues) => void;

  /**
   * Функция, вызываемая после обновления компонента скроллбара
   * @param prevValues - предыдущие значения расположения и размеров скроллбара
   * @param newValues - новые значения расположения и размеров скроллбара
   */
  onUpdate?: (prevValues: ReactCustomScrollbarPositionValues, newValues: ReactCustomScrollbarPositionValues) => void;
}

/**
 * Компонент-обертка, добавляющий к контенту скроллбар.
 * @see https://www.npmjs.com/package/react-custom-scrollbars
 */
declare class Scrollbar extends ReactCustomScrollbar {
  /**
   * Позволяет узнать, находится ли вертикальный скроллбар в самой нижней позиции
   */
  isAtTheBottom: () => boolean;

  /**
   * Задает позицию вертикального скроллбара, в пикселях, где 0 - самая верхняя точка скроллбара
   * @param value 
   */
  scrollTop: (value: number) => void;

  /**
   * Перемещает вертикальный скроллбар в самую нижнюю позицию
   */
  scrollToBottom: () => void;
}

export default Scrollbar;