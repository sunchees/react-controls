import { s as styleInject, b as _inherits, c as _createClass, d as _applyDecoratedDescriptor, e as _classCallCheck, f as _possibleConstructorReturn, g as _getPrototypeOf, _ as _objectWithoutProperties, a as _extends } from './style-inject.es-4d895b0c.js';
import React from 'react';
import './button.js';
import { P as PropTypes } from './index-aba1d7fe.js';
import Text from './text.js';
import { a as autobind } from './index-4f87497b.js';
import Radio from './radio.js';

var css = ".radio-with-label {\r\n  display: flex;\r\n  align-items: center;\r\n  cursor: pointer;\r\n}\r\n\r\n.radio-with-label__label {\r\n  margin-left: 5px;\r\n  line-height: 20px;\r\n  font-size: 14px;\r\n  white-space: pre-wrap;\r\n}\r\n\r\n.radio-with-label.disabled {\r\n  cursor: default;\r\n}\r\n\r\n.radio-with-label.disabled > .radio-with-label__label {\r\n  opacity: 0.5;\r\n}";
styleInject(css);

var _class;
/**
 * Базовый компонент радиокнопки с ярлыком.
 */

var RadioWithLabel = (_class =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(RadioWithLabel, _React$PureComponent);

  function RadioWithLabel() {
    _classCallCheck(this, RadioWithLabel);

    return _possibleConstructorReturn(this, _getPrototypeOf(RadioWithLabel).apply(this, arguments));
  }

  _createClass(RadioWithLabel, [{
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
          props = _objectWithoutProperties(_this$props, ["className", "selected", "item", "name", "onClick", "disabled", "label"]);

      return React.createElement("div", _extends({}, props, {
        className: "radio-with-label ".concat(disabled ? 'disabled' : '', " ").concat(className),
        onClick: this.onClick
      }), React.createElement(Radio, {
        className: "radio-with-label__radio",
        selected: selected,
        disabled: disabled
      }), label ? React.createElement(Text, {
        className: "radio-with-label__label",
        value: label
      }) : null);
    }
  }]);

  return RadioWithLabel;
}(React.PureComponent), (_applyDecoratedDescriptor(_class.prototype, "onClick", [autobind], Object.getOwnPropertyDescriptor(_class.prototype, "onClick"), _class.prototype)), _class);
RadioWithLabel.propTypes = {
  /**
   * Флаг, задающий активность радиокнопки.
   * В случае, если радиокнопка активна, к ней применяется стиль 'selected'.
   */
  checked: PropTypes.bool,

  /**
   * Функция, вызываемая при нажатии на радиокнопку.
   * @param {any=} item - связанный с радиокнопкой объект, переданный в качестве свойства "item".
   * <br>
   * @param {string=} name - название радиокнопки, на основе заданного компоненту свойства "name".
   */
  onClick: PropTypes.func,

  /**
   * Параметр, передаваемый при вызове функции props.onClick
   */
  item: PropTypes.any,

  /**
   * Название радиокнопки.
   */
  name: PropTypes.string,

  /**
   * Ярлык, отображаемый рядом с радиокнопкой.
   */
  label: PropTypes.string,

  /**
   * Флаг, отключающий радиокнопку.
   * В случае, если радиокнопка отключена, к обертке будет применен стиль 'disabled'.
   */
  disabled: PropTypes.bool
};

export default RadioWithLabel;
