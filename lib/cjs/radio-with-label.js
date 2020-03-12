'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-a036f66d.js');
var React = require('react');
var React__default = _interopDefault(React);
require('./button.js');
var index = require('./index-ca26b417.js');
var text = require('./text.js');
var index$1 = require('./index-f47bf584.js');
var radio = require('./radio.js');

var _class;
/**
 * Базовый компонент радиокнопки с ярлыком.
 */

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
}(React__default.PureComponent), (_rollupPluginBabelHelpers._applyDecoratedDescriptor(_class.prototype, "onClick", [index$1.autobind], Object.getOwnPropertyDescriptor(_class.prototype, "onClick"), _class.prototype)), _class);
RadioWithLabel.propTypes = {
  /**
   * Флаг, задающий активность радиокнопки.
   * В случае, если радиокнопка активна, к ней применяется стиль 'selected'.
   */
  checked: index.PropTypes.bool,

  /**
   * Функция, вызываемая при нажатии на радиокнопку.
   * @param {any=} item - связанный с радиокнопкой объект, переданный в качестве свойства "item".
   * <br>
   * @param {string=} name - название радиокнопки, на основе заданного компоненту свойства "name".
   */
  onClick: index.PropTypes.func,

  /**
   * Параметр, передаваемый при вызове функции props.onClick
   */
  item: index.PropTypes.any,

  /**
   * Название радиокнопки.
   */
  name: index.PropTypes.string,

  /**
   * Ярлык, отображаемый рядом с радиокнопкой.
   */
  label: index.PropTypes.string,

  /**
   * Флаг, отключающий радиокнопку.
   * В случае, если радиокнопка отключена, к обертке будет применен стиль 'disabled'.
   */
  disabled: index.PropTypes.bool
};

module.exports = RadioWithLabel;
