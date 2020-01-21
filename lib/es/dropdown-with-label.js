import './_rollupPluginBabelHelpers-5be4169f.js';
import React from 'react';
import './style-inject.es-1f59c1d0.js';
import './button.js';
import './column.js';
import './index-4f87497b.js';
import './_commonjsHelpers-97e6d7b1.js';
import './_react_commonjs-external-22b61490.js';
import './content-height-scrollbar.js';
import './scrollbar.js';
import './index-9e8ed398.js';
import Dropdown from './dropdown.js';
import './text.js';
import WrapWithLabel from './wrap-with-label.js';

var DropdownWithLabel = function DropdownWithLabel(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      label = _ref.label,
      _ref$mandatory = _ref.mandatory,
      mandatory = _ref$mandatory === void 0 ? false : _ref$mandatory,
      _ref$dropdownProps = _ref.dropdownProps,
      dropdownProps = _ref$dropdownProps === void 0 ? {} : _ref$dropdownProps;
  return React.createElement(WrapWithLabel, {
    className: className,
    label: label,
    mandatory: mandatory
  }, React.createElement(Dropdown, dropdownProps));
};

export default DropdownWithLabel;
