'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-a036f66d.js');
var React = require('react');
var React__default = _interopDefault(React);
var button = require('./button.js');
var index = require('./index-ca26b417.js');
var index$1 = require('./index-f47bf584.js');
var isEqual = require('./isEqual-17e94425.js');
require('./_react_commonjs-external-30e5c7b3.js');
var contentHeightScrollbar = require('./content-height-scrollbar.js');
require('./scrollbar.js');

var _class, _class2;
var DefaultDropdownItem = (_class =
/*#__PURE__*/
function (_React$PureComponent) {
  _rollupPluginBabelHelpers._inherits(DefaultDropdownItem, _React$PureComponent);

  function DefaultDropdownItem() {
    _rollupPluginBabelHelpers._classCallCheck(this, DefaultDropdownItem);

    return _rollupPluginBabelHelpers._possibleConstructorReturn(this, _rollupPluginBabelHelpers._getPrototypeOf(DefaultDropdownItem).apply(this, arguments));
  }

  _rollupPluginBabelHelpers._createClass(DefaultDropdownItem, [{
    key: "onMouseDown",
    value: function onMouseDown() {
      this.props.onMouseDown(this.props.item);
    }
  }, {
    key: "render",
    value: function render() {
      return React__default.createElement(button, {
        className: this.props.className,
        onMouseDown: this.onMouseDown,
        disabled: this.props.disabled
      }, this.props.item ? this.props.displayField ? "".concat(this.props.item[this.props.displayField]) : "".concat(this.props.item) : null);
    }
  }]);

  return DefaultDropdownItem;
}(React__default.PureComponent), (_rollupPluginBabelHelpers._applyDecoratedDescriptor(_class.prototype, "onMouseDown", [index$1.autobind], Object.getOwnPropertyDescriptor(_class.prototype, "onMouseDown"), _class.prototype)), _class);
/**
 * Компонент выпадающего списка.
 * Представляет собой обертку над HTML-элементом div с вложенным компонентом [ContentHeightScrollbar](/#contentheightscrollbar).
 */

