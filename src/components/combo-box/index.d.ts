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
   * Флаг, отключающий элемент выпадающего списка.
   */
  disabled?: boolean;
  /**
   * Элемент выпадающего списка.
   */
  item: any;
  /**
   * Функция для получения текстового значения элемента списка, либо название отображаемого поля объекта. Применимо в случае, если используется стандартный ItemComponent.
   * <br>
   * Если accessor не передан, и используется стандартный ItemComponent, то для отображения будет использоваться сам элемент списка.
   */
  accessor?: string | Function
  /**
   * Флаг, указывающий на то, что данный элемент списка выбран
   */
  selected?: boolean
}

export interface ComboBoxSelectedItemProps {
  /**
   * CSS-класс компонента
   */
  className?: string;
  /**
   * Обработчик события нажатия на кнопку снятия выбора с элемента.
   */
  onDeselect: () => void;
  /**
   * Флаг, отключающий выбранный элемент выпадающего списка.
   */
  disabled?: boolean;
  /**
   * Выбранный элемент выпадающего списка.
   */
  item: any;
  /**
   * Функция для получения текстового значения элемента списка, либо название отображаемого поля объекта. Применимо в случае, если используется стандартный ItemComponent.
   * <br>
   * Если accessor не передан, и используется стандартный SelectedItemComponent, то для отображения будет использоваться сам элемент списка.
   */
  accessor?: string | Function
}

export interface ComboBoxProps extends React.HTMLProps<HTMLDivElement> {
  /**
   * Класс компонента для отрисовки элементов выпадающего списка.
   */
  ItemComponent?: React.Component<ComboBoxItemProps>;
  /**
   * Класс компонента для отрисовки выбранного элемента вместо поля ввода.
   */
  SelectedItemComponent?: React.Component<ComboBoxSelectedItemProps>,
  /**
   * Флаг, указывающий необходимость отрисовки компонента выбранного элемента списка вместо поля ввода. По умолчанию true
   */
  showSelectedItem?: boolean,
  /**
   * Массив элементов, доступных для выбора в выпадающем списке.
   */
  items: Array<any>;
  /**
   * Функция для получения текстового значения элемента списка, либо название отображаемого поля объекта. Применимо в случае, если используется стандартный ItemComponent.
   * Если accessor не передан, и используется стандартный ItemComponent, то для отображения будет использоваться сам элемент списка.
   */
  accessor?: string;
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
   * Обработчик события изменения фильтра в поле ввода выпадающего списка. Принимает входящий параметр:
   * @param filter - текст фильтра.
   */
  onFilterChange?: (filter: string) => void;
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