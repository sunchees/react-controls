import './_rollupPluginBabelHelpers-5be4169f.js';
import React from 'react';
import './style-inject.es-1f59c1d0.js';
import './column.js';
import './index-4f87497b.js';
import './_commonjsHelpers-17042db9.js';
import './_react_commonjs-external-22b61490.js';
import './contentHeightScrollbar.js';
import './scrollbar.js';
import './index-c01393f8.js';
import './text.js';
import WrapWithLabel from './wrapWithLabel.js';
import './textarea.js';
import TextareaWithScrollbar from './textareaWithScrollbar.js';

var TextareaWithScrollbarAndLabel = function TextareaWithScrollbarAndLabel(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      label = _ref.label,
      mandatory = _ref.mandatory,
      textareaProps = _ref.textareaProps;
  return React.createElement(WrapWithLabel, {
    className: className,
    label: label,
    mandatory: mandatory
  }, React.createElement(TextareaWithScrollbar, textareaProps));
};

export default TextareaWithScrollbarAndLabel;
