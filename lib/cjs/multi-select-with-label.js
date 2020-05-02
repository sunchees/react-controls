'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

require('./_rollupPluginBabelHelpers-a036f66d.js');
var React = require('react');
var React__default = _interopDefault(React);
require('./button.js');
var index = require('./index-54c38a10.js');
require('./text.js');
require('./index-f47bf584.js');
require('./column.js');
require('./isEqual-0bda518f.js');
require('./_react_commonjs-external-30e5c7b3.js');
require('./input.js');
require('./content-height-scrollbar.js');
require('./scrollbar.js');
require('./combo-box.js');
var wrapWithLabel = require('./wrap-with-label.js');
require('./row.js');
var multiSelect = require('./multi-select.js');

/**
 * Компонент списка с множественным выбором с фильтром с добавленным заголовком.
 * Представляет собой компонент [MultiSelect](/#multiSelect), обернутый в компонент [WrapWithLabel](/#wrapwithlabel).
 */

var MultiSelectWithLabel = function MultiSelectWithLabel(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      label = _ref.label,
      _ref$mandatory = _ref.mandatory,
      mandatory = _ref$mandatory === void 0 ? false : _ref$mandatory,
      _ref$multiSelectProps = _ref.multiSelectProps,
      multiSelectProps = _ref$multiSelectProps === void 0 ? {} : _ref$multiSelectProps;
  return React__default.createElement(wrapWithLabel, {
    className: className,
    label: label,
    mandatory: mandatory
  }, React__default.createElement(multiSelect, multiSelectProps));
};
MultiSelectWithLabel.propTypes = {
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
   * Свойства компонента [MultiSelect](/#multiSelect).
   */
  multiSelectProps: index.PropTypes.shape()
};

module.exports = MultiSelectWithLabel;
