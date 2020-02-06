import { s as styleInject, a as _extends } from './style-inject.es-4d895b0c.js';
import React from 'react';
import { P as PropTypes } from './index-aba1d7fe.js';
import './index-4f87497b.js';
import './_react_commonjs-external-132f0747.js';
import ContentHeightScrollbar from './content-height-scrollbar.js';
import './scrollbar.js';
import Textarea from './textarea.js';

var css = ".textarea-with-scrollbar {\r\n  padding: 7px 10px;\r\n  border: 1px solid #d3d3d3;\r\n  border-radius: 5px;\r\n}\r\n\r\n.textarea-with-scrollbar__scrollbar.scrollbar > .scrollbar__track.horizontal {\r\n  height: 7px;\r\n  border: none;\r\n}\r\n\r\n.textarea-with-scrollbar__scrollbar.scrollbar > .scrollbar__track.vertical {\r\n  width: 7px;\r\n  border: none;\r\n}\r\n\r\n.textarea-with-scrollbar__textarea {\r\n  margin-right: 9px;\r\n  width: calc(100% - 9px);\r\n  border: unset;\r\n  padding: unset;\r\n}\r\n\r\n.textarea-with-scrollbar__textarea:focus,\r\n.textarea-with-scrollbar__textarea.error {\r\n  border: none;\r\n  box-shadow: none;\r\n}\r\n";
styleInject(css);

/**
 * Компонент многострочного поля ввода с добавленным скроллбаром.
 * <br>
 * Представляет собой компонент [Textarea](#textarea), оберутый в компонент [ContentHeightScrollbar](#contentHeightScrollbar).
 */

var TextareaWithScrollbar = function TextareaWithScrollbar(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$scrollbarProps = _ref.scrollbarProps,
      scrollbarProps = _ref$scrollbarProps === void 0 ? {} : _ref$scrollbarProps,
      _ref$textareaProps = _ref.textareaProps,
      textareaProps = _ref$textareaProps === void 0 ? {} : _ref$textareaProps;
  return React.createElement("div", {
    className: "textarea-with-scrollbar ".concat(className)
  }, React.createElement(ContentHeightScrollbar, _extends({}, scrollbarProps, {
    className: "textarea-with-scrollbar__scrollbar"
  }), React.createElement(Textarea, _extends({}, textareaProps, {
    className: "textarea-with-scrollbar__textarea"
  }))));
};
TextareaWithScrollbar.propTypes = {
  /**
   * Дополнительные стили, применяемые к div-обертке компонента
   */
  className: PropTypes.string,

  /**
   * Свойства, передаваемые вложенному компоненту [ContentHeightScrollbar](#contentHeightScrollbar)
   */
  scrollbarProps: PropTypes.shape(),

  /**
   * Свойства, передаваемые вложенному компоненту [Textarea](#textarea)
   */
  textareaProps: PropTypes.shape()
};

export default TextareaWithScrollbar;
