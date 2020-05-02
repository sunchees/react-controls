'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-a036f66d.js');
var React = require('react');
var React__default = _interopDefault(React);
var button = require('./button.js');
var index = require('./index-54c38a10.js');
var index$1 = require('./index-f47bf584.js');

var _class;
/**
 * Базовый компонент чекбокса.
 */

var Checkbox = (_class =
/*#__PURE__*/
function (_React$PureComponent) {
  _rollupPluginBabelHelpers._inherits(Checkbox, _React$PureComponent);

  function Checkbox() {
    _rollupPluginBabelHelpers._classCallCheck(this, Checkbox);

    return _rollupPluginBabelHelpers._possibleConstructorReturn(this, _rollupPluginBabelHelpers._getPrototypeOf(Checkbox).apply(this, arguments));
  }

  _rollupPluginBabelHelpers._createClass(Checkbox, [{
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
          props = _rollupPluginBabelHelpers._objectWithoutProperties(_this$props, ["className", "checked", "item", "name", "onClick"]);

      return React__default.createElement(button, _rollupPluginBabelHelpers._extends({}, props, {
        className: "checkbox ".concat(checked ? 'checked' : '', " ").concat(className),
        onClick: this.onClick
      }), checked ? '✔' : '');
    }
  }]);

  return Checkbox;
}(React__default.PureComponent), (_rollupPluginBabelHelpers._applyDecoratedDescriptor(_class.prototype, "onClick", [index$1.autobind], Object.getOwnPropertyDescriptor(_class.prototype, "onClick"), _class.prototype)), _class);
Checkbox.propTypes = {
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
  name: index.PropTypes.string
};

module.exports = Checkbox;
