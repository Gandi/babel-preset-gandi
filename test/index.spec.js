const { transform } = require('@babel/core');

const cases = [
  [
    'object rest spread',
    `
      const b = {...a}
    `,
  ],
  [
    'flow',
    `
      // @flow
      type A = string
      const a: A = 'hello'
    `,
  ],
  [
    'react',
    `
      const A = () => <div>hello</div>
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
];

test.each(cases)('%s', (name, input) => {
  const { code } = transform(input, {
    presets: [require('../')],
  });

  expect(code).toMatchSnapshot();
});

test.each(cases)('commonjs: %s', (name, input) => {
  const { code } = transform(input, {
    presets: [[require('../'), { modules: 'commonjs' }]],
  });

  expect(code).toMatchSnapshot();
});
