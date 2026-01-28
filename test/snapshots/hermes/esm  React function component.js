import { c as _c } from "react-compiler-runtime";
import { jsx as _jsx } from "react/jsx-runtime";
function Button(t0) {
  const $ = _c(8);
  let children;
  let extraProps;
  let t1;
  if ($[0] !== t0) {
    ({
      type: t1,
      children,
      ...extraProps
    } = t0);
    $[0] = t0;
    $[1] = children;
    $[2] = extraProps;
    $[3] = t1;
  } else {
    children = $[1];
    extraProps = $[2];
    t1 = $[3];
  }
  const type = t1 === undefined ? "button" : t1;
  let t2;
  if ($[4] !== children || $[5] !== extraProps || $[6] !== type) {
    t2 = /*#__PURE__*/_jsx("button", {
      type: type,
      ...extraProps,
      children: children
    });
    $[4] = children;
    $[5] = extraProps;
    $[6] = type;
    $[7] = t2;
  } else {
    t2 = $[7];
  }
  return t2;
}