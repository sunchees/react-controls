import { b as _inherits, c as _createClass, d as _applyDecoratedDescriptor, a as _extends, e as _classCallCheck, f as _possibleConstructorReturn, g as _getPrototypeOf, _ as _objectWithoutProperties } from './_rollupPluginBabelHelpers-4576a74b.js';
import React from 'react';
import { c as createCommonjsModule, u as unwrapExports } from './index-aba1d7fe.js';
import { a as autobind } from './index-4f87497b.js';
import './_react_commonjs-external-132f0747.js';
import Scrollbar from './scrollbar.js';

var ReactHeight_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReactHeight = void 0;

var _react = _interopRequireWildcard(React);

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getElementHeightDefault = function getElementHeightDefault(el) {
  return el.clientHeight;
};

var ReactHeight =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(ReactHeight, _PureComponent);

  function ReactHeight(props) {
    var _this;

    _classCallCheck(this, ReactHeight);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ReactHeight).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "setWrapperRef", function (el) {
      _this.wrapper = el;
    });

    _this.state = {
      dirty: props.dirty,
      height: 0
    };
    return _this;
  }

  _createClass(ReactHeight, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var getElementHeight = this.props.getElementHeight;
      var height = getElementHeight(this.wrapper);
      var dirty = false;
      this.setState({
        height: height,
        dirty: dirty
      }, function () {
        var onHeightReady = _this2.props.onHeightReady;
        var currentHeight = _this2.state.height;
        onHeightReady(currentHeight);
      });
    } // eslint-disable-next-line react/no-deprecated

  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(_ref) {
      var children = _ref.children,
          dirty = _ref.dirty;
      var oldChildren = this.props.children;

      if (children !== oldChildren || dirty) {
        this.setState({
          dirty: true
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _this3 = this;

      var getElementHeight = this.props.getElementHeight;
      var height = getElementHeight(this.wrapper);
      var dirty = false;
      var currentSavedHeight = this.state.height;

      if (height === currentSavedHeight) {
        // eslint-disable-next-line react/no-did-update-set-state
        this.setState({
          dirty: dirty
        });
      } else {
        // eslint-disable-next-line react/no-did-update-set-state
        this.setState({
          height: height,
          dirty: dirty
        }, function () {
          var onHeightReady = _this3.props.onHeightReady;
          var currentHeight = _this3.state.height;
          onHeightReady(currentHeight);
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          _onHeightReady = _this$props.onHeightReady,
          _getElementHeight = _this$props.getElementHeight,
          _dirty = _this$props.dirty,
          hidden = _this$props.hidden,
          children = _this$props.children,
          props = _objectWithoutProperties(_this$props, ["onHeightReady", "getElementHeight", "dirty", "hidden", "children"]);

      var dirty = this.state.dirty;

      if (hidden && !dirty) {
        return null;
      }

      if (hidden) {
        return _react["default"].createElement("div", {
          style: {
            height: 0,
            overflow: 'hidden'
          }
        }, _react["default"].createElement("div", _extends({
          ref: this.setWrapperRef
        }, props), children));
      }

      return _react["default"].createElement("div", _extends({
        ref: this.setWrapperRef
      }, props), children);
    }
  }]);

  return ReactHeight;
}(_react.PureComponent);

exports.ReactHeight = ReactHeight;

_defineProperty(ReactHeight, "defaultProps", {
  hidden: false,
  dirty: true,
  getElementHeight: getElementHeightDefault
});
});

unwrapExports(ReactHeight_1);
var ReactHeight_2 = ReactHeight_1.ReactHeight;

var ReactHeight = ReactHeight_1.ReactHeight;

ReactHeight.ReactHeight = ReactHeight;
var lib = ReactHeight;

var _class;
var InnerContentHeightScrollbar = (_class =
/*#__PURE__*/
function (_React$Component) {
  _inherits(InnerContentHeightScrollbar, _React$Component);

  function InnerContentHeightScrollbar() {
    _classCallCheck(this, InnerContentHeightScrollbar);

    return _possibleConstructorReturn(this, _getPrototypeOf(InnerContentHeightScrollbar).apply(this, arguments));
  }

  _createClass(InnerContentHeightScrollbar, [{
    key: "onHeightReady",
    value: function onHeightReady(height) {
      if (this.container) this.container.style.height = "".concat(height, "px");
    }
  }, {
    key: "setRef",
    value: function setRef(scrollbar) {
      this.scrollbar = scrollbar;
      this.container = scrollbar ? scrollbar.container : null;
      if (this.props.forwardRef) this.props.forwardRef(scrollbar);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          _this$props$className = _this$props.className,
          className = _this$props$className === void 0 ? '' : _this$props$className,
          children = _this$props.children,
          forwardRef = _this$props.forwardRef,
          props = _objectWithoutProperties(_this$props, ["className", "children", "forwardRef"]);

      return React.createElement(Scrollbar, _extends({
        className: "content-height-scrollbar ".concat(className),
        ref: this.setRef
      }, props), React.createElement(lib, {
        onHeightReady: this.onHeightReady
      }, children));
    }
  }]);

  return InnerContentHeightScrollbar;
}(React.Component), (_applyDecoratedDescriptor(_class.prototype, "onHeightReady", [autobind], Object.getOwnPropertyDescriptor(_class.prototype, "onHeightReady"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "setRef", [autobind], Object.getOwnPropertyDescriptor(_class.prototype, "setRef"), _class.prototype)), _class);
/**
 * Компонент-обертка, добавляющий к контенту скроллбар.
 * <br>
 * Представляет собой обертку над компонентом [Scrollbar](/#scrollbar).
 * <br>
 * Высота скроллбара будет автоматически подстроена под высоту контента.
 * <br>
 * Данный компонент наиболее применим в случае, когда необходимо отобразить список элементов, минимальная высота которого всегда равна высоте контента, но максимальная высота ограничена внешними стилями (через max-height).
 */

var ContentHeightScrollbar = React.forwardRef(function (props, ref) {
  return React.createElement(InnerContentHeightScrollbar, _extends({}, props, {
    forwardRef: ref
  }));
});

export default ContentHeightScrollbar;
