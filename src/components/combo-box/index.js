import React from 'react';
import PropTypes from 'prop-types';
import autobind from 'autobind-decorator';
import Input from '../input';
import ContentHeightScrollbar from '../content-height-scrollbar';
import Button from '../button';
import './combo-box.css';

class DefaultComboBoxItem extends React.PureComponent {
  @autobind
  onMouseDown() {
    this.props.onMouseDown(this.props.item);
  }

  render() {
    return (
      <Button
        className={this.props.className}
        onMouseDown={this.onMouseDown}
        disabled={this.props.disabled}
      >
        {this.props.item
          ? this.props.displayField
            ? `${this.props.item[this.props.displayField]}`
            : `${this.props.item}`
          : null}
      </Button>
    );
  }
}

/**
 * Компонент выпадающего списка с фильтром.
 * Представляет собой обертку над HTML-элементом div с вложенным компонентом [ContentHeightScrollbar](#contentheightscrollbar) и компонентом [Input](#input), используемым в качестве поля ввода для фильтрации элементов списка..
 */
@autobind
class ComboBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      filter: this.props.defaultFilter || '',
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

  onFocus() {
    this.setState({ open: true });
  }

  onItemClick(item) {
    this.setState({
      selected: item,
      filter: this.props.displayField
        ? item[this.props.displayField]
        : `${item}`,
      open: false
    });
    if (this.props.onChange) this.props.onChange(item, this.props.name);
  }

  setFilter(filter) {
    this.setState({ filter });
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

  /**
   * Сбрасывает текущий выбранный элемент выпадающего списка
   *
   * @public
   */
  resetSelected() {
    this.setState({ selected: null });
  }

  /**
   * Сбрасывает текущий фильтр
   *
   * @public
   */
  resetFilter() {
    this.setState({ filter: '' });
  }

  filterFunction(item) {
    return this.props.filterFunction
      ? this.props.filterFunction(item, this.state.filter)
      : `${item || ''}`.toLowerCase().includes(this.state.filter.toLowerCase());
  }

  render() {
    const {
      className = '',
      ItemComponent = DefaultComboBoxItem,
      items = [],
      displayField,
      defaultFilter,
      defaultSelected,
      onChange,
      filterFunction,
      error,
      disabled,
      inputProps = {},
      scrollbarProps = {},
      name,
      ...props
    } = this.props;

    return (
      <div
        {...props}
        className={`combo-box ${this.state.open ? 'open' : ''} ${
          error ? 'error' : ''
        } ${className}`}
        onBlur={this.onBlur}
      >
        <Input
          {...inputProps}
          className='combo-box__input'
          onFocus={this.onFocus}
          disabled={disabled}
          onChange={this.setFilter}
          value={this.state.filter}
        />
        {this.state.open && items ? (
          <div className='combo-box__content-wrap'>
            <ContentHeightScrollbar
              {...scrollbarProps}
              className={`combo-box__scrollbar ${scrollbarProps.className || ''}`}
            >
              {items.filter(this.filterFunction).map((item, index) => (
                <ItemComponent
                  key={index}
                  className={`combo-box__item ${
                    item === this.state.selected ? 'selected' : ''
                  }`}
                  selected={item === this.state.selected}
                  onMouseDown={this.onItemClick}
                  item={item}
                  displayField={displayField}
                />
              ))}
            </ContentHeightScrollbar>
          </div>
        ) : null}
      </div>
    );
  }
}

export default ComboBox;

ComboBox.propTypes = {
  /**
   * Класс компонента для отрисовки элементов выпадающего списка.
   */
  ItemComponent: PropTypes.elementType,
  /**
   * Массив элементов, доступных для выбора в выпадающем списке.
   */
  items: PropTypes.arrayOf(PropTypes.any),
  /**
   * Название поля элемента выпадающего списка, отображаемого в выпадающем списке. Применимо в случае, если используется стандартный ItemComponent.
   * <br>
   * Если displayField не передан, и используется стандартный ItemComponent, то для отображения будет использоваться сам элемент списка.
   */
  displayField: PropTypes.string,
  /**
   * Фильтр по умолчанию
   */
  defaultFilter: PropTypes.string,
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
   * Функция для фильтрации элементов выпадающего списка в соответствии с введенным фильтром
   * @param {any} item - элемент списка
   * <br>
   * @param {string} filter - текущее значение фильтра
   */
  filterFunction: PropTypes.func,
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
   * Свойства, передаваемые вложенному компоненту [Input](/#input)
   */
  inputProps: PropTypes.shape({}),
  /**
   * Свойства, передаваемые вложенному компоненту [ContentHeightScrollbar](/#contentheightscrollbar)
   */
  scrollbarProps: PropTypes.shape({})
};