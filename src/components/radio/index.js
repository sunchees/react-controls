import React from 'react';
import PropTypes from 'prop-types';
import autobind from 'autobind-decorator';
import Button from '../button';
import './radio.css';

/**
 * Базовый компонент радиокнопки.
 * Основан на компоненте Button с добавлением стилей и логики для работы в формате радиокнопки.
 */
export default class Radio extends React.PureComponent {
  @autobind
  onClick() {
    if (this.props.onClick) this.props.onClick(this.props.item, this.props.name);
  }

  render() {
    const { className = '', selected, item, name, onClick, ...props } = this.props;

    return (
      <Button
        {...props}
        className={`radio ${selected ? 'selected' : ''} ${className}`}
        onClick={this.onClick}
      />
    );
  }
}

Radio.propTypes = {
  /**
   * Флаг, задающий активность радиокнопки.
   * В случае, если радиокнопка активна, к ней применяется стиль 'selected'.
   */
  selected: PropTypes.bool,
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
  name: PropTypes.string
};