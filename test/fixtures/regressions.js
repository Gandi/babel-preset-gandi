export default [
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
  [
    'Regression: Webpack magic comments',
    `
      import(/* webpackChunkName: foo */'bar')
    `,
  ],
  [
    'Regression: react-docgen comments',
    `
      /**  @component */
      function Foo() {}
    `,
  ],
];
