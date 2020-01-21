'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-97d959d1.js');
var React = require('react');
var React__default = _interopDefault(React);
var styleInject_es = require('./style-inject.es-dcee06b6.js');
var button = require('./button.js');
var index = require('./index-f47bf584.js');
require('./_commonjsHelpers-72d386ba.js');
require('./_react_commonjs-external-58b78ee1.js');
var contentHeightScrollbar = require('./content-height-scrollbar.js');
require('./scrollbar.js');
require('./index-dbbea75d.js');

var css = ".dropdown {\r\n  position: relative;\r\n  min-height: 32px;\r\n  border-radius: 5px;\r\n  border: 1px solid #d3d3d3;\r\n}\r\n.dropdown.open {\r\n  border-bottom: none;\r\n  border-bottom-left-radius: 0px;\r\n  border-bottom-right-radius: 0px;\r\n}\r\n.dropdown.error {\r\n  border-color: #d22c75;\r\n  box-shadow: 0 0 6px 0#d22c75;\r\n}\r\n\r\n.dropdown__title,\r\n.dropdown__item {\r\n  position: relative;\r\n  width: 100%;\r\n  height: 38px;\r\n  text-align: left;\r\n  border-radius: unset;\r\n  font-size: 16px;\r\n  padding: 10px;\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n  text-overflow: ellipsis;\r\n}\r\n\r\n.dropdown__title:disabled {\r\n  background-color: unset;\r\n  opacity: 0.5;\r\n}\r\n\r\n.dropdown__title:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  right: 15px;\r\n  top: calc(50% - 2.5px);\r\n  display: block;\r\n  border: 5px solid transparent;\r\n  border-top: 5px solid #424242;\r\n}\r\n\r\n.dropdown__content-wrap {\r\n  position: absolute;\r\n  width: 100%;\r\n  max-height: 140px;\r\n}\r\n\r\n.dropdown__scrollbar {\r\n  max-height: inherit;\r\n  background-color: #fff;\r\n  border: 1px solid #d3d3d3;\r\n  border-top: none;\r\n  border-radius: 0px 0px 5px 5px;\r\n  width: calc(100% + 2px) !important;\r\n  left: -1px;\r\n  z-index: 1;\r\n}\r\n\r\n.dropdown__scrollbar > .scrollbar__track.horizontal {\r\n  visibility: hidden;\r\n}\r\n\r\n.dropdown__item:hover {\r\n  background-color: #deecff;\r\n}\r\n";
styleInject_es.styleInject(css);

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
      }, this.props.displayField ? this.props.item[this.props.displayField] : this.props.item);
    }
  }]);

  return DefaultDropdownItem;
}(React__default.PureComponent), (_rollupPluginBabelHelpers._applyDecoratedDescriptor(_class.prototype, "onMouseDown", [index.autobind], Object.getOwnPropertyDescriptor(_class.prototype, "onMouseDown"), _class.prototype)), _class);

var Dropdown = index.autobind(_class2 =
/*#__PURE__*/
function (_React$Component) {
  _rollupPluginBabelHelpers._inherits(Dropdown, _React$Component);

  function Dropdown(props) {
    var _this;

    _rollupPluginBabelHelpers._classCallCheck(this, Dropdown);

    _this = _rollupPluginBabelHelpers._possibleConstructorReturn(this, _rollupPluginBabelHelpers._getPrototypeOf(Dropdown).call(this, props));
    _this.state = {
      open: false,
      selected: _this.props.defaultItem || null
    };
    _this.scrollbar = null;
    return _this;
  }

  _rollupPluginBabelHelpers._createClass(Dropdown, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (!this.props.defaultItem !== this.state.selected && !prevProps.defaultItem !== this.props.defaultItem) this.setState({
        selected: this.props.defaultItem
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
          defaultItem = _this$props.defaultItem,
          onChange = _this$props.onChange,
          error = _this$props.error,
          disabled = _this$props.disabled,
          _this$props$scrollbar = _this$props.scrollbarProps,
          scrollbarProps = _this$props$scrollbar === void 0 ? {} : _this$props$scrollbar,
          props = _rollupPluginBabelHelpers._objectWithoutProperties(_this$props, ["className", "ItemComponent", "items", "displayField", "defaultItem", "onChange", "error", "disabled", "scrollbarProps"]);

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
          className: "dropdown__item ".concat(item === _this2.state.selected ? 'selected' : ''),
          selected: item === _this2.state.selected,
          onMouseDown: _this2.onItemClick,
          item: item,
          displayField: displayField
        });
      }))) : null);
    }
  }]);

  return Dropdown;
}(React__default.Component)) || _class2;

module.exports = Dropdown;
