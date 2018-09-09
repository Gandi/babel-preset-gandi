const { transform } = require('@babel/core');
const preset = require('../');

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
];

test.each(cases)('%s', (name, input) => {
  let { code } = transform(input, {
    presets: [preset],
  });

  expect(code).toMatchSnapshot();
});

test.each(cases)('commonjs: %s', (name, input) => {
  let { code } = transform(input, {
    presets: [[preset, { modules: 'commonjs' }]],
  });

  expect(code).toMatchSnapshot();
});
