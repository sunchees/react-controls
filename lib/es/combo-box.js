import { b as _inherits, c as _createClass, d as _applyDecoratedDescriptor, e as _classCallCheck, f as _possibleConstructorReturn, g as _getPrototypeOf, _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-4576a74b.js';
import React from 'react';
import Button from './button.js';
import { P as PropTypes } from './index-1e9a47a9.js';
import { a as autobind } from './index-4f87497b.js';
import { i as isEqual } from './isEqual-db870630.js';
import './_react_commonjs-external-132f0747.js';
import Input from './input.js';
import ContentHeightScrollbar from './content-height-scrollbar.js';
import './scrollbar.js';

var _class, _class2;
var DefaultComboBoxItem = (_class =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(DefaultComboBoxItem, _React$PureComponent);

  function DefaultComboBoxItem() {
    _classCallCheck(this, DefaultComboBoxItem);

    return _possibleConstructorReturn(this, _getPrototypeOf(DefaultComboBoxItem).apply(this, arguments));
  }

  _createClass(DefaultComboBoxItem, [{
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

  return DefaultComboBoxItem;
}(React.PureComponent), (_applyDecoratedDescriptor(_class.prototype, "onMouseDown", [autobind], Object.getOwnPropertyDescriptor(_class.prototype, "onMouseDown"), _class.prototype)), _class);
/**
 * Компонент выпадающего списка с фильтром.
 * Представляет собой обертку над HTML-элементом div с вложенным компонентом [ContentHeightScrollbar](#contentheightscrollbar) и компонентом [Input](#input), используемым в качестве поля ввода для фильтрации элементов списка..
 */

var ComboBox = autobind(_class2 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ComboBox, _React$Component);

  function ComboBox(props) {
    var _this;

    _classCallCheck(this, ComboBox);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ComboBox).call(this, props));
    _this.state = {
      open: false,
      filter: _this.props.defaultFilter || '',
      selected: _this.props.defaultSelected || null
    };
    _this.scrollbar = null;
    return _this;
  }

  _createClass(ComboBox, [{
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
    key: "onFocus",
    value: function onFocus() {
      this.setState({
        open: true
      });
    }
  }, {
    key: "onItemClick",
    value: function onItemClick(item) {
      this.setState({
        selected: item,
        filter: this.props.displayField ? item[this.props.displayField] : "".concat(item),
        open: false
      });
      if (this.props.onChange) this.props.onChange(item, this.props.name);
    }
  }, {
    key: "setFilter",
    value: function setFilter(filter) {
      this.setState({
        filter: filter
      });
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
    /**
     * Сбрасывает текущий фильтр
     *
     * @public
     */

  }, {
    key: "resetFilter",
    value: function resetFilter() {
      this.setState({
        filter: ''
      });
    }
  }, {
    key: "filterFunction",
    value: function filterFunction(item) {
      return this.props.filterFunction ? this.props.filterFunction(item, this.state.filter) : "".concat(item || '').toLowerCase().includes(this.state.filter.toLowerCase());
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          _this$props$className = _this$props.className,
          className = _this$props$className === void 0 ? '' : _this$props$className,
          _this$props$ItemCompo = _this$props.ItemComponent,
          ItemComponent = _this$props$ItemCompo === void 0 ? DefaultComboBoxItem : _this$props$ItemCompo,
          _this$props$items = _this$props.items,
          items = _this$props$items === void 0 ? [] : _this$props$items,
          displayField = _this$props.displayField,
          defaultFilter = _this$props.defaultFilter,
          defaultSelected = _this$props.defaultSelected,
          onChange = _this$props.onChange,
          filterFunction = _this$props.filterFunction,
          error = _this$props.error,
          disabled = _this$props.disabled,
          _this$props$inputProp = _this$props.inputProps,
          inputProps = _this$props$inputProp === void 0 ? {} : _this$props$inputProp,
          _this$props$scrollbar = _this$props.scrollbarProps,
          scrollbarProps = _this$props$scrollbar === void 0 ? {} : _this$props$scrollbar,
          name = _this$props.name,
          props = _objectWithoutProperties(_this$props, ["className", "ItemComponent", "items", "displayField", "defaultFilter", "defaultSelected", "onChange", "filterFunction", "error", "disabled", "inputProps", "scrollbarProps", "name"]);

      return React.createElement("div", _extends({}, props, {
        className: "combo-box ".concat(this.state.open ? 'open' : '', " ").concat(error ? 'error' : '', " ").concat(className),
        onBlur: this.onBlur
      }), React.createElement(Input, _extends({}, inputProps, {
        className: "combo-box__input",
        onFocus: this.onFocus,
        disabled: disabled,
        onChange: this.setFilter,
        value: this.state.filter
      })), this.state.open && items ? React.createElement("div", {
        className: "combo-box__content-wrap"
      }, React.createElement(ContentHeightScrollbar, _extends({}, scrollbarProps, {
        className: "combo-box__scrollbar ".concat(scrollbarProps.className || '')
      }), items.filter(this.filterFunction).map(function (item, index) {
        return React.createElement(ItemComponent, {
          key: index,
          className: "combo-box__item ".concat(isEqual(item, _this2.state.selected) ? 'selected' : ''),
          selected: isEqual(item, _this2.state.selected),
          onMouseDown: _this2.onItemClick,
          item: item,
          displayField: displayField
        });
      }))) : null);
    }
  }]);

  return ComboBox;
}(React.Component)) || _class2;
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

export default ComboBox;
