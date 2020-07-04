import React from 'react';
import { ButtonProps } from '../button';

export interface CheckboxProps extends ButtonProps {
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
}

/**
 * Базовый компонент чекбокса.
 */
declare class Checkbox extends React.Component<CheckboxProps> {}

export default Checkbox;