import React from 'react';
import {
  ScrollbarProps as ReactCustomScrollbarProps,
  positionValues as ReactCustomScrollbarPositionValues
} from 'react-custom-scrollbars';

export interface ScrollbarProps extends React.HTMLProps<ReactCustomScrollbarProps> {
  /**
   * Функция, вызываемая при перемещении скроллбара
   * @param currentValues - текущие значения расположения и размеров скроллбара
   * @param nextValues - значения расположения и размеров скроллбара, которые будут применены после обновления компонента
   */
  onScroll?: (currentValues: ReactCustomScrollbarPositionValues, nextValues: ReactCustomScrollbarPositionValues) => void;

  /**
   * Функция, вызываемая в случае, если скроллбар перемещают в самую верхнюю позицию
   * @param currentValues - текущие значения расположения и размеров скроллбара
   * @param nextValues - значения расположения и размеров скроллбара, которые будут применены после обновления компонента
   */
  onScrollToTop?: (currentValues: ReactCustomScrollbarPositionValues, nextValues: ReactCustomScrollbarPositionValues) => void;

  /**
   * Функция, вызываемая в случае, если скроллбар перемещают в самую нижнюю позицию
   * @param currentValues - текущие значения расположения и размеров скроллбара
   * @param nextValues - значения расположения и размеров скроллбара, которые будут применены после обновления компонента
   */
  onScrollToBottom?: (currentValues: ReactCustomScrollbarPositionValues, nextValues: ReactCustomScrollbarPositionValues) => void;

  /**
   * Функция, вызываемая в случае, если скроллбар перемещают в самую левую позицию
   * @param currentValues - текущие значения расположения и размеров скроллбара
   * @param nextValues - значения расположения и размеров скроллбара, которые будут применены после обновления компонента
   */
  onScrollToLeft?: (currentValues: ReactCustomScrollbarPositionValues, nextValues: ReactCustomScrollbarPositionValues) => void;

  /**
   * Функция, вызываемая в случае, если скроллбар перемещают в самую правую позицию
   * @param currentValues - текущие значения расположения и размеров скроллбара
   * @param nextValues - значения расположения и размеров скроллбара, которые будут применены после обновления компонента
   */
  onScrollToRight?: (currentValues: ReactCustomScrollbarPositionValues, nextValues: ReactCustomScrollbarPositionValues) => void;

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
declare class Scrollbar extends React.Component<ScrollbarProps> {
  /**
   * Позволяет узнать, находится ли вертикальный скроллбар в самой верхней позиции
   */
  isAtTheTop: () => boolean;

  /**
   * Позволяет узнать, находится ли вертикальный скроллбар в самой нижней позиции
   */
  isAtTheBottom: () => boolean;

  /**
   * Позволяет узнать, находится ли горизонтальный скроллбар в самой левой позиции
   */
  isOnTheLeft: () => boolean;

  /**
   * Позволяет узнать, находится ли горизонтальный скроллбар в самой правой позиции
   */
  isOnTheRight: () => boolean;

  /**
   * Задает позицию вертикального скроллбара, в пикселях, где 0 - самая верхняя точка скроллбара
   * @param value - позиция скроллбара в пикселях, отсчитывая сверху.
   */
  scrollTop: (value: number) => void;

  /**
   * Задает позицию горизонтального скроллбара, в пикселях, где 0 - самая левая точка скроллбара
   * @param value - позиция скроллбара в пикселях, отсчитывая слева.
   */
  scrollLeft: (value: number) => void;

  /**
   * Перемещает вертикальный скроллбар в самую верхнюю позицию
   */
  scrollToTop: () => void;

  /**
   * Перемещает вертикальный скроллбар в самую нижнюю позицию
   */
  scrollToBottom: () => void;

  /**
   * Перемещает горизонтальный скроллбар в самую левую позицию
   */
  scrollToLeft: () => void;

  /**
   * Перемещает горизонтальный скроллбар в самую правую позицию
   */
  scrollToRight: () => void;
}

export default Scrollbar;