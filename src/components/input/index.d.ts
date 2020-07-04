import React from 'react';
import MaskedInput, { MaskedInputProps } from 'react-text-mask';

export interface InputProps extends React.HTMLProps<MaskedInputProps> {
  /** Тип поля ввода
   * @example
   * false - Обычное поле ввода (значение по умолчанию)
   * @example
   * true - Поле ввода для пароля (вместо символов отображаются точки)
   */
  secure?: boolean;
  /** Наличие ошибки ввода
   * @example true - Добавляет класс .error к компоненту поля ввода
   */
  error?: boolean;
  /**
   * Обработчик события нажатия на клавишу Enter в поле ввода. Принимает параметры:
   * @param value - текущее содержимое поля ввода
   * @param name - название поля ввода, на основе заданного компоненту свойства "name"
   */
  onEnterPress?: (value: string, name?: string) => void;
  /**
   * Убирает фокус с поля ввода при нажатии клавиши Enter.
   */
  blurOnEnter?: boolean;
  /**
   * Обработчик события нажатия на клавишу Escape в поле ввода. Принимает параметры:
   * @param value - текущее содержимое поля ввода
   * @param name - название поля ввода, на основе заданного компоненту свойства "name"
   */
  onEscapePress?: (value: string, name?: string) => void;
  /**
   * Функция для получения ссылки на вложенный компонент. Принимает параметры:
   * @param ref - ссылка на компонент
   */
  forwardRef?: (ref: HTMLInputElement) => void;
  /**
   * Обработчик события изменения содержимого поля ввода. Принимает два входящих параметра:
   * @param value - текущее содержимое поля ввода
   * @param name - название поля ввода, на основе заданного компоненту свойства "name"
   */
  onChange?: (value: string, name?: string) => void;
  /**
   * Название поля ввода.
   */
  name?: string;
}

/**
 * Компонент поля ввода с поддержкой маски ввода.
 * Представляет собой обертку над компонентом <MaskedInput />.
 * @see [Документация MaskedInput](https://www.npmjs.com/package/react-text-mask)
 */
declare class Input extends React.Component<InputProps> {
  /**
   * Возвращает текущее содержимое поля ввода
   */
  getValue(): string;
  /**
   * Задает содежимое поля ввода
   * @param value - новое содержимое поля ввода
   */
  setValue(value: string): void;
  /**
   * Переводит фокус (курсор) в поле ввода
   */
  focus(): void;
}

export default Input;