const cases = require('jest-in-case');
const { transform } = require('@babel/core');

cases(
  'transforms',
  ({ name, input }) => {
    const { code } = transform(input, {
      presets: [require('../')],
    });

    expect(code).toMatchSnapshot(name);
  },
  [
    {
      name: 'object rest spread',
      input: `
        const b = {...a}
      `,
    },
    {
      name: 'flow',
      input: `
        // @flow
        type A = string
        const a: A = 'hello'
      `,
    },
    {
      name: 'react',
      input: `
        const A = () => <div>hello</div>
      `,
    },
    {
      name: 'class properties',
      input: `
        class A { a = () => 'hello' }
      `,
    },
    {
      name: 'decorators legacy',
      input: `
        @decorated
        class A {}
      `,
    },
    {
      name: 'dynamic imports',
      input: `
        import('./a')
      `,
    },
  ]
);
