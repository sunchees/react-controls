import React from 'react';
import PropTypes from 'prop-types';
import autobind from 'autobind-decorator';
import Text from '../text';
import Button from '../button';
import './modal.css';

const KEY_CODE = {
  ESCAPE: 27
};

/**
 * Компонент модального окна.
 * <br>
 * Подразумевается использование данного компонента на самом верхнем уровне компонентов приложения, чтобы модальное окно перекрывало остальной контент естественным образом.
 */
export default class Modal extends React.Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onKeyDown);
  }

  @autobind
  onMouseDown(e) {
    this.down = e.target;
  }

  @autobind
  onMouseUp(e) {
    if (
      this.down === e.target &&
      (e.target.className === `modal ${this.props.className}`)
    )
      if (this.props.onClose) this.props.onClose();
  }

  @autobind
  onKeyDown(e) {
    if (e.keyCode === KEY_CODE.ESCAPE && this.props.onClose) this.props.onClose();
    if (this.props.onKeyDown) this.props.onKeyDown(e);
  }

  render() {
    const { className = '', header, onClose, children } = this.props;

    return (<div
      className={`modal ${className}`}
      onMouseDown={this.onMouseDown}
      onMouseUp={this.onMouseUp}
    >
      <div className='modal__wrap'>
        {header ? (
          <div className='modal__header'>
            <Text className='modal__header__text' value={header} />
            {onClose ? (
              <Button className='modal__header__close-button' onClick={onClose}>
                ✕
              </Button>
            ) : null}
          </div>
        ) : null}
        <div
          className={`modal__content ${header ? 'with-header' : ''}`}
        >
          {children}
        </div>
      </div>
    </div>);
  }
}

Modal.propTypes = {
  /**
   * Обработчик события нажатия клавиши при открытом модальном окне.
   * @param {Event} e - событие нажатия на клавишу
   */
  onKeyDown: PropTypes.func,
  /**
   * Функция, вызываемая при нажатии пользователем клавиши Escape, нажатии на кнопку закрытия модального окна (при ее наличии), либо при клике за пределами модального окна.
   */
  onClose: PropTypes.func,
  /**
   * Текст заголовка модального окна
   */
  header: PropTypes.string
};

Modal.defaultProps = {
  className: ''
};
