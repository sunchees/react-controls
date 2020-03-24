import { b as _inherits, c as _createClass, d as _applyDecoratedDescriptor, e as _classCallCheck, f as _possibleConstructorReturn, g as _getPrototypeOf, _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-4576a74b.js';
import React from 'react';
import Button from './button.js';
import { P as PropTypes } from './index-1e9a47a9.js';
import { a as autobind } from './index-4f87497b.js';
import { i as isEqual } from './isEqual-0877f8f8.js';
import './_react_commonjs-external-132f0747.js';
import ContentHeightScrollbar from './content-height-scrollbar.js';
import './scrollbar.js';

var _class, _class2;
var DefaultDropdownItem = (_class =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(DefaultDropdownItem, _React$PureComponent);

  function DefaultDropdownItem() {
    _classCallCheck(this, DefaultDropdownItem);

    return _possibleConstructorReturn(this, _getPrototypeOf(DefaultDropdownItem).apply(this, arguments));
  }

  _createClass(DefaultDropdownItem, [{
    key: "onMouseDown",
    value: function onMouseDown() {
      this.props.onMouseDown(this.props.item);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(Button, {
        className: this.props.className,
        onMouseDown: this.onMouseDown,
        disabled: this.props.disabled
      }, this.props.item ? this.props.displayField ? "".concat(this.props.item[this.props.displayField]) : "".concat(this.props.item) : null);
    }
  }]);

  return DefaultDropdownItem;
}(React.PureComponent), (_applyDecoratedDescriptor(_class.prototype, "onMouseDown", [autobind], Object.getOwnPropertyDescriptor(_class.prototype, "onMouseDown"), _class.prototype)), _class);
/**
 * Компонент выпадающего списка.
 * Представляет собой обертку над HTML-элементом div с вложенным компонентом [ContentHeightScrollbar](/#contentheightscrollbar).
 */

var Dropdown = autobind(_class2 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Dropdown, _React$Component);

  function Dropdown(props) {
    var _this;

    _classCallCheck(this, Dropdown);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Dropdown).call(this, props));
    _this.state = {
      open: false,
      selected: _this.props.defaultSelected || null
    };
    _this.scrollbar = null;
    return _this;
  }

  _createClass(Dropdown, [{
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
          props = _objectWithoutProperties(_this$props, ["className", "ItemComponent", "items", "displayField", "defaultSelected", "onChange", "error", "disabled", "scrollbarProps", "name"]);

      return React.createElement("div", _extends({}, props, {
        className: "dropdown ".concat(this.state.open ? 'open' : '', " ").concat(error ? 'error' : '', " ").concat(className),
        onBlur: this.onBlur
      }), React.createElement(ItemComponent, {
        className: "dropdown__title",
        onMouseDown: this.toggleDropdown,
        disabled: disabled,
        item: this.state.selected,
        displayField: displayField
      }), this.state.open && items ? React.createElement("div", {
        className: "dropdown__content-wrap"
      }, React.createElement(ContentHeightScrollbar, _extends({}, scrollbarProps, {
        className: "dropdown__scrollbar ".concat(scrollbarProps.className || '')
      }), items.map(function (item, index) {
        return React.createElement(ItemComponent, {
          key: index,
          className: "dropdown__item ".concat(isEqual(item, _this2.state.selected) ? 'selected' : ''),
          selected: isEqual(item, _this2.state.selected),
          onMouseDown: _this2.onItemClick,
          item: item,
          displayField: displayField
        });
      }))) : null);
    }
  }]);

  return Dropdown;
}(React.Component)) || _class2;
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
   * Название поля элемента выпадающего списка, отображаемого в выпадающем списке. Применимо в случае, если используется стандартный ItemComponent.
   * <br>
   * Если displayField не передан, и используется стандартный ItemComponent, то для отображения будет использоваться сам элемент списка.
   */
  displayField: PropTypes.string,

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

export default Dropdown;
