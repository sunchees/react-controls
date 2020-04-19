'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-a036f66d.js');
var React = require('react');
var React__default = _interopDefault(React);
var index$2 = require('./index-ca26b417.js');
var index$1 = require('./index-f47bf584.js');

var _class;

var isInternetExplorer = function isInternetExplorer() {
  var browser = window.navigator.userAgent;
  return browser.indexOf('MSIE') > 0 || !!browser.match(/Trident\/7\./);
};

var KEY_CODE = {
  ENTER: 13,
  ESCAPE: 27
};
/**
 * Компонент многострочного поля ввода.
 * <br>
 * Представляет собой обертку над HTML-элементом textarea с добавлением стилей и обработчиком вставки файлов из буфера обмена.
 */

var Textarea = index$1.autobind(_class =
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
      if (this.props.onKeyDown) this.props.onKeyDown(e);

      if (e.keyCode == KEY_CODE.ENTER && this.props.onEnterPress && !e.shiftKey) {
        e.preventDefault();
        this.props.onEnterPress(this.value, this.props.name);
        if (this.props.blurOnEnter) document.activeElement.blur();
      }

      if (e.keyCode == KEY_CODE.ESCAPE && this.props.onEscapeKeyPress) {
        e.preventDefault();
        this.props.onEscapePress(this.value, this.props.name);
      }
    }
  }, {
    key: "onPaste",
    value: function onPaste(e) {
      var clipboardTextData = this.ie ? window.clipboardData.getData('Text') : e.clipboardData.getData('text/plain');

      if (!(clipboardTextData && clipboardTextData.length !== 0) && !this.ie && this.props.onClipboardFilePaste) {
        e.preventDefault();
        /**
         * Почему-то файлы из буфера вытащить не удается.
         */

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
    /**
     * Возвращает текущее содержимое поля ввода
     *
     * @returns {string}
     *
     * @public
     */

  }, {
    key: "getValue",
    value: function getValue() {
      return this.input.value;
    }
    /**
     * Задает содежимое поля ввода
     * @param {string} value - новое содержимое поля ввода
     *
     * @public
     */

  }, {
    key: "setValue",
    value: function setValue(value) {
      this.input.value = value || '';
      this.adjustHeight();
    }
    /**
     * Переводит фокус (курсор) в поле ввода
     *
     * @public
     */

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
          minHeight = parseInt(styles.getPropertyValue('min-height')),
          paddingTop = parseInt(styles.getPropertyValue('padding-top')),
          paddingBottom = parseInt(styles.getPropertyValue('padding-bottom'));
      var minRows = Math.ceil(((minHeight || lineHeight) - (paddingTop + paddingBottom)) / lineHeight);
      this.input.rows = minRows;
      var rows = Math.ceil((this.input.scrollHeight - (minHeight || lineHeight) - (paddingTop + paddingBottom)) / lineHeight);
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
          onEscapePress = _this$props.onEscapePress,
          onChange = _this$props.onChange,
          onHeightChange = _this$props.onHeightChange,
          onClipboardFilePaste = _this$props.onClipboardFilePaste,
          name = _this$props.name,
          forwardRef = _this$props.forwardRef,
          props = _rollupPluginBabelHelpers._objectWithoutProperties(_this$props, ["className", "onKeyDown", "onEnterPress", "onEscapePress", "onChange", "onHeightChange", "onClipboardFilePaste", "name", "forwardRef"]);

      return React__default.createElement("textarea", _rollupPluginBabelHelpers._extends({}, props, {
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
}(React__default.PureComponent)) || _class;
Textarea.propTypes = {
  /**
   * Обработчик события нажатия на клавишу Enter в поле ввода.
   * <br>
   * @param {string} value - текущее содержимое поля ввода.
   * <br>
   * @param {string=} name - название поля ввода, на основе заданного компоненту свойства "name".
   */
  onEnterPress: index$2.PropTypes.func,

  /**
   * Убирает фокус с поля ввода при нажатии клавиши Enter.
   */
  blurOnEnter: index$2.PropTypes.bool,

  /**
   * Обработчик события нажатия на клавишу Escape в поле ввода.
   * <br>
   * @param {string} value - текущее содержимое поля ввода
   * <br>
   * @param {string=} name - название поля ввода, на основе заданного компоненту свойства "name"
   */
  onEscapePress: index$2.PropTypes.func,

  /**
   * Функция для получения ссылки на вложенный компонент.
   *
   * @param {HTMLInputElement} ref - ссылка на компонент
   */
  forwardRef: index$2.PropTypes.func,

  /**
   * Обработчик события изменения содержимого поля ввода.
   * <br>
   * @param {string} value - текущее содержимое поля ввода
   * <br>
   * @param {string=} name - название поля ввода, на основе заданного компоненту свойства "name"
   */
  onChange: index$2.PropTypes.func,

  /**
   * Название поля ввода.
   */
  name: index$2.PropTypes.string,

  /**
   * Обработчик события изменения высоты поля ввода.
   *
   * @param {number} height - новая высота поля ввода
   */
  onHeightChange: index$2.PropTypes.func,

  /**
   * Обработчик события вставки файлов в поле ввода.
   * <br>
   * @param {Array<File>} files - массив файлов
   * <br>
   * @param {string=} name - название поля ввода, на основе заданного компоненту свойства "name"
   */
  onClipboardFilePaste: index$2.PropTypes.func
};

module.exports = Textarea;
