import './_rollupPluginBabelHelpers-5be4169f.js';
import React from 'react';
import './style-inject.es-1f59c1d0.js';
import './column.js';
import './index-4f87497b.js';
import './text.js';
import WrapWithLabel from './wrap-with-label.js';
import Textarea from './textarea.js';

var TextareaWithLabel = function TextareaWithLabel(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      label = _ref.label,
      mandatory = _ref.mandatory,
      textareaProps = _ref.textareaProps;
  return React.createElement(WrapWithLabel, {
    className: className,
    label: label,
    mandatory: mandatory
  }, React.createElement(Textarea, textareaProps));
};

export default TextareaWithLabel;
