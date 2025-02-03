import { jsx as _jsx } from "react/jsx-runtime";
function Foo() {
  return /*#__PURE__*/_jsx("div", {});
}
function Bar() {
  return /*#__PURE__*/_jsx(Foo, {});
}
function Baz({
  foo
}) {
  /*#__PURE__*/_jsx("div", {
    children: foo
  });
}