import { c as _c } from "react-compiler-runtime";
import { jsx as _jsx } from "react/jsx-runtime";
function Foo() {
  const $ = _c(1);
  let t0;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t0 = /*#__PURE__*/_jsx("div", {});
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  return t0;
}
function Bar() {
  const $ = _c(1);
  let t0;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t0 = /*#__PURE__*/_jsx(Foo, {});
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  return t0;
}
function Baz(t0) {}