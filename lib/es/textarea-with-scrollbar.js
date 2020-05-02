import { a as _extends } from './_rollupPluginBabelHelpers-4576a74b.js';
import React from 'react';
import { P as PropTypes } from './index-3248c44c.js';
import './index-4f87497b.js';
import './_react_commonjs-external-132f0747.js';
import ContentHeightScrollbar from './content-height-scrollbar.js';
import './scrollbar.js';
import Textarea from './textarea.js';

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
