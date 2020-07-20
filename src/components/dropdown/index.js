import React from 'react';
import PropTypes from 'prop-types';
import autobind from 'autobind-decorator';
import isEqual from 'lodash/isEqual';
import ContentHeightScrollbar from '../content-height-scrollbar';
import './dropdown.css';
import { DropdownItem } from './dropdown-item';

/**
 * Компонент выпадающего списка.
 * Представляет собой обертку над HTML-элементом div с вложенным компонентом [ContentHeightScrollbar](/#contentheightscrollbar).
 */
@autobind
class Dropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      selected: this.props.defaultSelected || null
    };

    this.scrollbar = null;
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.defaultSelected !== this.state.selected &&
      prevProps.defaultSelected !== this.props.defaultSelected
    )
      this.setState({ selected: this.props.defaultSelected });
  }

  onBlur() {
    this.setState({ open: false });
  }

  onItemClick(item) {
    this.setState({ selected: item });
    if (this.props.onChange) this.props.onChange(item, this.props.name);
  }

  /**
   * Возвращает текущий выбранный элемент выпадающего списка
   *
   * @returns {Object}
   *
   * @public
   */
  getSelected() {
    return this.state.selected;
  }

  toggleDropdown() {
    this.setState({ open: !this.state.open });
  }

  /**
   * Сбрасывает текущий выбранный элемент выпадающего списка
   *
   * @public
   */
  resetSelected() {
    this.setState({ selected: null });
  }

  render() {
    const {
      className = '',
      ItemComponent = DropdownItem,
      items = [],
      accessor,
      defaultSelected,
      onChange,
      error,
      disabled,
      scrollbarProps = {},
      name,
      ...props
    } = this.props;

    return (
      <div
        {...props}
        className={`dropdown ${this.state.open ? 'open' : ''} ${
          error ? 'error' : ''
        } ${className}`}
        onBlur={this.onBlur}
      >
        <ItemComponent
          className='dropdown__title'
          onMouseDown={this.toggleDropdown}
          disabled={disabled}
          item={this.state.selected}
          accessor={accessor}
        />
        {this.state.open && items ? (
          <div className='dropdown__content-wrap'>
            <ContentHeightScrollbar
              {...scrollbarProps}
              className={`dropdown__scrollbar ${
                scrollbarProps.className || ''
              }`}
            >
              {items.map((item, index) => (
                <ItemComponent
                  key={index}
                  className={`dropdown__item ${
                    isEqual(item, this.state.selected) ? 'selected' : ''
                  }`}
                  selected={isEqual(item, this.state.selected)}
                  onMouseDown={this.onItemClick}
                  item={item}
                  accessor={accessor}
                />
              ))}
            </ContentHeightScrollbar>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Dropdown;

Dropdown.propTypes = {
  /**
   * Класс компонента для отрисовки элементов выпадающего списка.
   */
  ItemComponent: PropTypes.elementType,
  /**
   * Массив элементов, доступных для выбора в выпадающем списке.
   */
  items: PropTypes.arrayOf(PropTypes.any),
  /**
   * Функция для получения текстового значения элемента списка, либо название отображаемого поля объекта. Применимо в случае, если используется стандартный ItemComponent.
   * <br>
   * Если accessor не передан, и используется стандартный ItemComponent, то для отображения будет использоваться сам элемент списка.
   */
  accessor: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  /**
   * Выбранный по умолчанию элемент выпадающего списка.
   */
  defaultSelected: PropTypes.any,
  /**
   * Обработчик события изменения выбранного элемента выпадающего списка. Принимает два входящих параметра:
   * @param {any} item - новый выбранный элемент списка.
   * <br>
   * @param {string=} name - название выпадающего списка, на основе заданного компоненту свойства "name".
   */
  onChange: PropTypes.func,
  /**
   * Название выпадающего списка.
   */
  name: PropTypes.string,
  /**
   * Наличие ошибки выпадающего списка. При значении true - добавляет класс .error к компоненту выпадающего списка
   */
  error: PropTypes.bool,
  /**
   * Флаг, отключающий выпадающий список.
   */
  disabled: PropTypes.bool,
  /**
   * Свойства, передаваемые вложенному компоненту [ContentHeightScrollbar](/#contentheightscrollbar)
   */
  scrollbarProps: PropTypes.shape({})
};
