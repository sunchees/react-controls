import { b as _inherits, c as _createClass, e as _classCallCheck, f as _possibleConstructorReturn, g as _getPrototypeOf, _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-5be4169f.js';
import React from 'react';
import { s as styleInject } from './style-inject.es-1f59c1d0.js';
import { a as autobind } from './index-4f87497b.js';

var css = ".textarea {\r\n  outline: none;\r\n  cursor: text;\r\n  resize: none;\r\n  padding: 0;\r\n  overflow: hidden;\r\n  border: solid 1px #d3d3d3;\r\n  border-radius: 5px;\r\n  padding: 10px;\r\n  color: #696969;\r\n  font-size: 16px;\r\n  line-height: 21px;\r\n}\r\n";
styleInject(css);

var _class;

var isInternetExplorer = function isInternetExplorer() {
  var browser = window.navigator.userAgent;
  return browser.indexOf('MSIE') > 0 || !!browser.match(/Trident\/7\./);
};

var KEY_CODE = {
  ENTER: 13,
  ESCAPE: 27
};

var Textarea = autobind(_class =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Textarea, _React$PureComponent);

  function Textarea(props) {
    var _this;

    _classCallCheck(this, Textarea);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Textarea).call(this, props));
    _this.input = null;
    _this.ie = isInternetExplorer();
    return _this;
  }

  _createClass(Textarea, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.adjustHeight(0);
    }
  }, {
    key: "onKeyDown",
    value: function onKeyDown(e) {
      if (this.props.onKeyDown) this.props.onKeyDown(e);

      if (e.keyCode == KEY_CODE.ENTER && this.props.onEnterPress && !e.shiftKey) {
        e.preventDefault();
        this.props.onEnterPress(this.value, this.props.name);
        if (this.props.blurOnEnter) document.activeElement.blur();
      }

      if (e.keyCode == KEY_CODE.ESCAPE && this.props.onEscapeKeyPress) {
        e.preventDefault();
        this.props.onEscapeKeyPress(this.value, this.props.name);
      }
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
            this.props.onClipboardFilePaste([file], this.props.name);
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
    key: "focus",
    value: function focus() {
      this.input.focus();
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
          onKeyDown = _this$props.onKeyDown,
          onEnterPress = _this$props.onEnterPress,
          onChange = _this$props.onChange,
          onHeightChange = _this$props.onHeightChange,
          onClipboardFilePaste = _this$props.onClipboardFilePaste,
          name = _this$props.name,
          forwardRef = _this$props.forwardRef,
          props = _objectWithoutProperties(_this$props, ["className", "onKeyDown", "onEnterPress", "onChange", "onHeightChange", "onClipboardFilePaste", "name", "forwardRef"]);

      return React.createElement("textarea", _extends({}, props, {
        className: "textarea ".concat(className),
        ref: this.setInputRef,
        onKeyDown: this.onKeyDown,
        onPaste: this.onPaste,
        onChange: this.onChange,
        rows: 1
      }));
    }
  }]);

  return Textarea;
}(React.PureComponent)) || _class;

export default Textarea;
