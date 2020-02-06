'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var styleInject_es = require('./style-inject.es-4c81be79.js');
var React = require('react');
var React__default = _interopDefault(React);
var button = require('./button.js');
var index = require('./index-ca26b417.js');
var dashLoader = require('./dash-loader.js');
var text = require('./text.js');

var css = ".button-with-loader {\r\n  width: fit-content;\r\n  height: fit-content;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.button-with-loader__button {\r\n  flex-shrink: 0;\r\n}\r\n\r\n.button-with-loader__button.loading:disabled {\r\n  opacity: 1;\r\n}\r\n\r\n.button-with-loader__loader {\r\n  width: 30px;\r\n  height: 30px;\r\n  margin: auto;\r\n}\r\n\r\n.button-with-loader__success,\r\n.button-with-loader__error {\r\n  text-align: center;\r\n  margin-top: 4px;\r\n  font-size: 14px;\r\n}\r\n.button-with-loader__error {\r\n  color: #d22c75;\r\n}\r\n";
styleInject_es.styleInject(css);

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
      props = styleInject_es._objectWithoutProperties(_ref, ["className", "ButtonComponent", "LoaderComponent", "loading", "success", "error", "children"]);

  return React__default.createElement("div", {
    className: "button-with-loader ".concat(className)
  }, React__default.createElement(ButtonComponent, styleInject_es._extends({
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
