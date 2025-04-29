export default [
  [
    'Flow: Types',
    `
      // @flow
      type A = string
      let a: A = 'hello'
    `,
  ],
  [
    'Regression: Flow void class properties',
    `
      // @flow
      type Props = {}
      class C {
        props: Props
      }
    `,
  ],
];
