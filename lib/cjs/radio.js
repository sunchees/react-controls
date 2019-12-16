'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-97d959d1.js');
var React = require('react');
var React__default = _interopDefault(React);
var styleInject_es = require('./style-inject.es-dcee06b6.js');
var button = require('./button.js');
var index = require('./index-f47bf584.js');

var css = ".radio {\r\n  width: 18px;\r\n  height: 18px;\r\n  border: 1px solid #d3d3d3;\r\n  border-radius: 100%;\r\n  flex-shrink: 0;\r\n}\r\n\r\n.radio.selected {\r\n  background: #424242;\r\n  background-clip: content-box;\r\n  padding: 3px;\r\n}\r\n";
styleInject_es.styleInject(css);

var _class;
var Radio = (_class =
/*#__PURE__*/
function (_React$PureComponent) {
  _rollupPluginBabelHelpers._inherits(Radio, _React$PureComponent);

  function Radio() {
    _rollupPluginBabelHelpers._classCallCheck(this, Radio);

    return _rollupPluginBabelHelpers._possibleConstructorReturn(this, _rollupPluginBabelHelpers._getPrototypeOf(Radio).apply(this, arguments));
  }

  _rollupPluginBabelHelpers._createClass(Radio, [{
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
          props = _rollupPluginBabelHelpers._objectWithoutProperties(_this$props, ["className", "selected", "item", "onClick"]);

      return React__default.createElement(button, _rollupPluginBabelHelpers._extends({}, props, {
        className: "radio ".concat(selected ? 'selected' : '', " ").concat(className),
        onClick: this.onClick
      }));
    }
  }]);

  return Radio;
}(React__default.PureComponent), (_rollupPluginBabelHelpers._applyDecoratedDescriptor(_class.prototype, "onClick", [index.autobind], Object.getOwnPropertyDescriptor(_class.prototype, "onClick"), _class.prototype)), _class);

module.exports = Radio;
