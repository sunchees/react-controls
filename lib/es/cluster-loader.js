import { s as styleInject, _ as _objectWithoutProperties, a as _extends } from './style-inject.es-4d895b0c.js';
import React from 'react';

var css = ".cluster-loader {\r\n  position: relative;\r\n  height: 32px;\r\n  width: 32px;\r\n  animation: cluster-loader-1 2s cubic-bezier(0.77, 0, 0.175, 1) infinite;\r\n}\r\n@keyframes cluster-loader-1 {\r\n  0% {\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n.cluster-loader::before {\r\n  content: \"\";\r\n  display: block;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: auto;\r\n  margin: auto;\r\n  width: 8px;\r\n  height: 8px;\r\n  background: #424242;\r\n  border-radius: 50%;\r\n  animation: cluster-loader-2 2s cubic-bezier(0.77, 0, 0.175, 1) infinite;\r\n}\r\n@keyframes cluster-loader-2 {\r\n  0% {\r\n    transform: translate3d(0, 0, 0) scale(1);\r\n  }\r\n  50% {\r\n    transform: translate3d(24px, 0, 0) scale(0.5);\r\n  }\r\n  100% {\r\n    transform: translate3d(0, 0, 0) scale(1);\r\n  }\r\n}\r\n.cluster-loader::after {\r\n  content: \"\";\r\n  display: block;\r\n  position: absolute;\r\n  top: 0;\r\n  left: auto;\r\n  bottom: 0;\r\n  right: 0;\r\n  margin: auto;\r\n  width: 8px;\r\n  height: 8px;\r\n  background: #424242;\r\n  border-radius: 50%;\r\n  animation: cluster-loader-3 2s cubic-bezier(0.77, 0, 0.175, 1) infinite;\r\n}\r\n@keyframes cluster-loader-3 {\r\n  0% {\r\n    transform: translate3d(0, 0, 0) scale(1);\r\n  }\r\n  50% {\r\n    transform: translate3d(-24px, 0, 0) scale(0.5);\r\n  }\r\n  100% {\r\n    transform: translate3d(0, 0, 0) scale(1);\r\n  }\r\n}\r\n.cluster-loader span {\r\n  display: block;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  margin: auto;\r\n  height: inherit;\r\n  width: inherit;\r\n}\r\n.cluster-loader span::before {\r\n  content: \"\";\r\n  display: block;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: auto;\r\n  right: 0;\r\n  margin: auto;\r\n  width: 8px;\r\n  height: 8px;\r\n  background: #424242;\r\n  border-radius: 50%;\r\n  animation: cluster-loader-4 2s cubic-bezier(0.77, 0, 0.175, 1) infinite;\r\n}\r\n@keyframes cluster-loader-4 {\r\n  0% {\r\n    transform: translate3d(0, 0, 0) scale(1);\r\n  }\r\n  50% {\r\n    transform: translate3d(0, 24px, 0) scale(0.5);\r\n  }\r\n  100% {\r\n    transform: translate3d(0, 0, 0) scale(1);\r\n  }\r\n}\r\n.cluster-loader span::after {\r\n  content: \"\";\r\n  display: block;\r\n  position: absolute;\r\n  top: auto;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  margin: auto;\r\n  width: 8px;\r\n  height: 8px;\r\n  background: #424242;\r\n  border-radius: 50%;\r\n  animation: cluster-loader-5 2s cubic-bezier(0.77, 0, 0.175, 1) infinite;\r\n}\r\n@keyframes cluster-loader-5 {\r\n  0% {\r\n    transform: translate3d(0, 0, 0) scale(1);\r\n  }\r\n  50% {\r\n    transform: translate3d(0, -24px, 0) scale(0.5);\r\n  }\r\n  100% {\r\n    transform: translate3d(0, 0, 0) scale(1);\r\n  }\r\n}\r\n";
styleInject(css);

/**
 * Компонент лоадера с анимацией "Cluster".
 * @see https://codepen.io/rbv912/pen/dYbqLQ (loader-5)
 */

var ClusterLoader = function ClusterLoader(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      props = _objectWithoutProperties(_ref, ["className"]);

  return React.createElement("div", _extends({
    className: "cluster-loader ".concat(className)
  }, props), React.createElement("span", null));
};

export default ClusterLoader;
