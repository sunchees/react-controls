import React from 'react';

export interface RadioWithLabelProps extends React.HTMLProps<HTMLDivElement> {
  /** 
   * Флаг, задающий активность радиокнопки.
   * В случае, если радиокнопка активна, к ней применяется стиль 'selected'.
   */
  selected?: boolean;
  /** 
   * Функция, вызываемая при нажатии на радиокнопку.
   * @param item - связанный с радиокнопкой объект, переданный в качестве свойства "item".
   * @param name - название радиокнопки, на основе заданного компоненту свойства "name".
   */
  onClick?: (item?: any, name?: string) => void;
  /**
   * Параметр, передаваемый при вызове функции props.onClick
   */
  item?: any;
  /**
   * Название радиокнопки.
   */
  name?: string;
  /**
   * Ярлык, отображаемый рядом с радиокнопкой.
   */
  label?: string;
  /**
   * Флаг, отключающий радиокнопкую.
   * В случае, если радиокнопка отключена, к обертке будет применен стиль 'disabled'.
   */
  disabled?: boolean
}

/**
 * Базовый компонент радиокнопки с ярлыком.
 */
declare class RadioWithLabel extends React.Component<RadioWithLabelProps> {}

export default RadioWithLabel;