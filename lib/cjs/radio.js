'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var styleInject_es = require('./style-inject.es-4c81be79.js');
var React = require('react');
var React__default = _interopDefault(React);
var button = require('./button.js');
var index = require('./index-ca26b417.js');
var index$1 = require('./index-f47bf584.js');

var css = ".radio {\r\n  width: 18px;\r\n  height: 18px;\r\n  border: 1px solid #d3d3d3;\r\n  border-radius: 100%;\r\n  flex-shrink: 0;\r\n}\r\n\r\n.radio.selected {\r\n  background: #424242;\r\n  background-clip: content-box;\r\n  padding: 3px;\r\n}\r\n";
styleInject_es.styleInject(css);

var _class;
/**
 * Базовый компонент радиокнопки.
 * Основан на компоненте Button с добавлением стилей и логики для работы в формате радиокнопки.
 */

var Radio = (_class =
/*#__PURE__*/
function (_React$PureComponent) {
  styleInject_es._inherits(Radio, _React$PureComponent);

  function Radio() {
    styleInject_es._classCallCheck(this, Radio);

    return styleInject_es._possibleConstructorReturn(this, styleInject_es._getPrototypeOf(Radio).apply(this, arguments));
  }

  styleInject_es._createClass(Radio, [{
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
          selected = _this$props.selected,
          item = _this$props.item,
          name = _this$props.name,
          onClick = _this$props.onClick,
          props = styleInject_es._objectWithoutProperties(_this$props, ["className", "selected", "item", "name", "onClick"]);

      return React__default.createElement(button, styleInject_es._extends({}, props, {
        className: "radio ".concat(selected ? 'selected' : '', " ").concat(className),
        onClick: this.onClick
      }));
    }
  }]);

  return Radio;
}(React__default.PureComponent), (styleInject_es._applyDecoratedDescriptor(_class.prototype, "onClick", [index$1.autobind], Object.getOwnPropertyDescriptor(_class.prototype, "onClick"), _class.prototype)), _class);
Radio.propTypes = {
  /**
   * Флаг, задающий активность радиокнопки.
   * В случае, если радиокнопка активна, к ней применяется стиль 'selected'.
   */
  selected: index.PropTypes.bool,

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
  name: index.PropTypes.string
};

module.exports = Radio;
