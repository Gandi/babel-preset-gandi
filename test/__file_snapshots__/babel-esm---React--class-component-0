import { Component } from 'react';
import { jsx as _jsx } from "react/jsx-runtime";
class Button extends Component {
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
    return /*#__PURE__*/_jsx("button", {
      type: type,
      onClick: this.handleClick,
      ...extraProps,
      children: children
    });
  }
}