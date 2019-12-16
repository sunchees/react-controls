import { b as _inherits, c as _createClass, d as _applyDecoratedDescriptor, e as _classCallCheck, f as _possibleConstructorReturn, g as _getPrototypeOf, _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-5be4169f.js';
import React from 'react';
import { s as styleInject } from './style-inject.es-1f59c1d0.js';
import Button from './button.js';
import { a as autobind } from './index-4f87497b.js';

var css = ".radio {\r\n  width: 18px;\r\n  height: 18px;\r\n  border: 1px solid #d3d3d3;\r\n  border-radius: 100%;\r\n  flex-shrink: 0;\r\n}\r\n\r\n.radio.selected {\r\n  background: #424242;\r\n  background-clip: content-box;\r\n  padding: 3px;\r\n}\r\n";
styleInject(css);

var _class;
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
      if (this.props.onClick) this.props.onClick(this.props.item);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          _this$props$className = _this$props.className,
          className = _this$props$className === void 0 ? '' : _this$props$className,
          selected = _this$props.selected,
          item = _this$props.item,
          onClick = _this$props.onClick,
          props = _objectWithoutProperties(_this$props, ["className", "selected", "item", "onClick"]);

      return React.createElement(Button, _extends({}, props, {
        className: "radio ".concat(selected ? 'selected' : '', " ").concat(className),
        onClick: this.onClick
      }));
    }
  }]);

  return Radio;
}(React.PureComponent), (_applyDecoratedDescriptor(_class.prototype, "onClick", [autobind], Object.getOwnPropertyDescriptor(_class.prototype, "onClick"), _class.prototype)), _class);

export default Radio;
