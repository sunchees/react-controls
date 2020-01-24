'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-97d959d1.js');
var React = require('react');
var React__default = _interopDefault(React);
var styleInject_es = require('./style-inject.es-dcee06b6.js');
require('./button.js');
var index = require('./index-f47bf584.js');
var text = require('./text.js');
var radio = require('./radio.js');

var css = ".radio-with-label {\r\n  display: flex;\r\n  align-items: center;\r\n  cursor: pointer;\r\n}\r\n\r\n.radio-with-label__label {\r\n  margin-left: 5px;\r\n  line-height: 20px;\r\n  font-size: 14px;\r\n  white-space: pre-wrap;\r\n}\r\n\r\n.radio-with-label.disabled {\r\n  cursor: default;\r\n}\r\n\r\n.radio-with-label.disabled > .radio-with-label__label {\r\n  opacity: 0.5;\r\n}";
styleInject_es.styleInject(css);

var _class;
var RadioWithLabel = (_class =
/*#__PURE__*/
function (_React$PureComponent) {
  _rollupPluginBabelHelpers._inherits(RadioWithLabel, _React$PureComponent);

  function RadioWithLabel() {
    _rollupPluginBabelHelpers._classCallCheck(this, RadioWithLabel);

    return _rollupPluginBabelHelpers._possibleConstructorReturn(this, _rollupPluginBabelHelpers._getPrototypeOf(RadioWithLabel).apply(this, arguments));
  }

  _rollupPluginBabelHelpers._createClass(RadioWithLabel, [{
    key: "onClick",
    value: function onClick() {
      if (this.props.onClick && !this.props.disabled) this.props.onClick(this.props.item, this.props.name);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          _this$props$className = _this$props.className,
          className = _this$props$className === void 0 ? '' : _this$props$className,
          selected = _this$props.selected,
          item = _this$props.item,
          name = _this$props.name,
          onClick = _this$props.onClick,
          disabled = _this$props.disabled,
          label = _this$props.label,
          props = _rollupPluginBabelHelpers._objectWithoutProperties(_this$props, ["className", "selected", "item", "name", "onClick", "disabled", "label"]);

      return React__default.createElement("div", _rollupPluginBabelHelpers._extends({}, props, {
        className: "radio-with-label ".concat(disabled ? 'disabled' : '', " ").concat(className),
        onClick: this.onClick
      }), React__default.createElement(radio, {
        className: "radio-with-label__radio",
        selected: selected,
        disabled: disabled
      }), label ? React__default.createElement(text, {
        className: "radio-with-label__label",
        value: label
      }) : null);
    }
  }]);

  return RadioWithLabel;
}(React__default.PureComponent), (_rollupPluginBabelHelpers._applyDecoratedDescriptor(_class.prototype, "onClick", [index.autobind], Object.getOwnPropertyDescriptor(_class.prototype, "onClick"), _class.prototype)), _class);

module.exports = RadioWithLabel;
