'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

require('./_rollupPluginBabelHelpers-a036f66d.js');
var React = require('react');
var React__default = _interopDefault(React);
require('./button.js');
var index = require('./index-ca26b417.js');
require('./text.js');
require('./index-f47bf584.js');
require('./column.js');
require('./isEqual-17e94425.js');
require('./_react_commonjs-external-30e5c7b3.js');
require('./content-height-scrollbar.js');
require('./scrollbar.js');
var wrapWithLabel = require('./wrap-with-label.js');
var dropdown = require('./dropdown.js');

/**
 * Компонент выпадающего списка с добавленным заголовком.
 * Представляет собой компонент [Dropdown](/#dropdown), обернутый в компонент [WrapWithLabel](/#wrapwithlabel).
 */

var DropdownWithLabel = function DropdownWithLabel(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      label = _ref.label,
      _ref$mandatory = _ref.mandatory,
      mandatory = _ref$mandatory === void 0 ? false : _ref$mandatory,
      _ref$dropdownProps = _ref.dropdownProps,
      dropdownProps = _ref$dropdownProps === void 0 ? {} : _ref$dropdownProps;
  return React__default.createElement(wrapWithLabel, {
    className: className,
    label: label,
    mandatory: mandatory
  }, React__default.createElement(dropdown, dropdownProps));
};
DropdownWithLabel.propTypes = {
  /**
   * Текст заголовка
   */
  label: index.PropTypes.string,

  /**
   * Обязательность контента внутри обертки.
   * <br>
   * true - Добавляет класс 'mandatory' к компоненту обертки
   */
  mandatory: index.PropTypes.bool,

  /**
   * Свойства компонента [Dropdown](/#dropdown).
   */
  dropdownProps: index.PropTypes.shape()
};

module.exports = DropdownWithLabel;
