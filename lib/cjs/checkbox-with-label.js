'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-a036f66d.js');
var React = require('react');
var React__default = _interopDefault(React);
require('./button.js');
var index = require('./index-ca26b417.js');
var text = require('./text.js');
var index$1 = require('./index-f47bf584.js');
var checkbox = require('./checkbox.js');

var _class;
/**
 * Базовый компонент чекбокса с ярлыком.
 */

var CheckboxWithLabel = (_class =
/*#__PURE__*/
function (_React$Component) {
  _rollupPluginBabelHelpers._inherits(CheckboxWithLabel, _React$Component);

  function CheckboxWithLabel() {
    _rollupPluginBabelHelpers._classCallCheck(this, CheckboxWithLabel);

    return _rollupPluginBabelHelpers._possibleConstructorReturn(this, _rollupPluginBabelHelpers._getPrototypeOf(CheckboxWithLabel).apply(this, arguments));
  }

  _rollupPluginBabelHelpers._createClass(CheckboxWithLabel, [{
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
          props = _rollupPluginBabelHelpers._objectWithoutProperties(_this$props, ["className", "checked", "item", "name", "onClick", "disabled", "label"]);

      return React__default.createElement("div", _rollupPluginBabelHelpers._extends({}, props, {
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
}(React__default.Component), (_rollupPluginBabelHelpers._applyDecoratedDescriptor(_class.prototype, "onClick", [index$1.autobind], Object.getOwnPropertyDescriptor(_class.prototype, "onClick"), _class.prototype)), _class);
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
