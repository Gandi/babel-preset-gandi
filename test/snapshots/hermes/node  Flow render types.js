"use strict";

var _reactCompilerRuntime = require("react-compiler-runtime");
var _jsxRuntime = require("react/jsx-runtime");
function Foo() {
  const $ = (0, _reactCompilerRuntime.c)(1);
  let t0;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t0 = /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {});
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  return t0;
}
function Bar() {
  const $ = (0, _reactCompilerRuntime.c)(1);
  let t0;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t0 = /*#__PURE__*/(0, _jsxRuntime.jsx)(Foo, {});
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  return t0;
}
function Baz(t0) {}