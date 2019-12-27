import './_rollupPluginBabelHelpers-5be4169f.js';
import React from 'react';
import { s as styleInject } from './style-inject.es-1f59c1d0.js';
import Column from './column.js';
import Text from './text.js';

var css = ".wrap-with-label__label {\r\n  line-height: 27px;\r\n  font-size: 12px;\r\n  color: #a7a7a7;\r\n}\r\n\r\n.wrap-with-label.mandatory > .wrap-with-label__label::after {\r\n  content: \" *\";\r\n  color: #d22c75;\r\n  font-weight: normal;\r\n}\r\n\r\n.wrap-with-label__empty-text {\r\n  line-height: 27px;\r\n}\r\n";
styleInject(css);

var WrapWithLabel = function WrapWithLabel(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      label = _ref.label,
      _ref$mandatory = _ref.mandatory,
      mandatory = _ref$mandatory === void 0 ? false : _ref$mandatory,
      children = _ref.children,
      emptyText = _ref.emptyText;
  return React.createElement(Column, {
    className: "wrap-with-label ".concat(mandatory ? 'mandatory' : '', " ").concat(className)
  }, React.createElement(Text, {
    className: "wrap-with-label__label",
    value: label
  }), React.createElement(Column, {
    className: "wrap-with-label__content"
  }, children instanceof Array && children.length ? children : children || (emptyText ? React.createElement(Text, {
    className: "wrap-with-label__empty-text",
    value: emptyText
  }) : null)));
};

export default WrapWithLabel;
