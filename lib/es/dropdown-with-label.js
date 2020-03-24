import './_rollupPluginBabelHelpers-4576a74b.js';
import React from 'react';
import './button.js';
import { P as PropTypes } from './index-1e9a47a9.js';
import './text.js';
import './index-4f87497b.js';
import './column.js';
import './isEqual-0877f8f8.js';
import './_react_commonjs-external-132f0747.js';
import './content-height-scrollbar.js';
import './scrollbar.js';
import WrapWithLabel from './wrap-with-label.js';
import Dropdown from './dropdown.js';

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
  return React.createElement(WrapWithLabel, {
    className: className,
    label: label,
    mandatory: mandatory
  }, React.createElement(Dropdown, dropdownProps));
};
DropdownWithLabel.propTypes = {
  /**
   * Текст заголовка
   */
  label: PropTypes.string,

  /**
   * Обязательность контента внутри обертки.
   * <br>
   * true - Добавляет класс 'mandatory' к компоненту обертки
   */
  mandatory: PropTypes.bool,

  /**
   * Свойства компонента [Dropdown](/#dropdown).
   */
  dropdownProps: PropTypes.shape()
};

export default DropdownWithLabel;
