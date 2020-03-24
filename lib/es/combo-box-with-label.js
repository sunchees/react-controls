import './_rollupPluginBabelHelpers-4576a74b.js';
import React from 'react';
import './button.js';
import { P as PropTypes } from './index-1e9a47a9.js';
import './text.js';
import './index-4f87497b.js';
import './column.js';
import './isEqual-0877f8f8.js';
import './_react_commonjs-external-132f0747.js';
import './input.js';
import './content-height-scrollbar.js';
import './scrollbar.js';
import ComboBox from './combo-box.js';
import WrapWithLabel from './wrap-with-label.js';

/**
 * Компонент выпадающего списка с фильтром с добавленным заголовком.
 * Представляет собой компонент [ComboBox](/#comboBox), обернутый в компонент [WrapWithLabel](/#wrapwithlabel).
 */

var ComboBoxWithLabel = function ComboBoxWithLabel(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      label = _ref.label,
      _ref$mandatory = _ref.mandatory,
      mandatory = _ref$mandatory === void 0 ? false : _ref$mandatory,
      _ref$comboBoxProps = _ref.comboBoxProps,
      comboBoxProps = _ref$comboBoxProps === void 0 ? {} : _ref$comboBoxProps;
  return React.createElement(WrapWithLabel, {
    className: className,
    label: label,
    mandatory: mandatory
  }, React.createElement(ComboBox, comboBoxProps));
};
ComboBoxWithLabel.propTypes = {
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
   * Свойства компонента [ComboBox](/#comboBox).
   */
  comboBoxProps: PropTypes.shape()
};

export default ComboBoxWithLabel;
