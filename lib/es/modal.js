import { b as _inherits, c as _createClass, d as _applyDecoratedDescriptor, e as _classCallCheck, f as _possibleConstructorReturn, g as _getPrototypeOf } from './_rollupPluginBabelHelpers-4576a74b.js';
import React from 'react';
import Button from './button.js';
import { P as PropTypes } from './index-1e9a47a9.js';
import Text from './text.js';
import { a as autobind } from './index-4f87497b.js';

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
  _inherits(Modal, _React$Component);

  function Modal() {
    _classCallCheck(this, Modal);

    return _possibleConstructorReturn(this, _getPrototypeOf(Modal).apply(this, arguments));
  }

  _createClass(Modal, [{
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
      return React.createElement("div", {
        className: "modal ".concat(className),
        onMouseDown: this.onMouseDown,
        onMouseUp: this.onMouseUp
      }, React.createElement("div", {
        className: "modal__wrap"
      }, header ? React.createElement("div", {
        className: "modal__header"
      }, React.createElement(Text, {
        className: "modal__header__text",
        value: header
      }), onClose ? React.createElement(Button, {
        className: "modal__header__close-button",
        onClick: onClose
      }, "\u2715") : null) : null, React.createElement("div", {
        className: "modal__content ".concat(header ? 'with-header' : '')
      }, children)));
    }
  }]);

  return Modal;
}(React.Component), (_applyDecoratedDescriptor(_class.prototype, "onMouseDown", [autobind], Object.getOwnPropertyDescriptor(_class.prototype, "onMouseDown"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "onMouseUp", [autobind], Object.getOwnPropertyDescriptor(_class.prototype, "onMouseUp"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "onKeyDown", [autobind], Object.getOwnPropertyDescriptor(_class.prototype, "onKeyDown"), _class.prototype)), _class);
Modal.propTypes = {
  /**
   * Обработчик события нажатия клавиши при открытом модальном окне.
   * @param {Event} e - событие нажатия на клавишу
   */
  onKeyDown: PropTypes.func,

  /**
   * Функция, вызываемая при нажатии пользователем клавиши Escape, нажатии на кнопку закрытия модального окна (при ее наличии), либо при клике за пределами модального окна.
   */
  onClose: PropTypes.func,

  /**
   * Текст заголовка модального окна
   */
  header: PropTypes.string
};
Modal.defaultProps = {
  className: ''
};

export default Modal;
