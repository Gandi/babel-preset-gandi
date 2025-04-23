"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Input = void 0;
var _jsxRuntime = require("react/jsx-runtime");
const Input = exports.Input = React.forwardRef(Input_withRef);
function Input_withRef({
  id,
  name,
  value,
  defaultValue,
  ...extraProps
}, ref) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
    ref: ref,
    id: id,
    name: name,
    value: value,
    defaultValue: defaultValue,
    ...extraProps
  });
}