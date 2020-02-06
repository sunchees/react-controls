'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var styleInject_es = require('./style-inject.es-4c81be79.js');
var React = require('react');
var React__default = _interopDefault(React);
require('./button.js');
var index = require('./index-ca26b417.js');
var text = require('./text.js');
var index$1 = require('./index-f47bf584.js');
var checkbox = require('./checkbox.js');

var css = ".checkbox-with-label {\r\n  display: flex;\r\n  align-items: center;\r\n  cursor: pointer;\r\n}\r\n\r\n.checkbox-with-label__label {\r\n  margin-left: 5px;\r\n  line-height: 20px;\r\n  font-size: 14px;\r\n  white-space: pre-wrap;\r\n}\r\n\r\n.checkbox-with-label.disabled {\r\n  cursor: default;\r\n}\r\n\r\n.checkbox-with-label.disabled > .checkbox-with-label__label {\r\n  opacity: 0.5;\r\n}";
styleInject_es.styleInject(css);

var _class;
/**
 * Базовый компонент чекбокса с ярлыком.
 */

var CheckboxWithLabel = (_class =
/*#__PURE__*/
function (_React$Component) {
  styleInject_es._inherits(CheckboxWithLabel, _React$Component);

  function CheckboxWithLabel() {
    styleInject_es._classCallCheck(this, CheckboxWithLabel);

    return styleInject_es._possibleConstructorReturn(this, styleInject_es._getPrototypeOf(CheckboxWithLabel).apply(this, arguments));
  }

  styleInject_es._createClass(CheckboxWithLabel, [{
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
          checked = _this$props.checked,
          item = _this$props.item,
          name = _this$props.name,
          onClick = _this$props.onClick,
          disabled = _this$props.disabled,
          label = _this$props.label,
          props = styleInject_es._objectWithoutProperties(_this$props, ["className", "checked", "item", "name", "onClick", "disabled", "label"]);

      return React__default.createElement("div", styleInject_es._extends({}, props, {
        className: "checkbox-with-label ".concat(disabled ? 'disabled' : '', " ").concat(className),
        onClick: this.onClick
      }), React__default.createElement(checkbox, {
        className: "checkbox-with-label__checkbox",
        checked: checked,
        disabled: disabled
      }), label ? React__default.createElement(text, {
        className: "checkbox-with-label__label",
        value: label
      }) : null);
    }
  }]);

  return CheckboxWithLabel;
}(React__default.Component), (styleInject_es._applyDecoratedDescriptor(_class.prototype, "onClick", [index$1.autobind], Object.getOwnPropertyDescriptor(_class.prototype, "onClick"), _class.prototype)), _class);
CheckboxWithLabel.propTypes = {
  /**
   * Флаг, задающий активность чекбокса.
   * В случае, если чекбокс активен, к нему применяется стиль 'checked'.
   */
  checked: index.PropTypes.bool,

  /**
   * Функция, вызываемая при нажатии на чекбокс.
   * @param {any=} item - связанный с чекбоксом объект, переданный в качестве свойства "item".
   * <br>
   * @param {string=} name - название чекбокса, на основе заданного компоненту свойства "name".
   */
  onClick: index.PropTypes.func,

  /**
   * Параметр, передаваемый при вызове функции props.onClick
   */
  item: index.PropTypes.any,

  /**
   * Название чекбокса.
   */
  name: index.PropTypes.string,

  /**
   * Ярлык, отображаемый рядом с чекбоксом.
   */
  label: index.PropTypes.string,

  /**
   * Флаг, отключающий чекбокс.
   * В случае, если чекбокс отключен, к обертке будет применен стиль 'disabled'.
   */
  disabled: index.PropTypes.bool
};

module.exports = CheckboxWithLabel;
