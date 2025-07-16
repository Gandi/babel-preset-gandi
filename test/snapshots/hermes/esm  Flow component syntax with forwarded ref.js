import { c as _c } from "react-compiler-runtime";
import { jsx as _jsx } from "react/jsx-runtime";
const Input = React.forwardRef(Input_withRef);
function Input_withRef(t0, ref) {
  const $ = _c(13);
  let defaultValue;
  let extraProps;
  let id;
  let name;
  let value;
  if ($[0] !== t0) {
    ({
      id,
      name,
      value,
      defaultValue,
      ...extraProps
    } = t0);
    $[0] = t0;
    $[1] = defaultValue;
    $[2] = extraProps;
    $[3] = id;
    $[4] = name;
    $[5] = value;
  } else {
    defaultValue = $[1];
    extraProps = $[2];
    id = $[3];
    name = $[4];
    value = $[5];
  }
  let t1;
  if ($[6] !== defaultValue || $[7] !== extraProps || $[8] !== id || $[9] !== name || $[10] !== ref || $[11] !== value) {
    t1 = /*#__PURE__*/_jsx("input", {
      ref: ref,
      id: id,
      name: name,
      value: value,
      defaultValue: defaultValue,
      ...extraProps
    });
    $[6] = defaultValue;
    $[7] = extraProps;
    $[8] = id;
    $[9] = name;
    $[10] = ref;
    $[11] = value;
    $[12] = t1;
  } else {
    t1 = $[12];
  }
  return t1;
}
export { Input };