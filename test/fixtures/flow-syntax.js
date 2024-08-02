module.exports = [
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
];
