import React from 'react';
import MaskedInput, { MaskedInputProps } from 'react-text-mask';

export interface ModalProps {
  /**
   * Обработчик события нажатия клавиши при открытом модальном окне.
   * @param e - событие нажатия на клавишу
   */
  onKeyDown?: (e: Event) => void;
  /**
   * Функция, вызываемая при нажатии пользователем клавиши Escape, нажатии на кнопку закрытия модального окна (при ее наличии), либо при клике за пределами модального окна.
   */
  onClose?: () => void;
  /**
   * Текст заголовка модального окна
   */
  header?: string
}

/**
 * Компонент модального окна.
 * Подразумевается использование данного компонента на самом верхнем уровне компонентов приложения, чтобы модальное окно перекрывало остальной контент естественным образом.
 */
declare class Modal extends React.Component<ModalProps> {}

export default Modal;