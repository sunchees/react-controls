'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var styleInject_es = require('./style-inject.es-4c81be79.js');
var React = require('react');
var React__default = _interopDefault(React);
var index = require('./index-ca26b417.js');
var index$1 = require('./index-f47bf584.js');

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var VIEWBOX_WIDTH = 100;
var VIEWBOX_HEIGHT = 100;
var VIEWBOX_HEIGHT_HALF = 50;
var VIEWBOX_CENTER_X = 50;
var VIEWBOX_CENTER_Y = 50;

function Path(_a) {
    var className = _a.className, counterClockwise = _a.counterClockwise, dashRatio = _a.dashRatio, pathRadius = _a.pathRadius, strokeWidth = _a.strokeWidth, style = _a.style;
    return (React.createElement("path", { className: className, style: Object.assign({}, style, getDashStyle({ pathRadius: pathRadius, dashRatio: dashRatio, counterClockwise: counterClockwise })), d: getPathDescription({
            pathRadius: pathRadius,
            counterClockwise: counterClockwise,
        }), strokeWidth: strokeWidth, fillOpacity: 0 }));
}
function getPathDescription(_a) {
    var pathRadius = _a.pathRadius, counterClockwise = _a.counterClockwise;
    var radius = pathRadius;
    var rotation = counterClockwise ? 1 : 0;
    return "\n      M " + VIEWBOX_CENTER_X + "," + VIEWBOX_CENTER_Y + "\n      m 0,-" + radius + "\n      a " + radius + "," + radius + " " + rotation + " 1 1 0," + 2 * radius + "\n      a " + radius + "," + radius + " " + rotation + " 1 1 0,-" + 2 * radius + "\n    ";
}
function getDashStyle(_a) {
    var counterClockwise = _a.counterClockwise, dashRatio = _a.dashRatio, pathRadius = _a.pathRadius;
    var diameter = Math.PI * 2 * pathRadius;
    var gapLength = (1 - dashRatio) * diameter;
    return {
        strokeDasharray: diameter + "px " + diameter + "px",
        strokeDashoffset: (counterClockwise ? -gapLength : gapLength) + "px",
    };
}

var CircularProgressbar = (function (_super) {
    __extends(CircularProgressbar, _super);
    function CircularProgressbar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CircularProgressbar.prototype.getBackgroundPadding = function () {
        if (!this.props.background) {
            return 0;
        }
        return this.props.backgroundPadding;
    };
    CircularProgressbar.prototype.getPathRadius = function () {
        return VIEWBOX_HEIGHT_HALF - this.props.strokeWidth / 2 - this.getBackgroundPadding();
    };
    CircularProgressbar.prototype.getPathRatio = function () {
        var _a = this.props, value = _a.value, minValue = _a.minValue, maxValue = _a.maxValue;
        var boundedValue = Math.min(Math.max(value, minValue), maxValue);
        return (boundedValue - minValue) / (maxValue - minValue);
    };
    CircularProgressbar.prototype.render = function () {
        var _a = this.props, circleRatio = _a.circleRatio, className = _a.className, classes = _a.classes, counterClockwise = _a.counterClockwise, styles = _a.styles, strokeWidth = _a.strokeWidth, text = _a.text;
        var pathRadius = this.getPathRadius();
        var pathRatio = this.getPathRatio();
        return (React.createElement("svg", { className: classes.root + " " + className, style: styles.root, viewBox: "0 0 " + VIEWBOX_WIDTH + " " + VIEWBOX_HEIGHT, "data-test-id": "CircularProgressbar" },
            this.props.background ? (React.createElement("circle", { className: classes.background, style: styles.background, cx: VIEWBOX_CENTER_X, cy: VIEWBOX_CENTER_Y, r: VIEWBOX_HEIGHT_HALF })) : null,
            React.createElement(Path, { className: classes.trail, counterClockwise: counterClockwise, dashRatio: circleRatio, pathRadius: pathRadius, strokeWidth: strokeWidth, style: styles.trail }),
            React.createElement(Path, { className: classes.path, counterClockwise: counterClockwise, dashRatio: pathRatio * circleRatio, pathRadius: pathRadius, strokeWidth: strokeWidth, style: styles.path }),
            text ? (React.createElement("text", { className: classes.text, style: styles.text, x: VIEWBOX_CENTER_X, y: VIEWBOX_CENTER_Y }, text)) : null));
    };
    CircularProgressbar.defaultProps = {
        background: false,
        backgroundPadding: 0,
        circleRatio: 1,
        classes: {
            root: 'CircularProgressbar',
            trail: 'CircularProgressbar-trail',
            path: 'CircularProgressbar-path',
            text: 'CircularProgressbar-text',
            background: 'CircularProgressbar-background',
        },
        counterClockwise: false,
        className: '',
        maxValue: 100,
        minValue: 0,
        strokeWidth: 8,
        styles: {
            root: {},
            trail: {},
            path: {},
            text: {},
            background: {},
        },
        text: '',
    };
    return CircularProgressbar;
}(React.Component));

