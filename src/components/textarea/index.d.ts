import React from 'react';

export interface TextareaProps extends React.HTMLProps<HTMLTextAreaElement> {
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
  /**
   * Обработчик события изменения высоты поля ввода. Принимает параметры:
   * @param height - новая высота поля ввода
   */
  onHeightChange?: (height: number) => void;
  /**
   * Обработчик события вставки файлов в поле ввода. Принимает параметры:
   * @param files - массив файлов
   * @param name - название поля ввода, на основе заданного компоненту свойства "name"
   */
  onClipboardFilePaste: (files: Array<File>, name?: string) => void;
}

/**
 * Компонент многострочного поля ввода.
 * Представляет собой обертку над HTML-элементом <textarea /> с добавлением стилей и обработчиком вставки файлов из буфера обмена.
 */
declare class Textarea extends React.Component<TextareaProps> {
  /**
   * Переводит фокус (курсор) в поле ввода
   */
  focus(): void;
  /**
   * Возвращает текущее содержимое поля ввода
   */
  getValue(): string;
  /**
   * Задает содежимое поля ввода
   * @param value - новое содержимое поля ввода
   */
  setValue(value: string): void;
}

export default Textarea;