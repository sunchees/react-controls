'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-97d959d1.js');
var React = require('react');
var React__default = _interopDefault(React);
var styleInject_es = require('./style-inject.es-dcee06b6.js');
var index = require('./index-f47bf584.js');

var css = ".textarea {\r\n  outline: none;\r\n  cursor: text;\r\n  resize: none;\r\n  padding: 0;\r\n  overflow: hidden;\r\n  border: solid 1px #d3d3d3;\r\n  border-radius: 5px;\r\n  padding: 10px;\r\n  color: #696969;\r\n  font-size: 16px;\r\n  line-height: 21px;\r\n}\r\n";
styleInject_es.styleInject(css);

var _class;

var isInternetExplorer = function isInternetExplorer() {
  var browser = window.navigator.userAgent;
  return browser.indexOf('MSIE') > 0 || !!browser.match(/Trident\/7\./);
};

var KEY_CODE = {
  ENTER: 13,
  ESCAPE: 27
};

var Textarea = index.autobind(_class =
/*#__PURE__*/
function (_React$PureComponent) {
  _rollupPluginBabelHelpers._inherits(Textarea, _React$PureComponent);

  function Textarea(props) {
    var _this;

    _rollupPluginBabelHelpers._classCallCheck(this, Textarea);

    _this = _rollupPluginBabelHelpers._possibleConstructorReturn(this, _rollupPluginBabelHelpers._getPrototypeOf(Textarea).call(this, props));
    _this.input = null;
    _this.ie = isInternetExplorer();
    return _this;
  }

  _rollupPluginBabelHelpers._createClass(Textarea, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.adjustHeight(0);
    }
  }, {
    key: "onKeyDown",
    value: function onKeyDown(e) {
      if (e.keyCode === KEY_CODE.ENTER) if (!e.shiftKey && this.props.onEnterPress) {
        e.preventDefault();
        this.props.onEnterPress(this.input.value);
      }
      if (this.props.onKeyDown) this.props.onKeyDown(e);
    }
  }, {
    key: "onPaste",
    value: function onPaste(e) {
      var clipboardTextData = this.ie ? window.clipboardData.getData('Text') : e.clipboardData.getData('text/plain');

      if (!(clipboardTextData && clipboardTextData.length !== 0) && !this.ie && this.props.onClipboardFilePaste) {
        e.preventDefault();
        var clipboardItems = e.clipboardData.items;

        for (var i = 0; i < clipboardItems.length; i++) {
          if (clipboardItems[i].kind == 'file') {
            var file = clipboardItems[i].getAsFile();
            this.props.onClipboardFilePaste([file]);
            break;
          }
        }
      }
    }
  }, {
    key: "onChange",
    value: function onChange() {
      this.adjustHeight();
      if (this.props.onChange) this.props.onChange(this.input.value, this.props.name);
    }
  }, {
    key: "setInputRef",
    value: function setInputRef(input) {
      this.input = input;
      if (this.props.forwardRef) this.props.forwardRef(input);
    }
  }, {
    key: "getValue",
    value: function getValue() {
      return this.input.value;
    }
  }, {
    key: "setValue",
    value: function setValue(value) {
      this.input.value = value || '';
      this.adjustHeight();
    }
  }, {
    key: "adjustHeight",
    value: function adjustHeight() {
      var prevRows = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.input.rows;
      var styles = getComputedStyle(this.input);
      var lineHeight = parseInt(styles.getPropertyValue('line-height')),
          minHeight = parseInt(styles.getPropertyValue('min-height'));
      var minRows = Math.ceil((minHeight || lineHeight) / lineHeight);
      this.input.rows = minRows;
      var rows = Math.ceil((this.input.scrollHeight - (minHeight || lineHeight)) / lineHeight);
      this.input.rows = minRows + rows;
      if (prevRows !== this.input.rows && this.props.onHeightChange) this.props.onHeightChange(this.input.scrollHeight);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          _this$props$className = _this$props.className,
          className = _this$props$className === void 0 ? '' : _this$props$className,
          defaultValue = _this$props.defaultValue,
          placeholder = _this$props.placeholder,
          disabled = _this$props.disabled,
          autoFocus = _this$props.autoFocus,
          onKeyDown = _this$props.onKeyDown,
          onEnterPress = _this$props.onEnterPress,
          onChange = _this$props.onChange,
          onHeightChange = _this$props.onHeightChange,
          onClipboardFilePaste = _this$props.onClipboardFilePaste,
          name = _this$props.name,
          forwardRef = _this$props.forwardRef,
          props = _rollupPluginBabelHelpers._objectWithoutProperties(_this$props, ["className", "defaultValue", "placeholder", "disabled", "autoFocus", "onKeyDown", "onEnterPress", "onChange", "onHeightChange", "onClipboardFilePaste", "name", "forwardRef"]);

      return React__default.createElement("textarea", _rollupPluginBabelHelpers._extends({}, props, {
        className: "textarea ".concat(className),
        ref: this.setInputRef,
        placeholder: placeholder,
        defaultValue: defaultValue,
        autoFocus: autoFocus,
        onKeyDown: this.onKeyDown,
        onPaste: this.onPaste,
        onClick: this.onClick,
        onChange: this.onChange,
        rows: 1,
        disabled: disabled
      }));
    }
  }]);

  return Textarea;
}(React__default.PureComponent)) || _class;

module.exports = Textarea;