var css = ".progress-loader {\r\n  width: 32px;\r\n  height: 32px;\r\n}\r\n\r\n.progress-loader > .CircularProgressbar .CircularProgressbar-path {\r\n  stroke: #424242;\r\n  stroke-linecap: round;\r\n  transition: stroke-dashoffset 0.5s ease 0s;\r\n}\r\n\r\n.progress-loader > .CircularProgressbar .CircularProgressbar-trail {\r\n  stroke: #d3d3d3;\r\n}\r\n\r\n.progress-loader > .CircularProgressbar .CircularProgressbar-text {\r\n  stroke: #424242;\r\n  text-anchor: middle;\r\n}\r\n";
styleInject_es.styleInject(css);

var _class;
/**
 * Компонент кругового лоадера с отображением прогресса.
 * <br>
 * Представляет собой обертку над HTML-элементом div с вложенным компонентом CircularProgressbar.
 * <br>
 * [Документация CircularProgressbar](https://www.npmjs.com/package/react-circular-progressbar)
 */

var ProgressLoader = (_class =
/*#__PURE__*/
function (_React$PureComponent) {
  styleInject_es._inherits(ProgressLoader, _React$PureComponent);

  function ProgressLoader() {
    styleInject_es._classCallCheck(this, ProgressLoader);

    return styleInject_es._possibleConstructorReturn(this, styleInject_es._getPrototypeOf(ProgressLoader).apply(this, arguments));
  }

  styleInject_es._createClass(ProgressLoader, [{
    key: "textForPercentage",
    value: function textForPercentage(percentage) {
      return this.props.hidePercentage ? null : "".concat(percentage, "%");
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          _this$props$className = _this$props.className,
          className = _this$props$className === void 0 ? '' : _this$props$className,
          value = _this$props.value,
          displayValue = _this$props.displayValue,
          circularProgressbarProps = _this$props.circularProgressbarProps,
          children = _this$props.children,
          props = styleInject_es._objectWithoutProperties(_this$props, ["className", "value", "displayValue", "circularProgressbarProps", "children"]);

      return React__default.createElement("div", styleInject_es._extends({}, props, {
        className: "progress-loader ".concat(className, " ")
      }), React__default.createElement(CircularProgressbar, styleInject_es._extends({
        value: value,
        text: displayValue ? "".concat(value, "%") : null
      }, circularProgressbarProps)), children);
    }
  }]);

  return ProgressLoader;
}(React__default.PureComponent), (styleInject_es._applyDecoratedDescriptor(_class.prototype, "textForPercentage", [index$1.autobind], Object.getOwnPropertyDescriptor(_class.prototype, "textForPercentage"), _class.prototype)), _class);
ProgressLoader.propTypes = {
  /** Процент заполнения лоадера */
  value: index.PropTypes.number,

  /** Определяет наличие внутри лоадера надписи `{value}%` */
  displayValue: index.PropTypes.bool,

  /**
   * Параметры, передаваемые во внутренний компонент CircularProgressbar.
   * <br>
   * [Документация CircularProgressbar](https://www.npmjs.com/package/react-circular-progressbar)
   */
  circularProgressbarProps: index.PropTypes.shape()
};

module.exports = ProgressLoader;
