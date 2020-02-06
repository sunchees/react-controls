import { s as styleInject, b as _inherits, c as _createClass, d as _applyDecoratedDescriptor, e as _classCallCheck, f as _possibleConstructorReturn, g as _getPrototypeOf, _ as _objectWithoutProperties, a as _extends } from './style-inject.es-4d895b0c.js';
import React from 'react';
import './button.js';
import { P as PropTypes } from './index-aba1d7fe.js';
import Text from './text.js';
import { a as autobind } from './index-4f87497b.js';
import Checkbox from './checkbox.js';

var css = ".checkbox-with-label {\r\n  display: flex;\r\n  align-items: center;\r\n  cursor: pointer;\r\n}\r\n\r\n.checkbox-with-label__label {\r\n  margin-left: 5px;\r\n  line-height: 20px;\r\n  font-size: 14px;\r\n  white-space: pre-wrap;\r\n}\r\n\r\n.checkbox-with-label.disabled {\r\n  cursor: default;\r\n}\r\n\r\n.checkbox-with-label.disabled > .checkbox-with-label__label {\r\n  opacity: 0.5;\r\n}";
styleInject(css);

var _class;
/**
 * Базовый компонент чекбокса с ярлыком.
 */

var CheckboxWithLabel = (_class =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CheckboxWithLabel, _React$Component);

  function CheckboxWithLabel() {
    _classCallCheck(this, CheckboxWithLabel);

    return _possibleConstructorReturn(this, _getPrototypeOf(CheckboxWithLabel).apply(this, arguments));
  }

  _createClass(CheckboxWithLabel, [{
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
          props = _objectWithoutProperties(_this$props, ["className", "checked", "item", "name", "onClick", "disabled", "label"]);

      return React.createElement("div", _extends({}, props, {
        className: "checkbox-with-label ".concat(disabled ? 'disabled' : '', " ").concat(className),
        onClick: this.onClick
      }), React.createElement(Checkbox, {
        className: "checkbox-with-label__checkbox",
        checked: checked,
        disabled: disabled
      }), label ? React.createElement(Text, {
        className: "checkbox-with-label__label",
        value: label
      }) : null);
    }
  }]);

  return CheckboxWithLabel;
}(React.Component), (_applyDecoratedDescriptor(_class.prototype, "onClick", [autobind], Object.getOwnPropertyDescriptor(_class.prototype, "onClick"), _class.prototype)), _class);
CheckboxWithLabel.propTypes = {
  /**
   * Флаг, задающий активность чекбокса.
   * В случае, если чекбокс активен, к нему применяется стиль 'checked'.
   */
  checked: PropTypes.bool,

  /**
   * Функция, вызываемая при нажатии на чекбокс.
   * @param {any=} item - связанный с чекбоксом объект, переданный в качестве свойства "item".
   * <br>
   * @param {string=} name - название чекбокса, на основе заданного компоненту свойства "name".
   */
  onClick: PropTypes.func,

  /**
   * Параметр, передаваемый при вызове функции props.onClick
   */
  item: PropTypes.any,

  /**
   * Название чекбокса.
   */
  name: PropTypes.string,

  /**
   * Ярлык, отображаемый рядом с чекбоксом.
   */
  label: PropTypes.string,

  /**
   * Флаг, отключающий чекбокс.
   * В случае, если чекбокс отключен, к обертке будет применен стиль 'disabled'.
   */
  disabled: PropTypes.bool
};

export default CheckboxWithLabel;
