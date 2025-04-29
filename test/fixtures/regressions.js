export default [
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
