import React from 'react';
import PropTypes from 'prop-types';
import autobind from 'autobind-decorator';
import Checkbox from '../checkbox';
import Text from '../text';
import './checkbox-with-label.css';

/**
 * Базовый компонент чекбокса с ярлыком.
 */
export default class CheckboxWithLabel extends React.Component {
  @autobind
  onClick() {
    if (this.props.onClick && !this.props.disabled) this.props.onClick(this.props.item, this.props.name);
  }

  render() {
    const {
      className = '',
      checked,
      item,
      name,
      onClick,
      disabled,
      label,
      ...props
    } = this.props;

    return (
      <div
        {...props}
        className={`checkbox-with-label ${disabled ? 'disabled' : ''} ${className}`}
        onClick={this.onClick}
      >
        <Checkbox className='checkbox-with-label__checkbox' checked={checked} disabled={disabled} />
        {label ? (
          <Text className='checkbox-with-label__label' value={label} />
        ) : null}
      </div>
    );
  }
}

CheckboxWithLabel.propTypes = {
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
  name: PropTypes.string,
  /**
   * Ярлык, отображаемый рядом с чекбоксом.
   */
  label: PropTypes.string,
  /**
   * Флаг, отключающий чекбокс.
   * В случае, если чекбокс отключен, к обертке будет применен стиль 'disabled'.
   */
  disabled: PropTypes.bool
};