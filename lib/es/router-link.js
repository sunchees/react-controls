import { b as _inherits, c as _createClass, h as _objectSpread2, e as _classCallCheck, f as _possibleConstructorReturn, g as _getPrototypeOf, _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-4576a74b.js';
import React from 'react';
import { P as PropTypes } from './index-3248c44c.js';
import { withRouter, matchPath, Link } from 'react-router-dom';

/**
 * Ссылка для переходов на старницу в рамках приложения.
 * Представляет собой обертку над компонентом Link из react-router-dom с добавлением стилей.
 * Содержит функционал авто-проверки активности ссылки.
 */

var RouterLink =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(RouterLink, _React$PureComponent);

  function RouterLink() {
    _classCallCheck(this, RouterLink);

    return _possibleConstructorReturn(this, _getPrototypeOf(RouterLink).apply(this, arguments));
  }

  _createClass(RouterLink, [{
    key: "isActive",
    value: function isActive() {
      var path = this.props.pattern || this.props.to;
      return !!matchPath(this.props.location.pathname, {
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
          props = _objectWithoutProperties(_this$props, ["className", "children", "pattern", "location", "history"]);

      return React.createElement(Link, _extends({}, props, {
        className: "router-link ".concat(this.isActive() ? 'active' : '', " ").concat(className)
      }), children);
    }
  }]);

  return RouterLink;
}(React.PureComponent);

var index = withRouter(RouterLink);
RouterLink.propTypes = _objectSpread2({}, RouterLink.propTypes, {
  /**
   * Шаблон для проверки активности ссылки.
   * <br>
   * В случае, если ссылка активна, к ней применяется стиль 'active'. Если шаблон не задан, для проверки используется параметр 'props.to'.
   */
  pattern: PropTypes.string
});

export default index;
