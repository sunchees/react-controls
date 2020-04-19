import React from 'react';
import { ScrollbarProps } from '../scrollbar';
import { InputProps } from '../input';

export interface ComboBoxItemProps {
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
  displayField?: string
  /**
   * Флаг, указывающий на то, что данный элемент списка выбран
   */
  selected?: boolean
}

export interface ComboBoxProps extends React.HTMLProps<HTMLDivElement> {
  /**
   * Класс компонента для отрисовки элементов выпадающего списка.
   */
  ItemComponent?: React.Component<ComboBoxItemProps>;
  /**
   * Массив элементов, доступных для выбора в выпадающем списке.
   */
  items: Array<any>;
  /**
   * Название поля элемента выпадающего списка, отображаемого в выпадающем списке. Применимо в случае, если используется стандартный ItemComponent.
   * Если displayField не передан, и используется стандартный ItemComponent, то для отображения будет использоваться сам элемент списка.
   */
  displayField?: string;
  /**
   * Фильтр по умолчанию
   */
  defaultFilter: string;
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
   * Функция для фильтрации элементов выпадающего списка в соответствии с введенным фильтром
   * @param item - элемент списка
   * @param filter - текущее значение фильтра
   */
  filterFunction?: (item: any, filter: string) => boolean;
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
   * Свойства, передаваемые вложенному компоненту <Input />
   */
  inputProps?: InputProps,
  /**
   * Свойства, передаваемые вложенному компоненту <ContentHeightScrollbar />
   */
  scrollbarProps?: ScrollbarProps;
}

/**
 * Компонент выпадающего списка.
 * Представляет собой обертку над HTML-элементом <div /> с вложенным компонентом <ContentHeightScrollbar /> и компонентом <Input/>, используемым в качестве поля ввода для фильтрации элементов списка.
 */
declare class ComboBox extends React.Component<ComboBoxProps> {
  /**
   * Возвращает текущий выбранный элемент выпадающего списка
   */
  getSelected(): any;
  /**
   * Сбрасывает текущий выбранный элемент выпадающего списка
   */
  resetSelected(): void;
  /**
   * Сбрасывает текущий фильтр
   */
  resetFilter(): void;
}

export default ComboBox;