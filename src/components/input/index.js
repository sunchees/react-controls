import React from 'react';
import PropTypes from 'prop-types';
import autobind from 'autobind-decorator';
import MaskedInput from 'react-text-mask';
import './input.css';

const KEY_CODE = {
  ENTER: 13,
  ESCAPE: 27
};

/**
 * Компонент поля ввода с поддержкой маски ввода.
 * Представляет собой обертку над компонентом MaskedInput и расширяет все его свойства.
 * @see https://www.npmjs.com/package/react-text-mask
 */
@autobind
class Input extends React.Component {
  constructor(props) {
    super(props);

    this.input = null;
    this.value = this.props.defaultValue || this.props.value;

    this.state = {
      key: Math.random()
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (
      this.props.value !== nextProps.value &&
      nextProps.value !== this.value
    ) {
      this.value = nextProps.value;
      this.setState({ key: Math.random() });
    }

    return (
      this.props.secure !== nextProps.secure ||
      this.props.disabled !== nextProps.disabled ||
      this.props.className !== nextProps.className ||
      this.props.error !== nextProps.error ||
      this.props.mask !== nextProps.mask ||
      this.props.placeholder !== nextProps.placeholder ||
      this.state.key !== nextState.key
    );
  }

  onChange(e) {
    this.value = e.target.value;
    if (this.props.onChange) this.props.onChange(this.value, this.props.name);
  }

  onKeyDown(e) {
    if (this.props.onKeyDown) this.props.onKeyDown(e);
    if (e.keyCode == KEY_CODE.ENTER && this.props.onEnterPress) {
      e.preventDefault();
      this.props.onEnterPress(this.value, this.props.name);
      if (this.props.blurOnEnter) document.activeElement.blur();
    }
    if (e.keyCode == KEY_CODE.ESCAPE && this.props.onEscapePress) {
      e.preventDefault();
      this.props.onEscapePress(this.value, this.props.name);
    }
  }

  setInputRef(input) {
    this.input = input.inputElement;

    if (this.props.forwardRef) this.props.forwardRef(input);
  }

  /**
   * Возвращает текущее содержимое поля ввода
   * @returns {string}
   *
   * @public
   */
  getValue() {
    return this.value;
  }

  /**
   * Задает содежимое поля ввода
   * @param {string} value - новое значение поля ввода
   *
   * @public
   */
  setValue(value) {
    this.value = value || '';
    this.input.value = this.value;
  }

  /**
   * Переводит фокус (курсор) в поле ввода
   *
   * @public
   */
  focus() {
    this.input.focus();
  }

  render() {
    const {
      className = '',
      error,
      defaultValue,
      value,
      secure,
      mask,
      guide = false,
      showMask = false,
      onKeyDown,
      onEnterPress,
      onEscapePress,
      onChange,
      name,
      forwardRef,
      blurOnEnter,
      ...props
    } = this.props;

    return (
      <MaskedInput
        {...props}
        key={this.state.key}
        className={`input ${error ? 'error' : ''} ${className}`}
        ref={this.setInputRef}
        value={this.value}
        type={secure ? 'password' : 'text'}
        onChange={this.onChange}
        onKeyDown={this.onKeyDown}
        mask={mask || false}
        guide={guide}
        showMask={showMask}
      />
    );
  }
}

export default Input;

Input.propTypes = {
  /**
   * Тип поля ввода:
   * <br>
   * false - Обычное поле ввода (значение по умолчанию)
   * <br>
   * true - Поле ввода для пароля (вместо символов отображаются точки)
   */
  secure: PropTypes.bool,
  /**
   * Наличие ошибки ввода
   * <br>
   * true - Добавляет класс "error" к компоненту поля ввода
   */
  error: PropTypes.bool,
  /**
   * Обработчик события нажатия на клавишу Enter в поле ввода. Принимает параметры:
   * @param {string} value - текущее содержимое поля ввода
   * <br>
   * @param {string=} name - название поля ввода, на основе заданного компоненту свойства "name"
   */
  onEnterPress: PropTypes.func,
  /**
   * Убирает фокус с поля ввода при нажатии клавиши Enter.
   */
  blurOnEnter: PropTypes.bool,
  /**
   * Обработчик события нажатия на клавишу Escape в поле ввода. Принимает параметры:
   * @param {string} value - текущее содержимое поля ввода
   * <br>
   * @param {string=} name - название поля ввода, на основе заданного компоненту свойства "name"
   */
  onEscapePress: PropTypes.func,
  /**
   * Функция для получения ссылки на вложенный компонент. Принимает параметры:
   * @param {HTMLInputElement} ref - ссылка на компонент
   */
  forwardRef: PropTypes.func,
  /**
   * Обработчик события изменения содержимого поля ввода. Принимает два входящих параметра:
   * @param {string} value - текущее содержимое поля ввода
   * <br>
   * @param {string=} name - название поля ввода, на основе заданного компоненту свойства "name"
   */
  onChange: PropTypes.func,
  /**
   * Название поля ввода.
   */
  name: PropTypes.string
};