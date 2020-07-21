import React from 'react';
import PropTypes from 'prop-types';
import autobind from 'autobind-decorator';
import isEqual from 'lodash/isEqual';
import Input from '../input';
import ContentHeightScrollbar from '../content-height-scrollbar';
import { getListItemValue } from '../../utils';
import { ComboBoxSelectedItem } from './combo-box-selected-item';
import { ComboBoxItem } from './combo-box-item';
import './combo-box.css';

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
      filter:
        props.defaultFilter ||
        getListItemValue(props.defaultSelected, props.accessor) ||
        '',
      selected: props.defaultSelected || null
    };

    this.scrollbar = null;
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.defaultSelected !== this.state.selected &&
      prevProps.defaultSelected !== this.props.defaultSelected
    )
      this.setState({
        selected: this.props.defaultSelected,
        filter:
          this.props.defaultFilter ||
          getListItemValue(this.props.defaultSelected, this.props.accessor) ||
          this.state.filter
      });
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
      filter: getListItemValue(item, this.props.accessor),
      open: false
    });
    if (this.props.onChange) this.props.onChange(item, this.props.name);
  }

  setFilter(filter) {
    this.setState({ filter });
    if (this.props.onFilterChange) this.props.onFilterChange(filter);
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
    if (this.props.onChange) this.props.onChange(null, this.props.name);
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
      : getListItemValue(item, this.props.accessor)
          .toLowerCase()
          .includes(this.state.filter.toLowerCase());
  }

  render() {
    const {
      className = '',
      showSelectedItem,
      SelectedItemComponent = ComboBoxSelectedItem,
      ItemComponent = ComboBoxItem,
      items = [],
      accessor,
      defaultFilter,
      defaultSelected,
      onChange,
      onFilterChange,
      disableFiltering,
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
        {this.state.selected && showSelectedItem ? (
          <SelectedItemComponent
            className='combo-box__selected-item'
            onDeselect={this.resetSelected}
            disabled={disabled}
            item={this.state.selected}
            accessor={accessor}
          />
        ) : (
          <Input
            {...inputProps}
            className='combo-box__input'
            onFocus={this.onFocus}
            disabled={disabled}
            onChange={this.setFilter}
            value={this.state.filter}
          />
        )}
        {this.state.open && items ? (
          <div className='combo-box__content-wrap'>
            <ContentHeightScrollbar
              {...scrollbarProps}
              className={`combo-box__scrollbar ${
                scrollbarProps.className || ''
              }`}
            >
              {(disableFiltering
                ? items
                : items.filter(this.filterFunction)
              ).map((item, index) => (
                <ItemComponent
                  key={index}
                  className={`combo-box__item ${
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

export default ComboBox;

ComboBox.defaultProps = {
  showSelectedItem: true
};

ComboBox.propTypes = {
  /**
   * Класс компонента для отрисовки элементов выпадающего списка.
   */
  ItemComponent: PropTypes.elementType,
  /**
   * Класс компонента для отрисовки выбранного элемента вместо поля ввода.
   */
  SelectedItemComponent: PropTypes.elementType,
  /**
   * Флаг, указывающий необходимость отрисовки компонента выбранного элемента списка вместо поля ввода. По умолчанию true
   */
  showSelectedItem: PropTypes.bool,
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
   * @param {string} name - название выпадающего списка, на основе заданного компоненту свойства "name".
   */
  onChange: PropTypes.func,
  /**
   * Обработчик события изменения фильтра в поле ввода выпадающего списка. Принимает входящий параметр:
   * @param {string} filter - текст фильтра.
   */
  onFilterChange: PropTypes.func,
  /**
   * Функция для фильтрации элементов выпадающего списка в соответствии с введенным фильтром
   * @param {any} item - элемент списка
   * <br>
   * @param {string} filter - текущее значение фильтра
   */
  filterFunction: PropTypes.func,
  /**
   * Флаг, отключающий фильтрацию элементов в выпадающем списке на основе фильтра в поле ввода. Используется в случае, когда содержимое списка полностью регулируется родительским компонентом, например если содержимое подгружается с задержкой с сервера.
   */
  disableFiltering: PropTypes.func,
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
