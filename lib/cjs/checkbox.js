'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var styleInject_es = require('./style-inject.es-4c81be79.js');
var React = require('react');
var React__default = _interopDefault(React);
var button = require('./button.js');
var index = require('./index-ca26b417.js');
var index$1 = require('./index-f47bf584.js');

var css = ".checkbox {\r\n  width: 20px;\r\n  height: 20px;\r\n  border: 1px solid #d3d3d3;\r\n  flex-shrink: 0;\r\n  border-radius: 2px;\r\n  font-size: 14px;\r\n  padding: unset;\r\n}\r\n\r\n.checkbox.checked {\r\n  color: #424242;\r\n}\r\n";
styleInject_es.styleInject(css);

var _class;
/**
 * Базовый компонент чекбокса.
 */

var Checkbox = (_class =
/*#__PURE__*/
function (_React$PureComponent) {
  styleInject_es._inherits(Checkbox, _React$PureComponent);

  function Checkbox() {
    styleInject_es._classCallCheck(this, Checkbox);

    return styleInject_es._possibleConstructorReturn(this, styleInject_es._getPrototypeOf(Checkbox).apply(this, arguments));
  }

  styleInject_es._createClass(Checkbox, [{
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
          props = styleInject_es._objectWithoutProperties(_this$props, ["className", "checked", "item", "name", "onClick"]);

      return React__default.createElement(button, styleInject_es._extends({}, props, {
        className: "checkbox ".concat(checked ? 'checked' : '', " ").concat(className),
        onClick: this.onClick
      }), checked ? '✔' : '');
    }
  }]);

  return Checkbox;
}(React__default.PureComponent), (styleInject_es._applyDecoratedDescriptor(_class.prototype, "onClick", [index$1.autobind], Object.getOwnPropertyDescriptor(_class.prototype, "onClick"), _class.prototype)), _class);
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
