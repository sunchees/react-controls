'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-a036f66d.js');
var React = require('react');
var React__default = _interopDefault(React);
var button = require('./button.js');
var index = require('./index-54c38a10.js');
var dashLoader = require('./dash-loader.js');
var text = require('./text.js');

/**
 * Базовый компонент кнопки с лоадером и результатом выполнения операции.
 */

var ButtonWithLoader = function ButtonWithLoader(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$ButtonComponent = _ref.ButtonComponent,
      ButtonComponent = _ref$ButtonComponent === void 0 ? button : _ref$ButtonComponent,
      _ref$LoaderComponent = _ref.LoaderComponent,
      LoaderComponent = _ref$LoaderComponent === void 0 ? dashLoader : _ref$LoaderComponent,
      loading = _ref.loading,
      success = _ref.success,
      error = _ref.error,
      children = _ref.children,
      props = _rollupPluginBabelHelpers._objectWithoutProperties(_ref, ["className", "ButtonComponent", "LoaderComponent", "loading", "success", "error", "children"]);

  return React__default.createElement("div", {
    className: "button-with-loader ".concat(className)
  }, React__default.createElement(ButtonComponent, _rollupPluginBabelHelpers._extends({
    className: "button-with-loader__button ".concat(loading ? 'loading' : ''),
    disabled: loading
  }, props), loading ? React__default.createElement(LoaderComponent, {
    className: "button-with-loader__loader"
  }) : children), success ? React__default.createElement(text, {
    className: "button-with-loader__success",
    value: success
  }) : error ? React__default.createElement(text, {
    className: "button-with-loader__error",
    value: error
  }) : null);
};
ButtonWithLoader.propTypes = {
  /**
   * Класс компонента для отрисовки кнопки.
   */
  ButtonComponent: index.PropTypes.elementType,

  /**
   * Класс компонента для отрисовки лоадера.
   */
  LoaderComponent: index.PropTypes.elementType,

  /**
   * Регулирует отображение лоадера или контента кнопки
   */
  loading: index.PropTypes.bool,

  /**
   * Текст успешного выполнения операции
   */
  success: index.PropTypes.string,

  /**
   * Текст ошибки выполнения операции
   */
  error: index.PropTypes.string
};
ButtonWithLoader.defaultProps = {
  ButtonComponent: button,
  LoaderComponent: dashLoader
};

module.exports = ButtonWithLoader;
