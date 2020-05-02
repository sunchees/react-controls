'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-a036f66d.js');
var React = require('react');
var React__default = _interopDefault(React);
var index = require('./index-54c38a10.js');

/**
 * Ссылка для переходов на внешнюю старницу.
 */

var ExternalLink = function ExternalLink(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      url = _ref.url,
      _ref$target = _ref.target,
      target = _ref$target === void 0 ? '_blank' : _ref$target,
      children = _ref.children,
      props = _rollupPluginBabelHelpers._objectWithoutProperties(_ref, ["className", "url", "target", "children"]);

  return React__default.createElement("a", _rollupPluginBabelHelpers._extends({
    className: "external-link ".concat(className),
    href: url,
    target: target,
    rel: "noopener noreferrer"
  }, props), children);
};

ExternalLink.propTypes = {
  /**
   * Адрес для перехода по ссылке. Также может быть задан через стандартный параметр "href"
   */
  url: index.PropTypes.string
};

module.exports = ExternalLink;
