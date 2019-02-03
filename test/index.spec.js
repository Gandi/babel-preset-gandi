const { transform } = require('@babel/core');
const { toMatchFile } = require('jest-file-snapshot');
const preset = require('../');

expect.extend({ toMatchFile });

let cases = [
  [
    'flow',
    `
      // @flow
      type A = string
      let a: A = 'hello'
    `,
  ],
  [
    'react',
    `
      let A = () => <div>hello</div>
    `,
  ],
  [
    'object rest spread',
    `
      let b = {...a}
    `,
  ],
  [
    'class properties',
    `
      class A { a = () => 'hello' }
    `,
  ],
  [
    'decorators legacy',
    `
      @decorated
      class A {}
    `,
  ],
  [
    'dynamic imports',
    `
      import('./a')
    `,
  ],
  [
    'Runtime ponyfills',
    `
      new Map()
      new Set()
      new Promise()
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

test.each(cases)('cjsm: %s', (name, input) => {
  let { code } = transform(input, {
    presets: [preset],
  });

  expect(code).toMatchFile();
});

test.each(cases)('esm: %s', (name, input) => {
  let { code } = transform(input, {
    presets: [[preset, { modules: false }]],
  });

  expect(code).toMatchFile();
});
