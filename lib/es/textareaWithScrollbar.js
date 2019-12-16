import { a as _extends } from './_rollupPluginBabelHelpers-5be4169f.js';
import React from 'react';
import { s as styleInject } from './style-inject.es-1f59c1d0.js';
import './index-4f87497b.js';
import './_commonjsHelpers-17042db9.js';
import './_react_commonjs-external-22b61490.js';
import ContentHeightScrollbar from './contentHeightScrollbar.js';
import './scrollbar.js';
import './index-c01393f8.js';
import Textarea from './textarea.js';

var css = ".textarea-with-scrollbar {\r\n  padding: 7px 10px;\r\n  border: 1px solid #d3d3d3;\r\n  border-radius: 5px;\r\n}\r\n\r\n.textarea-with-scrollbar__scrollbar.scrollbar > .scrollbar__track.horizontal {\r\n  height: 7px;\r\n  border: none;\r\n}\r\n\r\n.textarea-with-scrollbar__scrollbar.scrollbar > .scrollbar__track.vertical {\r\n  width: 7px;\r\n  border: none;\r\n}\r\n\r\n.textarea-with-scrollbar__textarea {\r\n  margin-right: 9px;\r\n  width: calc(100% - 9px);\r\n  border: unset;\r\n  padding: unset;\r\n}\r\n\r\n.textarea-with-scrollbar__textarea:focus,\r\n.textarea-with-scrollbar__textarea.error {\r\n  border: none;\r\n  box-shadow: none;\r\n}\r\n";
styleInject(css);

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

export default TextareaWithScrollbar;
