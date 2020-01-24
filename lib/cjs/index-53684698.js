'use strict';

var styleInject_es = require('./style-inject.es-129889e4.js');
var column = require('./column.js');

var css = ".text {\r\n  color: #424242;\r\n}\r\n\r\n.text.capitalized::first-letter {\r\n  text-transform: capitalize;\r\n}\r\n\r\n.text.bold {\r\n  font-weight: bold;\r\n}\r\n";
styleInject_es.styleInject(css);

var Text = function Text(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      value = _ref.value,
      _ref$capitalized = _ref.capitalized,
      capitalized = _ref$capitalized === void 0 ? false : _ref$capitalized,
      _ref$bold = _ref.bold,
      bold = _ref$bold === void 0 ? false : _ref$bold,
      props = styleInject_es._objectWithoutProperties(_ref, ["className", "value", "capitalized", "bold"]);

  return styleInject_es.React.createElement("span", styleInject_es._extends({
    className: "text ".concat(capitalized ? 'capitalized' : '', " ").concat(bold ? 'bold' : '', " ").concat(className)
  }, props), value);
};

var css$1 = ".wrap-with-label__label {\r\n  line-height: 27px;\r\n  font-size: 12px;\r\n  color: #a7a7a7;\r\n}\r\n\r\n.wrap-with-label.mandatory > .wrap-with-label__label::after {\r\n  content: \" *\";\r\n  color: #d22c75;\r\n  font-weight: normal;\r\n}\r\n\r\n.wrap-with-label__empty-text {\r\n  line-height: 27px;\r\n}\r\n";
styleInject_es.styleInject(css$1);

var WrapWithLabel = function WrapWithLabel(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      label = _ref.label,
      _ref$mandatory = _ref.mandatory,
      mandatory = _ref$mandatory === void 0 ? false : _ref$mandatory,
      children = _ref.children,
      emptyText = _ref.emptyText;
  return styleInject_es.React.createElement(column, {
    className: "wrap-with-label ".concat(mandatory ? 'mandatory' : '', " ").concat(className)
  }, styleInject_es.React.createElement(Text, {
    className: "wrap-with-label__label",
    value: label
  }), styleInject_es.React.createElement(column, {
    className: "wrap-with-label__content"
  }, children instanceof Array && children.length ? children : children || (emptyText ? styleInject_es.React.createElement(Text, {
    className: "wrap-with-label__empty-text",
    value: emptyText
  }) : null)));
};

exports.WrapWithLabel = WrapWithLabel;
