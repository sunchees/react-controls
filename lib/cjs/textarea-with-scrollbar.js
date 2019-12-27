'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-97d959d1.js');
var React = require('react');
var React__default = _interopDefault(React);
var styleInject_es = require('./style-inject.es-dcee06b6.js');
require('./index-f47bf584.js');
require('./_commonjsHelpers-72d386ba.js');
require('./_react_commonjs-external-58b78ee1.js');
var contentHeightScrollbar = require('./content-height-scrollbar.js');
require('./scrollbar.js');
require('./index-dbbea75d.js');
var textarea = require('./textarea.js');

var css = ".textarea-with-scrollbar {\r\n  padding: 7px 10px;\r\n  border: 1px solid #d3d3d3;\r\n  border-radius: 5px;\r\n}\r\n\r\n.textarea-with-scrollbar__scrollbar.scrollbar > .scrollbar__track.horizontal {\r\n  height: 7px;\r\n  border: none;\r\n}\r\n\r\n.textarea-with-scrollbar__scrollbar.scrollbar > .scrollbar__track.vertical {\r\n  width: 7px;\r\n  border: none;\r\n}\r\n\r\n.textarea-with-scrollbar__textarea {\r\n  margin-right: 9px;\r\n  width: calc(100% - 9px);\r\n  border: unset;\r\n  padding: unset;\r\n}\r\n\r\n.textarea-with-scrollbar__textarea:focus,\r\n.textarea-with-scrollbar__textarea.error {\r\n  border: none;\r\n  box-shadow: none;\r\n}\r\n";
styleInject_es.styleInject(css);

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

module.exports = TextareaWithScrollbar;
