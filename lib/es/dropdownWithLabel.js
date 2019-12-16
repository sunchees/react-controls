import './_rollupPluginBabelHelpers-5be4169f.js';
import React from 'react';
import './style-inject.es-1f59c1d0.js';
import './button.js';
import './column.js';
import './index-4f87497b.js';
import Dropdown from './dropdown.js';
import './_commonjsHelpers-17042db9.js';
import './_react_commonjs-external-22b61490.js';
import './contentHeightScrollbar.js';
import './scrollbar.js';
import './index-c01393f8.js';
import './text.js';
import WrapWithLabel from './wrapWithLabel.js';

var DropdownWithLabel = function DropdownWithLabel(_ref) {
  var className = _ref.className,
      label = _ref.label,
      dropdownProps = _ref.dropdownProps,
      _ref$mandatory = _ref.mandatory,
      mandatory = _ref$mandatory === void 0 ? false : _ref$mandatory;
  return React.createElement(WrapWithLabel, {
    className: className,
    label: label,
    mandatory: mandatory
  }, React.createElement(Dropdown, dropdownProps));
};

export default DropdownWithLabel;
