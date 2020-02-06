import React from 'react';
import { ButtonProps } from '../button';

export interface ButtonWithLoaderProps extends ButtonProps {
  /**
   * Класс компонента для отрисовки кнопки.
   */
  ButtonComponent?: React.Component;
  /**
   * Класс компонента для отрисовки лоадера.
   */
  LoaderComponent?: React.Component;
  /**
   * Регулирует отображение лоадера или контента кнопки
   */
  loading?: boolean;
  /**
   * Текст успешного выполнения операции
   */
  success?: string;
  /**
   * Текст ошибки выполнения операции
   */
  error?: boolean;
}

/**
 * Базовый компонент кнопки с лоадером и результатом выполнения операции.
 */
declare class ButtonWithLoader extends React.Component<ButtonWithLoaderProps> {}

export default ButtonWithLoader;