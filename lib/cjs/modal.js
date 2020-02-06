'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var styleInject_es = require('./style-inject.es-4c81be79.js');
var React = require('react');
var React__default = _interopDefault(React);
var button = require('./button.js');
var index = require('./index-ca26b417.js');
var text = require('./text.js');
var index$1 = require('./index-f47bf584.js');

var css = ".modal {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 9999;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 100vw;\r\n  height: 100%;\r\n  background-color: rgba(88, 106, 141, 0.9);\r\n}\r\n\r\n.modal__wrap {\r\n  width: fit-content;\r\n  height: fit-content;\r\n  min-width: 30%;\r\n  background-color: #fff;\r\n  border-radius: 4px;\r\n  position: relative;\r\n}\r\n\r\n.modal__header {\r\n  display: flex;\r\n  padding: 20px 20px 10px 20px;\r\n  justify-content: center;\r\n  border-radius: 4px 4px 0 0;\r\n}\r\n\r\n.modal__header__header-text {\r\n  font-size: 18px;\r\n  text-align: center;\r\n}\r\n\r\n.modal__header__close-button {\r\n  font-weight: bold;\r\n  position: absolute;\r\n  top: 3px;\r\n  right: 8px;\r\n  font-size: 22px;\r\n  font-weight: bold;\r\n  width: unset;\r\n  padding: unset;\r\n  border: unset;\r\n}\r\n\r\n.modal__content {\r\n  padding: 20px;\r\n  min-height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n.modal__content.with-header {\r\n  padding: 10px 20px 20px 20px;\r\n  min-height: calc(100% - 52px);\r\n}";
styleInject_es.styleInject(css);

var _class;
var KEY_CODE = {
  ESCAPE: 27
};
/**
 * Компонент модального окна.
 * <br>
 * Подразумевается использование данного компонента на самом верхнем уровне компонентов приложения, чтобы модальное окно перекрывало остальной контент естественным образом.
 */

var Modal = (_class =
/*#__PURE__*/
function (_React$Component) {
  styleInject_es._inherits(Modal, _React$Component);

  function Modal() {
    styleInject_es._classCallCheck(this, Modal);

    return styleInject_es._possibleConstructorReturn(this, styleInject_es._getPrototypeOf(Modal).apply(this, arguments));
  }

  styleInject_es._createClass(Modal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('keydown', this.onKeyDown);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('keydown', this.onKeyDown);
    }
  }, {
    key: "onMouseDown",
    value: function onMouseDown(e) {
      this.down = e.target;
    }
  }, {
    key: "onMouseUp",
    value: function onMouseUp(e) {
      if (this.down === e.target && e.target.className === "modal ".concat(this.props.className)) if (this.props.onClose) this.props.onClose();
    }
  }, {
    key: "onKeyDown",
    value: function onKeyDown(e) {
      if (e.keyCode === KEY_CODE.ESCAPE && this.props.onClose) this.props.onClose();
      if (this.props.onKeyDown) this.props.onKeyDown(e);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          _this$props$className = _this$props.className,
          className = _this$props$className === void 0 ? '' : _this$props$className,
          header = _this$props.header,
          onClose = _this$props.onClose,
          children = _this$props.children;
      return React__default.createElement("div", {
        className: "modal ".concat(className),
        onMouseDown: this.onMouseDown,
        onMouseUp: this.onMouseUp
      }, React__default.createElement("div", {
        className: "modal__wrap"
      }, header ? React__default.createElement("div", {
        className: "modal__header"
      }, React__default.createElement(text, {
        className: "modal__header__text",
        value: header
      }), onClose ? React__default.createElement(button, {
        className: "modal__header__close-button",
        onClick: onClose
      }, "\u2715") : null) : null, React__default.createElement("div", {
        className: "modal__content ".concat(header ? 'with-header' : '')
      }, children)));
    }
  }]);

  return Modal;
}(React__default.Component), (styleInject_es._applyDecoratedDescriptor(_class.prototype, "onMouseDown", [index$1.autobind], Object.getOwnPropertyDescriptor(_class.prototype, "onMouseDown"), _class.prototype), styleInject_es._applyDecoratedDescriptor(_class.prototype, "onMouseUp", [index$1.autobind], Object.getOwnPropertyDescriptor(_class.prototype, "onMouseUp"), _class.prototype), styleInject_es._applyDecoratedDescriptor(_class.prototype, "onKeyDown", [index$1.autobind], Object.getOwnPropertyDescriptor(_class.prototype, "onKeyDown"), _class.prototype)), _class);
Modal.propTypes = {
  /**
   * Обработчик события нажатия клавиши при открытом модальном окне.
   * @param {Event} e - событие нажатия на клавишу
   */
  onKeyDown: index.PropTypes.func,

  /**
   * Функция, вызываемая при нажатии пользователем клавиши Escape, нажатии на кнопку закрытия модального окна (при ее наличии), либо при клике за пределами модального окна.
   */
  onClose: index.PropTypes.func,

  /**
   * Текст заголовка модального окна
   */
  header: index.PropTypes.string
};
Modal.defaultProps = {
  className: ''
};

module.exports = Modal;
