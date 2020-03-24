import React from 'react';
import PropTypes from 'prop-types';
import isEqual from 'lodash/isEqual';
import autobind from 'autobind-decorator';
import Button from '../button';
import Text from '../text';
import Row from '../row';
import Column from '../column';
import ComboBox from '../combo-box';
import ContentHeightScrollbar from '../content-height-scrollbar';
import './multi-select.css';

class DefaultMultiSelectListItem extends React.PureComponent {
  @autobind
  onDeselectClick() {
    if (this.props.onDeselectClick) this.props.onDeselectClick(this.props.item);
  }

  render() {
    return (
      <Row className={`multi-select__list-item ${this.props.className || ''}`}>
        <Text
          className='multi-select__list-item__value'
          value={
            this.props.item
              ? this.props.displayField
                ? `${this.props.item[this.props.displayField]}`
                : `${this.props.item}`
              : null
          }
        />
        <Button
          className='multi-select__list-item__deselect-button'
          onClick={this.onDeselectClick}
          disabled={this.props.disabled}
        >
          ✕
        </Button>
      </Row>
    );
  }
}

/**
 * Компонент списка с множественным выбором с фильтром.
 * <br>
 * Представляет собой обертку над компонентом [ComboBox](#comboBox) с вложенным компонентом [ContentHeightScrollbar](#contentHeightScrollbar) содержащим выбранные элементы списка.
 */
@autobind
class MultiSelect extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: this.props.defaultSelected || []
    };

    this.comboBox = null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (!isEqual(this.props.items, nextProps.items))
      this.setState({ selected: [] });

    return (
      !isEqual(this.state.selected, nextState.selected) ||
      !isEqual(this.props.items, nextProps.items) ||
      this.props.disabled !== nextProps.disabled
    );
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.selected !== this.state.selected && this.props.onChange)
      this.props.onChange(this.state.selected, this.props.name);
  }

  setComboBoxRef(ref) {
    this.comboBox = ref;
  }

  /**
   * Возвращает текущие выбранные элементы списка
   *
   * @returns {Array}
   *
   * @public
   */
  getSelected() {
    return this.state.selected;
  }

  /**
   * Сбрасывает текущие выбранные элементы списка
   *
   * @public
   */
  resetSelected() {
    this.setState({ selected: [] });
  }

  selectItem(item) {
    if (item) {
      this.setState({ selected: [...this.state.selected, item] });
      this.comboBox.resetFilter();
      this.comboBox.resetSelected();
    }
  }

  deselectItem(item) {
    this.setState({
      selected: this.state.selected.filter(_item => _item !== item)
    });
  }

  render() {
    const {
      className = '',
      comboBoxProps = {},
      scrollbarProps = {},
      disabled,
      items = [],
      ItemComponent = DefaultMultiSelectListItem,
      name,
      displayField
    } = this.props;

    return (
      <Column className={`multi-select ${className}`}>
        <ComboBox
          {...comboBoxProps}
          className='multi-select__combo-box'
          ref={this.setComboBoxRef}
          disabled={disabled}
          items={items.filter(
            item =>
              !this.state.selected.find(selected => isEqual(selected, item))
          )}
          onChange={this.selectItem}
          displayField={displayField}
        />
        <ContentHeightScrollbar
          {...scrollbarProps}
          className='multi-select__scrollbar'
        >
          {this.state.selected.map((item, index) => (
            <ItemComponent
              key={index}
              className='multi-select__list-item'
              item={item}
              disabled={disabled}
              onDeselectClick={this.deselectItem}
              displayField={displayField}
            />
          ))}
        </ContentHeightScrollbar>
      </Column>
    );
  }
}

export default MultiSelect;

MultiSelect.propTypes = {
  /**
   * Класс компонента для отрисовки выбранных элементов списка.
   */
  ItemComponent: PropTypes.elementType,
  /**
   * Массив элементов, доступных для выбора в выпадающем списке.
   */
  items: PropTypes.arrayOf(PropTypes.any),
  /**
   * Название поля элемента списка, отображаемого в выпадающем списке и в списке выбранных элементов. Применимо в случае, если используется стандартный ItemComponent.
   * <br>
   * Если displayField не передан, и используется стандартный ItemComponent, то для отображения будет использоваться сам элемент списка.
   */
  displayField: PropTypes.string,
  /**
   * Выбранные по умолчанию элементы списка.
   */
  defaultSelected: PropTypes.arrayOf(PropTypes.any),
  /**
   * Обработчик события изменения выбранных элементов списка. Принимает два входящих параметра:
   *
   * @param {Array} items - новый массив выбранных элементов списка.
   * <br>
   * @param {string=} name - название списка, на основе заданного компоненту свойства "name".
   */
  onChange: PropTypes.func,
  /**
   * Название списка.
   */
  name: PropTypes.string,
  /**
   * Флаг, отключающий список.
   */
  disabled: PropTypes.bool,
  /**
   * Свойства, передаваемые вложенному компоненту [ComboBox](#comboBox)
   */
  comboBoxProps: PropTypes.shape(),
  /**
   * Свойства, передаваемые вложенному компоненту [ContentHeightScrollbar](#contentHeightScrollbar)
   */
  scrollbarProps: PropTypes.shape()
};
