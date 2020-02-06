import './style-inject.es-4d895b0c.js';
import React from 'react';
import './button.js';
import { P as PropTypes } from './index-aba1d7fe.js';
import './text.js';
import './index-4f87497b.js';
import './column.js';
import './_react_commonjs-external-132f0747.js';
import './input.js';
import './content-height-scrollbar.js';
import './scrollbar.js';
import './combo-box.js';
import WrapWithLabel from './wrap-with-label.js';
import MultiSelect from './multi-select.js';
import './row.js';

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
  return React.createElement(WrapWithLabel, {
    className: className,
    label: label,
    mandatory: mandatory
  }, React.createElement(MultiSelect, multiSelectProps));
};
MultiSelectWithLabel.propTypes = {
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
   * Свойства компонента [MultiSelect](/#multiSelect).
   */
  multiSelectProps: PropTypes.shape()
};

export default MultiSelectWithLabel;
