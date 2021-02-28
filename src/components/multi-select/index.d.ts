import React from 'react';
import { ScrollbarProps } from '../scrollbar';
import { ComboBoxProps } from '../combo-box';

export interface MultiSelectItemProps {
  /**
   * CSS-класс компонента
   */
  className?: string;
  /**
   * Обработчик события при нажатии на элемент для удаления его из списка выбранных.
   * @param item - элемент списка, переданный в компонент через свойство "item".
   */
  onDeselectClick: (item: any) => void;
  /**
   * Флаг, отключающий элемент списка.
   */
  disabled?: boolean;
  /**
   * Элемент списка.
   */
  item: any;
  /**
   * Функция для получения текстового значения элемента списка, либо название отображаемого поля объекта. Применимо в случае, если используется стандартный ItemComponent.
   * Если accessor не передан, и используется стандартный ItemComponent, то для отображения будет использоваться сам элемент списка.
   */
  accessor?: string;
}

export interface MultiSelectProps  {
  /**
   * Класс компонента для отрисовки выбранных элементов списка.
   */
  ItemComponent?: React.Component<MultiSelectItemProps>;
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
   * Выбранные по умолчанию элементы списка.
   */
  defaultSelected?: Array<any>;
  /**
   * Обработчик события изменения выбранных элементов списка. Принимает два входящих параметра:
   * @param items - новый массив выбранных элементов списка.
   * @param name - название списка, на основе заданного компоненту свойства "name".
   */
  onChange?: (items: any, name?: string) => void;
  /**
   * Название списка.
   */
  name?: string;
  /**
   * Флаг, отключающий список.
   */
  disabled?: boolean;
  /**
   * Свойства, передаваемые вложенному компоненту <ComboBox />
   */
  comboBoxProps?: ComboBoxProps,
  /**
   * Свойства, передаваемые вложенному компоненту <ContentHeightScrollbar />
   */
  scrollbarProps?: ScrollbarProps;
}

/**
 * Компонент списка с множественным выбором с фильтром.
 * Представляет собой обертку над компонентом <ComboBox /> с вложенным компонентом <ContentHeightScrollbar /> содержащим выбранные элементы списка.
 */
declare class MultiSelect extends React.Component<MultiSelectProps> {
  /**
   * Возвращает текущие выбранные элементы списка
   */
  getSelected(): any;
  /**
   * Сбрасывает текущие выбранные элементы списка
   */
  resetSelected(): void;
}

export default MultiSelect;