import React from 'react';

export interface CheckobxWithLabelProps extends React.HTMLProps<HTMLDivElement> {
  /** 
   * Флаг, задающий активность чекбокса.
   * В случае, если чекбокс активен, к нему применяется стиль 'checked'.
   */
  checked?: boolean;
  /** 
   * Функция, вызываемая при нажатии на чекбокс.
   * @param item - связанный с чекбоксом объект, переданный в качестве свойства "item".
   * @param name - название чекбокса, на основе заданного компоненту свойства "name".
   */
  onClick?: (item?: any, name?: string) => void;
  /**
   * Параметр, передаваемый при вызове функции props.onClick
   */
  item?: any;
  /**
   * Название чекбокса.
   */
  name?: string;
  /**
   * Ярлык, отображаемый рядом с чекбоксом.
   */
  label?: string;
  /**
   * Флаг, отключающий чекбокс.
   * В случае, если чекбокс отключен, к обертке будет применен стиль 'disabled'.
   */
  disabled?: boolean
}

/**
 * Базовый компонент чекбокса с ярлыком.
 */
declare class CheckboxWithLabel extends React.Component<CheckobxWithLabelProps> {}

export default CheckboxWithLabel;