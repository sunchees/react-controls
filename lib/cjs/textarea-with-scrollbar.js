'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var styleInject_es = require('./style-inject.es-4c81be79.js');
var React = require('react');
var React__default = _interopDefault(React);
var index$2 = require('./index-ca26b417.js');
require('./index-f47bf584.js');
require('./_react_commonjs-external-30e5c7b3.js');
var contentHeightScrollbar = require('./content-height-scrollbar.js');
require('./scrollbar.js');
var textarea = require('./textarea.js');

var css = ".textarea-with-scrollbar {\r\n  padding: 7px 10px;\r\n  border: 1px solid #d3d3d3;\r\n  border-radius: 5px;\r\n}\r\n\r\n.textarea-with-scrollbar__scrollbar.scrollbar > .scrollbar__track.horizontal {\r\n  height: 7px;\r\n  border: none;\r\n}\r\n\r\n.textarea-with-scrollbar__scrollbar.scrollbar > .scrollbar__track.vertical {\r\n  width: 7px;\r\n  border: none;\r\n}\r\n\r\n.textarea-with-scrollbar__textarea {\r\n  margin-right: 9px;\r\n  width: calc(100% - 9px);\r\n  border: unset;\r\n  padding: unset;\r\n}\r\n\r\n.textarea-with-scrollbar__textarea:focus,\r\n.textarea-with-scrollbar__textarea.error {\r\n  border: none;\r\n  box-shadow: none;\r\n}\r\n";
styleInject_es.styleInject(css);

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
  }, React__default.createElement(contentHeightScrollbar, styleInject_es._extends({}, scrollbarProps, {
    className: "textarea-with-scrollbar__scrollbar"
  }), React__default.createElement(textarea, styleInject_es._extends({}, textareaProps, {
    className: "textarea-with-scrollbar__textarea"
  }))));
};
TextareaWithScrollbar.propTypes = {
  /**
   * Дополнительные стили, применяемые к div-обертке компонента
   */
  className: index$2.PropTypes.string,

  /**
   * Свойства, передаваемые вложенному компоненту [ContentHeightScrollbar](#contentHeightScrollbar)
   */
  scrollbarProps: index$2.PropTypes.shape(),

  /**
   * Свойства, передаваемые вложенному компоненту [Textarea](#textarea)
   */
  textareaProps: index$2.PropTypes.shape()
};

module.exports = TextareaWithScrollbar;
