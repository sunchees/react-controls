import { s as styleInject, _ as _objectWithoutProperties, a as _extends } from './style-inject.es-4d895b0c.js';
import React from 'react';

var css = ".teardrop-loader {\r\n  position: relative;\r\n  height: 32px;\r\n  width: 32px;\r\n}\r\n.teardrop-loader span {\r\n  display: block;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  margin: auto;\r\n  height: 32px;\r\n  width: 32px;\r\n}\r\n.teardrop-loader span::before,\r\n.teardrop-loader span::after {\r\n  content: \"\";\r\n  display: block;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  margin: auto;\r\n  height: 32px;\r\n  width: 32px;\r\n  border: 2px solid #424242;\r\n  border-radius: 50%;\r\n  opacity: 0;\r\n  -webkit-animation: teardrop-loader-1 1.5s cubic-bezier(0.075, 0.82, 0.165, 1)\r\n    infinite;\r\n  animation: teardrop-loader-1 1.5s cubic-bezier(0.075, 0.82, 0.165, 1) infinite;\r\n}\r\n@-webkit-keyframes teardrop-loader-1 {\r\n  0% {\r\n    -webkit-transform: translate3d(0, 0, 0) scale(0);\r\n    opacity: 1;\r\n  }\r\n  100% {\r\n    -webkit-transform: translate3d(0, 0, 0) scale(1.5);\r\n    opacity: 0;\r\n  }\r\n}\r\n@keyframes teardrop-loader-1 {\r\n  0% {\r\n    transform: translate3d(0, 0, 0) scale(0);\r\n    opacity: 1;\r\n  }\r\n  100% {\r\n    transform: translate3d(0, 0, 0) scale(1.5);\r\n    opacity: 0;\r\n  }\r\n}\r\n.teardrop-loader span::after {\r\n  -webkit-animation: teardrop-loader-2 1.5s cubic-bezier(0.075, 0.82, 0.165, 1)\r\n    0.25s infinite;\r\n  animation: teardrop-loader-2 1.5s cubic-bezier(0.075, 0.82, 0.165, 1) 0.25s\r\n    infinite;\r\n}\r\n@-webkit-keyframes teardrop-loader-2 {\r\n  0% {\r\n    -webkit-transform: translate3d(0, 0, 0) scale(0);\r\n    opacity: 1;\r\n  }\r\n  100% {\r\n    -webkit-transform: translate3d(0, 0, 0) scale(1);\r\n    opacity: 0;\r\n  }\r\n}\r\n@keyframes teardrop-loader-2 {\r\n  0% {\r\n    transform: translate3d(0, 0, 0) scale(0);\r\n    opacity: 1;\r\n  }\r\n  100% {\r\n    transform: translate3d(0, 0, 0) scale(1);\r\n    opacity: 0;\r\n  }\r\n}";
styleInject(css);

/**
 * Компонент лоадера с анимацией "Teardrop".
 * @see https://codepen.io/rbv912/pen/dYbqLQ (loader-6)
 */

var TeardropLoader = function TeardropLoader(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      props = _objectWithoutProperties(_ref, ["className"]);

  return React.createElement("div", _extends({}, props, {
    className: "teardrop-loader ".concat(className)
  }), React.createElement("span", null));
};

export default TeardropLoader;
