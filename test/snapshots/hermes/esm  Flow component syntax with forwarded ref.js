import { jsx as _jsx } from "react/jsx-runtime";
const Input = React.forwardRef(Input_withRef);
function Input_withRef({
  id,
  name,
  value,
  defaultValue,
  ...extraProps
}, ref) {
  return /*#__PURE__*/_jsx("input", {
    ref: ref,
    id: id,
    name: name,
    value: value,
    defaultValue: defaultValue,
    ...extraProps
  });
}
export { Input };