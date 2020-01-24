import './_rollupPluginBabelHelpers-5be4169f.js';
import React from 'react';
import './style-inject.es-1f59c1d0.js';
import './index-4f87497b.js';
import './_commonjsHelpers-97e6d7b1.js';
import './_react_commonjs-external-22b61490.js';
import './column.js';
import './text.js';
import WrapWithLabel from './wrap-with-label.js';
import Input from './input.js';

var InputWithLabel = function InputWithLabel(_ref) {
  var className = _ref.className,
      label = _ref.label,
      _ref$mandatory = _ref.mandatory,
      mandatory = _ref$mandatory === void 0 ? false : _ref$mandatory,
      _ref$inputProps = _ref.inputProps,
      inputProps = _ref$inputProps === void 0 ? {} : _ref$inputProps;
  return React.createElement(WrapWithLabel, {
    className: className,
    label: label,
    mandatory: mandatory
  }, React.createElement(Input, inputProps));
};

export default InputWithLabel;
