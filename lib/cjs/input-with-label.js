'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

require('./_rollupPluginBabelHelpers-97d959d1.js');
var React = require('react');
var React__default = _interopDefault(React);
require('./style-inject.es-dcee06b6.js');
require('./index-f47bf584.js');
require('./_commonjsHelpers-72d386ba.js');
require('./_react_commonjs-external-58b78ee1.js');
require('./column.js');
require('./text.js');
var wrapWithLabel = require('./wrap-with-label.js');
var input = require('./input.js');

var InputWithLabel = function InputWithLabel(_ref) {
  var className = _ref.className,
      label = _ref.label,
      _ref$mandatory = _ref.mandatory,
      mandatory = _ref$mandatory === void 0 ? false : _ref$mandatory,
      _ref$inputProps = _ref.inputProps,
      inputProps = _ref$inputProps === void 0 ? {} : _ref$inputProps;
  return React__default.createElement(wrapWithLabel, {
    className: className,
    label: label,
    mandatory: mandatory
  }, React__default.createElement(input, inputProps));
};

module.exports = InputWithLabel;
