'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

require('./_rollupPluginBabelHelpers-97d959d1.js');
var React = require('react');
var React__default = _interopDefault(React);
require('./style-inject.es-dcee06b6.js');
require('./column.js');
require('./index-f47bf584.js');
require('./text.js');
var wrapWithLabel = require('./wrapWithLabel.js');
var textarea = require('./textarea.js');

var TextareaWithLabel = function TextareaWithLabel(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      label = _ref.label,
      mandatory = _ref.mandatory,
      textareaProps = _ref.textareaProps;
  return React__default.createElement(wrapWithLabel, {
    className: className,
    label: label,
    mandatory: mandatory
  }, React__default.createElement(textarea, textareaProps));
};

module.exports = TextareaWithLabel;
