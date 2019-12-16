import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-5be4169f.js';
import React from 'react';
import { s as styleInject } from './style-inject.es-1f59c1d0.js';

var css = ".row {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n";
styleInject(css);

var Row = function Row(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["className", "children"]);

  return React.createElement("div", _extends({
    className: "row ".concat(className)
  }, props), children);
};

export default Row;
