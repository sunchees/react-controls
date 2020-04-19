import React from 'react';
import { ButtonProps } from '../button';

export interface RadioProps extends ButtonProps {
  /** 
   * Флаг, задающий активность радиокнопки.
   * В случае, если радиокнопка активна, к ней применяется стиль 'selected'.
   */
  selected?: boolean;
  /** 
   * Функция, вызываемая при нажатии на радиокнопку.
   * @param item - связанный с радиокнопкой объект, переданный в качестве свойства "item"
   * @param name - название радиокнопки, на основе заданного компоненту свойства "name"
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
}

/**
 * Базовый компонент радиокнопки.
 * Основан на компоненте <Button /> с добавлением стилей и логики для работы в формате радиокнопки.
 */
declare class Radio extends React.Component<RadioProps> {}

export default Radio;