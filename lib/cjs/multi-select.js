'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-a036f66d.js');
var React = require('react');
var React__default = _interopDefault(React);
var button = require('./button.js');
var index = require('./index-ca26b417.js');
var text = require('./text.js');
var index$1 = require('./index-f47bf584.js');
var column = require('./column.js');
var isEqual = require('./isEqual-17e94425.js');
require('./_react_commonjs-external-30e5c7b3.js');
require('./input.js');
var contentHeightScrollbar = require('./content-height-scrollbar.js');
require('./scrollbar.js');
var comboBox = require('./combo-box.js');
var row = require('./row.js');

var _class, _class2;
var DefaultMultiSelectListItem = (_class =
/*#__PURE__*/
function (_React$PureComponent) {
  _rollupPluginBabelHelpers._inherits(DefaultMultiSelectListItem, _React$PureComponent);

  function DefaultMultiSelectListItem() {
    _rollupPluginBabelHelpers._classCallCheck(this, DefaultMultiSelectListItem);

    return _rollupPluginBabelHelpers._possibleConstructorReturn(this, _rollupPluginBabelHelpers._getPrototypeOf(DefaultMultiSelectListItem).apply(this, arguments));
  }

  _rollupPluginBabelHelpers._createClass(DefaultMultiSelectListItem, [{
    key: "onDeselectClick",
    value: function onDeselectClick() {
      if (this.props.onDeselectClick) this.props.onDeselectClick(this.props.item);
    }
  }, {
    key: "render",
    value: function render() {
      return React__default.createElement(row, {
        className: "multi-select__list-item ".concat(this.props.className || '')
      }, React__default.createElement(text, {
        className: "multi-select__list-item__value",
        value: this.props.item ? this.props.displayField ? "".concat(this.props.item[this.props.displayField]) : "".concat(this.props.item) : null
      }), React__default.createElement(button, {
        className: "multi-select__list-item__deselect-button",
        onClick: this.onDeselectClick,
        disabled: this.props.disabled
      }, "\u2715"));
    }
  }]);

  return DefaultMultiSelectListItem;
}(React__default.PureComponent), (_rollupPluginBabelHelpers._applyDecoratedDescriptor(_class.prototype, "onDeselectClick", [index$1.autobind], Object.getOwnPropertyDescriptor(_class.prototype, "onDeselectClick"), _class.prototype)), _class);
/**
 * Компонент списка с множественным выбором с фильтром.
 * <br>
 * Представляет собой обертку над компонентом [ComboBox](#comboBox) с вложенным компонентом [ContentHeightScrollbar](#contentHeightScrollbar) содержащим выбранные элементы списка.
 */

var MultiSelect = index$1.autobind(_class2 =
/*#__PURE__*/
function (_React$Component) {
  _rollupPluginBabelHelpers._inherits(MultiSelect, _React$Component);

  function MultiSelect(props) {
    var _this;

    _rollupPluginBabelHelpers._classCallCheck(this, MultiSelect);

    _this = _rollupPluginBabelHelpers._possibleConstructorReturn(this, _rollupPluginBabelHelpers._getPrototypeOf(MultiSelect).call(this, props));
    _this.state = {
      selected: _this.props.defaultSelected || []
    };
    _this.comboBox = null;
    return _this;
  }

  _rollupPluginBabelHelpers._createClass(MultiSelect, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      if (!isEqual.isEqual(this.props.items, nextProps.items)) this.setState({
        selected: []
      });
      return !isEqual.isEqual(this.state.selected, nextState.selected) || !isEqual.isEqual(this.props.items, nextProps.items) || this.props.disabled !== nextProps.disabled;
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
          selected: [].concat(_rollupPluginBabelHelpers._toConsumableArray(this.state.selected), [item])
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
      return React__default.createElement(column, {
        className: "multi-select ".concat(className)
      }, React__default.createElement(comboBox, _rollupPluginBabelHelpers._extends({}, comboBoxProps, {
        className: "multi-select__combo-box",
        ref: this.setComboBoxRef,
        disabled: disabled,
        items: items.filter(function (item) {
          return !_this2.state.selected.find(function (selected) {
            return isEqual.isEqual(selected, item);
          });
        }),
        onChange: this.selectItem,
        displayField: displayField
      })), React__default.createElement(contentHeightScrollbar, _rollupPluginBabelHelpers._extends({}, scrollbarProps, {
        className: "multi-select__scrollbar"
      }), this.state.selected.map(function (item, index) {
        return React__default.createElement(ItemComponent, {
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
}(React__default.Component)) || _class2;
MultiSelect.propTypes = {
  /**
   * Класс компонента для отрисовки выбранных элементов списка.
   */
  ItemComponent: index.PropTypes.elementType,

  /**
   * Массив элементов, доступных для выбора в выпадающем списке.
   */
  items: index.PropTypes.arrayOf(index.PropTypes.any),

  /**
   * Название поля элемента списка, отображаемого в выпадающем списке и в списке выбранных элементов. Применимо в случае, если используется стандартный ItemComponent.
   * <br>
   * Если displayField не передан, и используется стандартный ItemComponent, то для отображения будет использоваться сам элемент списка.
   */
  displayField: index.PropTypes.string,

  /**
   * Выбранные по умолчанию элементы списка.
   */
  defaultSelected: index.PropTypes.arrayOf(index.PropTypes.any),

  /**
   * Обработчик события изменения выбранных элементов списка. Принимает два входящих параметра:
   *
   * @param {Array} items - новый массив выбранных элементов списка.
   * <br>
   * @param {string=} name - название списка, на основе заданного компоненту свойства "name".
   */
  onChange: index.PropTypes.func,

  /**
   * Название списка.
   */
  name: index.PropTypes.string,

  /**
   * Флаг, отключающий список.
   */
  disabled: index.PropTypes.bool,

  /**
   * Свойства, передаваемые вложенному компоненту [ComboBox](#comboBox)
   */
  comboBoxProps: index.PropTypes.shape(),

  /**
   * Свойства, передаваемые вложенному компоненту [ContentHeightScrollbar](#contentHeightScrollbar)
   */
  scrollbarProps: index.PropTypes.shape()
};

module.exports = MultiSelect;
