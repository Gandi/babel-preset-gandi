export default [
  [
    'Flow: Type Guards',
    `
    function foo(node: any): node is Node {}
    `,
  ],
  [
    'Flow: Conditional Types',
    `
    class Vehicle {}
    class Car {}
    type Test = Car extends Vehicle ? 'yep' : 'nope'
    `,
  ],
  [
    'Flow: Type Casting',
    `
    let val = value as Type
    let obj = { prop: value as Type }
    let arr = [value as Type, value as Type] as Array<Type>
    `,
  ],
  [
    'Flow: Mapped Types',
    `
    type Union = 'foo' | 'bar' | 'baz'
    type MappedType = {[key in Union]: number}
    `,
  ],
  [
    'Flow render types',
    `
    component Foo() { return <div /> }
    component Bar() renders Foo { return <Foo /> }
    component Baz(foo: renders Foo) { <div>{foo}</div> }
    `,
  ],
  [
    'Flow component syntax with forwarded ref',
    `
    component Input(
      ref: React.RefSetter<HTMLInputElement>,
      ...{ id, name, value, defaultValue, ...extraProps }: Props
    ) renders Base {
      return (
        <input
          ref={ref}
          id={id}
          name={name}
          value={value}
          defaultValue={defaultValue}
          {...extraProps}
        />
      );
    }
    export { Input };
    `,
  ],
];
