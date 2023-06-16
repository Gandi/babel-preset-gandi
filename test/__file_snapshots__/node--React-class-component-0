"use strict";

var _react = require("react");
var _jsxRuntime = require("react/jsx-runtime");
class Button extends _react.Component {
  handleClick = async evt => {
    evt.preventDefault();
    await fetch('/foo');
  };
  render() {
    const {
      type = 'button',
      children,
      ...extraProps
    } = this.props;
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
      type: type,
      onClick: this.handleClick,
      ...extraProps,
      children: children
    });
  }
}