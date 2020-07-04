import React from 'react';
import PropTypes from 'prop-types';
import autobind from 'autobind-decorator';
import Button from '../button';
import './checkbox.css';

/**
 * Базовый компонент чекбокса.
 */
export default class Checkbox extends React.PureComponent {
  @autobind
  onClick() {
    if (this.props.onClick) this.props.onClick(this.props.item, this.props.name);
  }

  render() {
    const { className = '', checked, item, name, onClick, ...props } = this.props;

    return (
      <Button
        {...props}
        className={`checkbox ${checked ? 'checked' : ''} ${className}`}
        onClick={this.onClick}
      >
        {checked ? '✔' : ''}
      </Button>
    );
  }
}

Checkbox.propTypes = {
  /**
   * Флаг, задающий активность чекбокса.
   * В случае, если чекбокс активен, к нему применяется стиль 'checked'.
   */
  checked: PropTypes.bool,
  /**
   * Функция, вызываемая при нажатии на чекбокс.
   * @param {any=} item - связанный с чекбоксом объект, переданный в качестве свойства "item".
   * <br>
   * @param {string=} name - название чекбокса, на основе заданного компоненту свойства "name".
   */
  onClick: PropTypes.func,
  /**
   * Параметр, передаваемый при вызове функции props.onClick
   */
  item: PropTypes.any,
  /**
   * Название чекбокса.
   */
  name: PropTypes.string
};