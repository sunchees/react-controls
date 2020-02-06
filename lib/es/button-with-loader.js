import { s as styleInject, _ as _objectWithoutProperties, a as _extends } from './style-inject.es-4d895b0c.js';
import React from 'react';
import Button from './button.js';
import { P as PropTypes } from './index-aba1d7fe.js';
import DashLoader from './dash-loader.js';
import Text from './text.js';

var css = ".button-with-loader {\r\n  width: fit-content;\r\n  height: fit-content;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.button-with-loader__button {\r\n  flex-shrink: 0;\r\n}\r\n\r\n.button-with-loader__button.loading:disabled {\r\n  opacity: 1;\r\n}\r\n\r\n.button-with-loader__loader {\r\n  width: 30px;\r\n  height: 30px;\r\n  margin: auto;\r\n}\r\n\r\n.button-with-loader__success,\r\n.button-with-loader__error {\r\n  text-align: center;\r\n  margin-top: 4px;\r\n  font-size: 14px;\r\n}\r\n.button-with-loader__error {\r\n  color: #d22c75;\r\n}\r\n";
styleInject(css);

/**
 * Базовый компонент кнопки с лоадером и результатом выполнения операции.
 */

var ButtonWithLoader = function ButtonWithLoader(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$ButtonComponent = _ref.ButtonComponent,
      ButtonComponent = _ref$ButtonComponent === void 0 ? Button : _ref$ButtonComponent,
      _ref$LoaderComponent = _ref.LoaderComponent,
      LoaderComponent = _ref$LoaderComponent === void 0 ? DashLoader : _ref$LoaderComponent,
      loading = _ref.loading,
      success = _ref.success,
      error = _ref.error,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["className", "ButtonComponent", "LoaderComponent", "loading", "success", "error", "children"]);

  return React.createElement("div", {
    className: "button-with-loader ".concat(className)
  }, React.createElement(ButtonComponent, _extends({
    className: "button-with-loader__button ".concat(loading ? 'loading' : ''),
    disabled: loading
  }, props), loading ? React.createElement(LoaderComponent, {
    className: "button-with-loader__loader"
  }) : children), success ? React.createElement(Text, {
    className: "button-with-loader__success",
    value: success
  }) : error ? React.createElement(Text, {
    className: "button-with-loader__error",
    value: error
  }) : null);
};
ButtonWithLoader.propTypes = {
  /**
   * Класс компонента для отрисовки кнопки.
   */
  ButtonComponent: PropTypes.elementType,

  /**
   * Класс компонента для отрисовки лоадера.
   */
  LoaderComponent: PropTypes.elementType,

  /**
   * Регулирует отображение лоадера или контента кнопки
   */
  loading: PropTypes.bool,

  /**
   * Текст успешного выполнения операции
   */
  success: PropTypes.string,

  /**
   * Текст ошибки выполнения операции
   */
  error: PropTypes.string
};
ButtonWithLoader.defaultProps = {
  ButtonComponent: Button,
  LoaderComponent: DashLoader
};

export default ButtonWithLoader;
