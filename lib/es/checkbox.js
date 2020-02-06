import { s as styleInject, b as _inherits, c as _createClass, d as _applyDecoratedDescriptor, e as _classCallCheck, f as _possibleConstructorReturn, g as _getPrototypeOf, _ as _objectWithoutProperties, a as _extends } from './style-inject.es-4d895b0c.js';
import React from 'react';
import Button from './button.js';
import { P as PropTypes } from './index-aba1d7fe.js';
import { a as autobind } from './index-4f87497b.js';

var css = ".checkbox {\r\n  width: 20px;\r\n  height: 20px;\r\n  border: 1px solid #d3d3d3;\r\n  flex-shrink: 0;\r\n  border-radius: 2px;\r\n  font-size: 14px;\r\n  padding: unset;\r\n}\r\n\r\n.checkbox.checked {\r\n  color: #424242;\r\n}\r\n";
styleInject(css);

var _class;
/**
 * Базовый компонент чекбокса.
 */

var Checkbox = (_class =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Checkbox, _React$PureComponent);

  function Checkbox() {
    _classCallCheck(this, Checkbox);

    return _possibleConstructorReturn(this, _getPrototypeOf(Checkbox).apply(this, arguments));
  }

  _createClass(Checkbox, [{
    key: "onClick",
    value: function onClick() {
      if (this.props.onClick) this.props.onClick(this.props.item, this.props.name);
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
          props = _objectWithoutProperties(_this$props, ["className", "checked", "item", "name", "onClick"]);

      return React.createElement(Button, _extends({}, props, {
        className: "checkbox ".concat(checked ? 'checked' : '', " ").concat(className),
        onClick: this.onClick
      }), checked ? '✔' : '');
    }
  }]);

  return Checkbox;
}(React.PureComponent), (_applyDecoratedDescriptor(_class.prototype, "onClick", [autobind], Object.getOwnPropertyDescriptor(_class.prototype, "onClick"), _class.prototype)), _class);
Checkbox.propTypes = {
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
  name: PropTypes.string
};

export default Checkbox;
