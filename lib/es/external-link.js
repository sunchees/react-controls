import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-4576a74b.js';
import React from 'react';
import { P as PropTypes } from './index-3248c44c.js';

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
      props = _objectWithoutProperties(_ref, ["className", "url", "target", "children"]);

  return React.createElement("a", _extends({
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
  url: PropTypes.string
};

export default ExternalLink;
