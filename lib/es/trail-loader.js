import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-5be4169f.js';
import React from 'react';
import { s as styleInject } from './style-inject.es-1f59c1d0.js';

var css = ".trail-loader {\r\n  height: 32px;\r\n  width: 32px;\r\n  -webkit-animation: trail-loader-1 4.8s linear infinite;\r\n  animation: trail-loader-1 4.8s linear infinite;\r\n}\r\n@-webkit-keyframes trail-loader-1 {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotate(360deg);\r\n  }\r\n}\r\n@keyframes trail-loader-1 {\r\n  0% {\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n.trail-loader span {\r\n  display: block;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  margin: auto;\r\n  height: 32px;\r\n  width: 32px;\r\n  clip: rect(0, 32px, 32px, 16px);\r\n  -webkit-animation: trail-loader-2 1.2s linear infinite;\r\n  animation: trail-loader-2 1.2s linear infinite;\r\n}\r\n@-webkit-keyframes trail-loader-2 {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotate(220deg);\r\n  }\r\n}\r\n@keyframes trail-loader-2 {\r\n  0% {\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    transform: rotate(220deg);\r\n  }\r\n}\r\n.trail-loader span::after {\r\n  content: \"\";\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  margin: auto;\r\n  height: 32px;\r\n  width: 32px;\r\n  clip: rect(0, 32px, 32px, 16px);\r\n  border: 3px solid #424242;\r\n  border-radius: 50%;\r\n  -webkit-animation: trail-loader-3 1.2s cubic-bezier(0.77, 0, 0.175, 1)\r\n    infinite;\r\n  animation: trail-loader-3 1.2s cubic-bezier(0.77, 0, 0.175, 1) infinite;\r\n}\r\n@-webkit-keyframes trail-loader-3 {\r\n  0% {\r\n    -webkit-transform: rotate(-140deg);\r\n  }\r\n  50% {\r\n    -webkit-transform: rotate(-160deg);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotate(140deg);\r\n  }\r\n}\r\n@keyframes trail-loader-3 {\r\n  0% {\r\n    transform: rotate(-140deg);\r\n  }\r\n  50% {\r\n    transform: rotate(-160deg);\r\n  }\r\n  100% {\r\n    transform: rotate(140deg);\r\n  }\r\n}\r\n";
styleInject(css);

var TrailLoader = function TrailLoader(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      props = _objectWithoutProperties(_ref, ["className"]);

  return React.createElement("div", _extends({}, props, {
    className: "trail-loader ".concat(className)
  }), React.createElement("span", null));
};

export default TrailLoader;
