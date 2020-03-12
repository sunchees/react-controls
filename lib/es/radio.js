import { b as _inherits, c as _createClass, d as _applyDecoratedDescriptor, e as _classCallCheck, f as _possibleConstructorReturn, g as _getPrototypeOf, _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-4576a74b.js';
import React from 'react';
import Button from './button.js';
import { P as PropTypes } from './index-aba1d7fe.js';
import { a as autobind } from './index-4f87497b.js';

var _class;
/**
 * Базовый компонент радиокнопки.
 * Основан на компоненте Button с добавлением стилей и логики для работы в формате радиокнопки.
 */

var Radio = (_class =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Radio, _React$PureComponent);

  function Radio() {
    _classCallCheck(this, Radio);

    return _possibleConstructorReturn(this, _getPrototypeOf(Radio).apply(this, arguments));
  }

  _createClass(Radio, [{
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
          props = _objectWithoutProperties(_this$props, ["className", "selected", "item", "name", "onClick"]);

      return React.createElement(Button, _extends({}, props, {
        className: "radio ".concat(selected ? 'selected' : '', " ").concat(className),
        onClick: this.onClick
      }));
    }
  }]);

  return Radio;
}(React.PureComponent), (_applyDecoratedDescriptor(_class.prototype, "onClick", [autobind], Object.getOwnPropertyDescriptor(_class.prototype, "onClick"), _class.prototype)), _class);
Radio.propTypes = {
  /**
   * Флаг, задающий активность радиокнопки.
   * В случае, если радиокнопка активна, к ней применяется стиль 'selected'.
   */
  selected: PropTypes.bool,

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
  name: PropTypes.string
};

export default Radio;
