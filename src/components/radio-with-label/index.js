import React from 'react';
import PropTypes from 'prop-types';
import autobind from 'autobind-decorator';
import Radio from '../radio';
import Text from '../text';
import './radio-with-label.css';

/**
 * Базовый компонент радиокнопки с ярлыком.
 */
export default class RadioWithLabel extends React.PureComponent {
  @autobind
  onClick() {
    if (this.props.onClick && !this.props.disabled) this.props.onClick(this.props.item, this.props.name);
  }

  render() {
    const {
      className = '',
      selected,
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
        className={`radio-with-label ${disabled ? 'disabled' : ''} ${className}`}
        onClick={this.onClick}
      >
        <Radio className='radio-with-label__radio' selected={selected} disabled={disabled} />
        {label ? (
          <Text className='radio-with-label__label' value={label} />
        ) : null}
      </div>
    );
  }
}

RadioWithLabel.propTypes = {
  /**
   * Флаг, задающий активность радиокнопки.
   * В случае, если радиокнопка активна, к ней применяется стиль 'selected'.
   */
  checked: PropTypes.bool,
  /**
   * Функция, вызываемая при нажатии на радиокнопку.
   * @param {any=} item - связанный с радиокнопкой объект, переданный в качестве свойства "item".
   * <br>
   * @param {string=} name - название радиокнопки, на основе заданного компоненту свойства "name".
   */
  onClick: PropTypes.func,
  /**
   * Параметр, передаваемый при вызове функции props.onClick
   */
  item: PropTypes.any,
  /**
   * Название радиокнопки.
   */
  name: PropTypes.string,
  /**
   * Ярлык, отображаемый рядом с радиокнопкой.
   */
  label: PropTypes.string,
  /**
   * Флаг, отключающий радиокнопку.
   * В случае, если радиокнопка отключена, к обертке будет применен стиль 'disabled'.
   */
  disabled: PropTypes.bool
};