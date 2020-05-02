'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-a036f66d.js');
var React = require('react');
var React__default = _interopDefault(React);
var index$1 = require('./index-54c38a10.js');
var reactRouterDom = require('react-router-dom');

/**
 * Ссылка для переходов на старницу в рамках приложения.
 * Представляет собой обертку над компонентом Link из react-router-dom с добавлением стилей.
 * Содержит функционал авто-проверки активности ссылки.
 */

var RouterLink =
/*#__PURE__*/
function (_React$PureComponent) {
  _rollupPluginBabelHelpers._inherits(RouterLink, _React$PureComponent);

  function RouterLink() {
    _rollupPluginBabelHelpers._classCallCheck(this, RouterLink);

    return _rollupPluginBabelHelpers._possibleConstructorReturn(this, _rollupPluginBabelHelpers._getPrototypeOf(RouterLink).apply(this, arguments));
  }

  _rollupPluginBabelHelpers._createClass(RouterLink, [{
    key: "isActive",
    value: function isActive() {
      var path = this.props.pattern || this.props.to;
      return !!reactRouterDom.matchPath(this.props.location.pathname, {
        path: path
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          _this$props$className = _this$props.className,
          className = _this$props$className === void 0 ? '' : _this$props$className,
          children = _this$props.children,
          pattern = _this$props.pattern,
          location = _this$props.location,
          history = _this$props.history,
          props = _rollupPluginBabelHelpers._objectWithoutProperties(_this$props, ["className", "children", "pattern", "location", "history"]);

      return React__default.createElement(reactRouterDom.Link, _rollupPluginBabelHelpers._extends({}, props, {
        className: "router-link ".concat(this.isActive() ? 'active' : '', " ").concat(className)
      }), children);
    }
  }]);

  return RouterLink;
}(React__default.PureComponent);

var index = reactRouterDom.withRouter(RouterLink);
RouterLink.propTypes = _rollupPluginBabelHelpers._objectSpread2({}, RouterLink.propTypes, {
  /**
   * Шаблон для проверки активности ссылки.
   * <br>
   * В случае, если ссылка активна, к ней применяется стиль 'active'. Если шаблон не задан, для проверки используется параметр 'props.to'.
   */
  pattern: index$1.PropTypes.string
});

module.exports = index;
