'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-a036f66d.js');
var React = require('react');
var React__default = _interopDefault(React);
var index$1 = require('./index-54c38a10.js');
require('./index-f47bf584.js');
require('./_react_commonjs-external-30e5c7b3.js');
var contentHeightScrollbar = require('./content-height-scrollbar.js');
require('./scrollbar.js');
var textarea = require('./textarea.js');

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
  return React__default.createElement("div", {
    className: "textarea-with-scrollbar ".concat(className)
  }, React__default.createElement(contentHeightScrollbar, _rollupPluginBabelHelpers._extends({}, scrollbarProps, {
    className: "textarea-with-scrollbar__scrollbar"
  }), React__default.createElement(textarea, _rollupPluginBabelHelpers._extends({}, textareaProps, {
    className: "textarea-with-scrollbar__textarea"
  }))));
};
TextareaWithScrollbar.propTypes = {
  /**
   * Дополнительные стили, применяемые к div-обертке компонента
   */
  className: index$1.PropTypes.string,

  /**
   * Свойства, передаваемые вложенному компоненту [ContentHeightScrollbar](#contentHeightScrollbar)
   */
  scrollbarProps: index$1.PropTypes.shape(),

  /**
   * Свойства, передаваемые вложенному компоненту [Textarea](#textarea)
   */
  textareaProps: index$1.PropTypes.shape()
};

module.exports = TextareaWithScrollbar;
