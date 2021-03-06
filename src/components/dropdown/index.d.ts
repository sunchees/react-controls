import React from 'react';
import { ScrollbarProps } from '../scrollbar';

export interface DropdownItemProps {
  /**
   * CSS-класс компонента
   */
  className?: string;
  /**
   * Обработчик события нажатия на элемент выпадающего списка.
   * @param item - элемент выпадающего списка, переданный в компонент через свойство "item".
   */
  onMouseDown: (item: any) => void;
  /**
   * Флаг, отключающий выпадающий список.
   */
  disabled?: boolean;
  /**
   * Элемент выпадающего списка.
   */
  item: any;
  /**
   * Название поля элемента выпадающего списка, отображаемого в выпадающем списке.
   */
  accessor?: string
  /**
   * Флаг, указывающий на то, что данный элемент списка выбран
   */
  selected?: boolean
}

export interface DropdownProps extends React.HTMLProps<HTMLDivElement> {
  /**
   * Класс компонента для отрисовки элементов выпадающего списка.
   */
  ItemComponent?: React.Component<DropdownItemProps>;
  /**
   * Массив элементов, доступных для выбора в выпадающем списке.
   */
  items: Array<any>;
  /**
   * Функция для получения текстового значения элемента списка, либо название отображаемого поля объекта. Применимо в случае, если используется стандартный ItemComponent.
   * Если accessor не передан, и используется стандартный ItemComponent, то для отображения будет использоваться сам элемент списка.
   */
  accessor?: string | Function;
  /**
   * Выбранный по умолчанию элемент выпадающего списка.
   */
  defaultSelected?: any;
  /**
   * Обработчик события изменения выбранного элемента выпадающего списка. Принимает два входящих параметра:
   * @param item - новый выбранный элемент списка.
   * @param name - название выпадающего списка, на основе заданного компоненту свойства "name".
   */
  onChange?: (item: any, name?: string) => void;
  /**
   * Название выпадающего списка.
   */
  name?: string;
  /** 
   * Наличие ошибки выпадающего списка
   * @example true - Добавляет класс .error к компоненту выпадающего списка
   */
  error?: boolean;
  /**
   * Флаг, отключающий выпадающий список.
   */
  disabled?: boolean;
  /**
   * Свойства, передаваемые вложенному компоненту <ContentHeightScrollbar />
   */
  scrollbarProps?: ScrollbarProps;
}

/**
 * Компонент выпадающего списка.
 * Представляет собой обертку над HTML-элементом <div /> с вложенным компонентом <ContentHeightScrollbar />.
 */
declare class Dropdown extends React.Component<DropdownProps> {
  /**
   * Возвращает текущий выбранный элемент выпадающего списка
   */
  getSelected(): any;
  /**
   * Сбрасывает текущий выбранный элемент выпадающего списка
   */
  resetSelected(): void;
}

export default Dropdown;