var Dropdown = index$1.autobind(_class2 =
/*#__PURE__*/
function (_React$Component) {
  _rollupPluginBabelHelpers._inherits(Dropdown, _React$Component);

  function Dropdown(props) {
    var _this;

    _rollupPluginBabelHelpers._classCallCheck(this, Dropdown);

    _this = _rollupPluginBabelHelpers._possibleConstructorReturn(this, _rollupPluginBabelHelpers._getPrototypeOf(Dropdown).call(this, props));
    _this.state = {
      open: false,
      selected: _this.props.defaultSelected || null
    };
    _this.scrollbar = null;
    return _this;
  }

  _rollupPluginBabelHelpers._createClass(Dropdown, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.defaultSelected !== this.state.selected && prevProps.defaultSelected !== this.props.defaultSelected) this.setState({
        selected: this.props.defaultSelected
      });
    }
  }, {
    key: "onBlur",
    value: function onBlur() {
      this.setState({
        open: false
      });
    }
  }, {
    key: "onItemClick",
    value: function onItemClick(item) {
      this.setState({
        selected: item
      });
      if (this.props.onChange) this.props.onChange(item, this.props.name);
    }
    /**
     * Возвращает текущий выбранный элемент выпадающего списка
     *
     * @returns {Object}
     *
     * @public
     */

  }, {
    key: "getSelected",
    value: function getSelected() {
      return this.state.selected;
    }
  }, {
    key: "toggleDropdown",
    value: function toggleDropdown() {
      this.setState({
        open: !this.state.open
      });
    }
    /**
     * Сбрасывает текущий выбранный элемент выпадающего списка
     *
     * @public
     */

  }, {
    key: "resetSelected",
    value: function resetSelected() {
      this.setState({
        selected: null
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          _this$props$className = _this$props.className,
          className = _this$props$className === void 0 ? '' : _this$props$className,
          _this$props$ItemCompo = _this$props.ItemComponent,
          ItemComponent = _this$props$ItemCompo === void 0 ? DefaultDropdownItem : _this$props$ItemCompo,
          _this$props$items = _this$props.items,
          items = _this$props$items === void 0 ? [] : _this$props$items,
          displayField = _this$props.displayField,
          defaultSelected = _this$props.defaultSelected,
          onChange = _this$props.onChange,
          error = _this$props.error,
          disabled = _this$props.disabled,
          _this$props$scrollbar = _this$props.scrollbarProps,
          scrollbarProps = _this$props$scrollbar === void 0 ? {} : _this$props$scrollbar,
          name = _this$props.name,
          props = _rollupPluginBabelHelpers._objectWithoutProperties(_this$props, ["className", "ItemComponent", "items", "displayField", "defaultSelected", "onChange", "error", "disabled", "scrollbarProps", "name"]);

      return React__default.createElement("div", _rollupPluginBabelHelpers._extends({}, props, {
        className: "dropdown ".concat(this.state.open ? 'open' : '', " ").concat(error ? 'error' : '', " ").concat(className),
        onBlur: this.onBlur
      }), React__default.createElement(ItemComponent, {
        className: "dropdown__title",
        onMouseDown: this.toggleDropdown,
        disabled: disabled,
        item: this.state.selected,
        displayField: displayField
      }), this.state.open && items ? React__default.createElement("div", {
        className: "dropdown__content-wrap"
      }, React__default.createElement(contentHeightScrollbar, _rollupPluginBabelHelpers._extends({}, scrollbarProps, {
        className: "dropdown__scrollbar ".concat(scrollbarProps.className || '')
      }), items.map(function (item, index) {
        return React__default.createElement(ItemComponent, {
          key: index,
          className: "dropdown__item ".concat(isEqual.isEqual(item, _this2.state.selected) ? 'selected' : ''),
          selected: isEqual.isEqual(item, _this2.state.selected),
          onMouseDown: _this2.onItemClick,
          item: item,
          displayField: displayField
        });
      }))) : null);
    }
  }]);

  return Dropdown;
}(React__default.Component)) || _class2;
Dropdown.propTypes = {
  /**
   * Класс компонента для отрисовки элементов выпадающего списка.
   */
  ItemComponent: index.PropTypes.elementType,

  /**
   * Массив элементов, доступных для выбора в выпадающем списке.
   */
  items: index.PropTypes.arrayOf(index.PropTypes.any),

  /**
   * Название поля элемента выпадающего списка, отображаемого в выпадающем списке. Применимо в случае, если используется стандартный ItemComponent.
   * <br>
   * Если displayField не передан, и используется стандартный ItemComponent, то для отображения будет использоваться сам элемент списка.
   */
  displayField: index.PropTypes.string,

  /**
   * Выбранный по умолчанию элемент выпадающего списка.
   */
  defaultSelected: index.PropTypes.any,

  /**
   * Обработчик события изменения выбранного элемента выпадающего списка. Принимает два входящих параметра:
   * @param {any} item - новый выбранный элемент списка.
   * <br>
   * @param {string=} name - название выпадающего списка, на основе заданного компоненту свойства "name".
   */
  onChange: index.PropTypes.func,

  /**
   * Название выпадающего списка.
   */
  name: index.PropTypes.string,

  /**
   * Наличие ошибки выпадающего списка. При значении true - добавляет класс .error к компоненту выпадающего списка
   */
  error: index.PropTypes.bool,

  /**
   * Флаг, отключающий выпадающий список.
   */
  disabled: index.PropTypes.bool,

  /**
   * Свойства, передаваемые вложенному компоненту [ContentHeightScrollbar](/#contentheightscrollbar)
   */
  scrollbarProps: index.PropTypes.shape({})
};

module.exports = Dropdown;
