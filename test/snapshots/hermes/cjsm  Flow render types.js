"use strict";

var _jsxRuntime = require("react/jsx-runtime");
function Foo() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {});
}
function Bar() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(Foo, {});
}
function Baz({
  foo
}) {
  /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    children: foo
  });
}