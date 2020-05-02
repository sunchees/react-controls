import { b as _inherits, c as _createClass, d as _applyDecoratedDescriptor, e as _classCallCheck, f as _possibleConstructorReturn, g as _getPrototypeOf, j as _toConsumableArray, a as _extends } from './_rollupPluginBabelHelpers-4576a74b.js';
import React from 'react';
import Button from './button.js';
import { P as PropTypes } from './index-3248c44c.js';
import Text from './text.js';
import { a as autobind } from './index-4f87497b.js';
import Column from './column.js';
import { i as isEqual } from './isEqual-2bcc2cb9.js';
import './_react_commonjs-external-132f0747.js';
import './input.js';
import ContentHeightScrollbar from './content-height-scrollbar.js';
import './scrollbar.js';
import ComboBox from './combo-box.js';
import Row from './row.js';

var _class, _class2;
var DefaultMultiSelectListItem = (_class =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(DefaultMultiSelectListItem, _React$PureComponent);

  function DefaultMultiSelectListItem() {
    _classCallCheck(this, DefaultMultiSelectListItem);

    return _possibleConstructorReturn(this, _getPrototypeOf(DefaultMultiSelectListItem).apply(this, arguments));
  }

  _createClass(DefaultMultiSelectListItem, [{
    key: "onDeselectClick",
    value: function onDeselectClick() {
      if (this.props.onDeselectClick) this.props.onDeselectClick(this.props.item);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(Row, {
        className: "multi-select__list-item ".concat(this.props.className || '')
      }, React.createElement(Text, {
        className: "multi-select__list-item__value",
        value: this.props.item ? this.props.displayField ? "".concat(this.props.item[this.props.displayField]) : "".concat(this.props.item) : null
      }), React.createElement(Button, {
        className: "multi-select__list-item__deselect-button",
        onClick: this.onDeselectClick,
        disabled: this.props.disabled
      }, "\u2715"));
    }
  }]);

  return DefaultMultiSelectListItem;
}(React.PureComponent), (_applyDecoratedDescriptor(_class.prototype, "onDeselectClick", [autobind], Object.getOwnPropertyDescriptor(_class.prototype, "onDeselectClick"), _class.prototype)), _class);
/**
 * Компонент списка с множественным выбором с фильтром.
 * <br>
 * Представляет собой обертку над компонентом [ComboBox](#comboBox) с вложенным компонентом [ContentHeightScrollbar](#contentHeightScrollbar) содержащим выбранные элементы списка.
 */

var MultiSelect = autobind(_class2 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MultiSelect, _React$Component);

  function MultiSelect(props) {
    var _this;

    _classCallCheck(this, MultiSelect);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MultiSelect).call(this, props));
    _this.state = {
      selected: _this.props.defaultSelected || []
    };
    _this.comboBox = null;
    return _this;
  }

  _createClass(MultiSelect, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      if (!isEqual(this.props.items, nextProps.items)) this.setState({
        selected: []
      });
      return !isEqual(this.state.selected, nextState.selected) || !isEqual(this.props.items, nextProps.items) || this.props.disabled !== nextProps.disabled;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.selected !== this.state.selected && this.props.onChange) this.props.onChange(this.state.selected, this.props.name);
    }
  }, {
    key: "setComboBoxRef",
    value: function setComboBoxRef(ref) {
      this.comboBox = ref;
    }
    /**
     * Возвращает текущие выбранные элементы списка
     *
     * @returns {Array}
     *
     * @public
     */

  }, {
    key: "getSelected",
    value: function getSelected() {
      return this.state.selected;
    }
    /**
     * Сбрасывает текущие выбранные элементы списка
     *
     * @public
     */

  }, {
    key: "resetSelected",
    value: function resetSelected() {
      this.setState({
        selected: []
      });
    }
  }, {
    key: "selectItem",
    value: function selectItem(item) {
      if (item) {
        this.setState({
          selected: [].concat(_toConsumableArray(this.state.selected), [item])
        });
        this.comboBox.resetFilter();
        this.comboBox.resetSelected();
      }
    }
  }, {
    key: "deselectItem",
    value: function deselectItem(item) {
      this.setState({
        selected: this.state.selected.filter(function (_item) {
          return _item !== item;
        })
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          _this$props$className = _this$props.className,
          className = _this$props$className === void 0 ? '' : _this$props$className,
          _this$props$comboBoxP = _this$props.comboBoxProps,
          comboBoxProps = _this$props$comboBoxP === void 0 ? {} : _this$props$comboBoxP,
          _this$props$scrollbar = _this$props.scrollbarProps,
          scrollbarProps = _this$props$scrollbar === void 0 ? {} : _this$props$scrollbar,
          disabled = _this$props.disabled,
          _this$props$items = _this$props.items,
          items = _this$props$items === void 0 ? [] : _this$props$items,
          _this$props$ItemCompo = _this$props.ItemComponent,
          ItemComponent = _this$props$ItemCompo === void 0 ? DefaultMultiSelectListItem : _this$props$ItemCompo,
          name = _this$props.name,
          displayField = _this$props.displayField;
      return React.createElement(Column, {
        className: "multi-select ".concat(className)
      }, React.createElement(ComboBox, _extends({}, comboBoxProps, {
        className: "multi-select__combo-box",
        ref: this.setComboBoxRef,
        disabled: disabled,
        items: items.filter(function (item) {
          return !_this2.state.selected.find(function (selected) {
            return isEqual(selected, item);
          });
        }),
        onChange: this.selectItem,
        displayField: displayField
      })), React.createElement(ContentHeightScrollbar, _extends({}, scrollbarProps, {
        className: "multi-select__scrollbar"
      }), this.state.selected.map(function (item, index) {
        return React.createElement(ItemComponent, {
          key: index,
          className: "multi-select__list-item",
          item: item,
          disabled: disabled,
          onDeselectClick: _this2.deselectItem,
          displayField: displayField
        });
      })));
    }
  }]);

  return MultiSelect;
}(React.Component)) || _class2;
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

export default MultiSelect;
