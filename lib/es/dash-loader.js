import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-5be4169f.js';
import React from 'react';
import { s as styleInject } from './style-inject.es-1f59c1d0.js';

var css = ".dash-loader ::after,\r\n.dash-loader ::before {\r\n  -webkit-box-sizing: border-box;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.dash-loader {\r\n  display: block;\r\n  height: 32px;\r\n  width: 32px;\r\n  -webkit-animation: dash-loader-1 3s linear infinite;\r\n  animation: dash-loader-1 3s linear infinite;\r\n}\r\n@-webkit-keyframes dash-loader-1 {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotate(360deg);\r\n  }\r\n}\r\n@keyframes dash-loader-1 {\r\n  0% {\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n.dash-loader span {\r\n  display: block;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  margin: auto;\r\n  height: 32px;\r\n  width: 32px;\r\n  clip: rect(16px, 32px, 32px, 0);\r\n  -webkit-animation: dash-loader-2 1.5s cubic-bezier(0.77, 0, 0.175, 1) infinite;\r\n  animation: dash-loader-2 1.5s cubic-bezier(0.77, 0, 0.175, 1) infinite;\r\n}\r\n@-webkit-keyframes dash-loader-2 {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotate(360deg);\r\n  }\r\n}\r\n@keyframes dash-loader-2 {\r\n  0% {\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n.dash-loader span::before {\r\n  content: \"\";\r\n  display: block;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  margin: auto;\r\n  height: 32px;\r\n  width: 32px;\r\n  border: 3px solid transparent;\r\n  border-top: 3px solid #424242;\r\n  border-radius: 50%;\r\n  -webkit-animation: dash-loader-3 1.5s cubic-bezier(0.77, 0, 0.175, 1) infinite;\r\n  animation: dash-loader-3 1.5s cubic-bezier(0.77, 0, 0.175, 1) infinite;\r\n}\r\n@-webkit-keyframes dash-loader-3 {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotate(360deg);\r\n  }\r\n}\r\n@keyframes dash-loader-3 {\r\n  0% {\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n.dash-loader span::after {\r\n  content: \"\";\r\n  display: block;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  margin: auto;\r\n  height: 32px;\r\n  width: 32px;\r\n  border: 3px solid rgba(66, 66, 66, 0.5);\r\n  border-radius: 50%;\r\n}\r\n";
styleInject(css);

var DashLoader = function DashLoader(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      props = _objectWithoutProperties(_ref, ["className"]);

  return React.createElement("div", _extends({
    className: "dash-loader ".concat(className)
  }, props), React.createElement("span", null));
};

export default DashLoader;
