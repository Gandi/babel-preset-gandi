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
    'jsx',
    `
      let A = () => <div>hello</div>
    `,
  ],
  [
    'jsx spread',
    `
      <div a {...b}>hello</div>
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
    'static class properties',
    `
      class A { static a = 'hello' }
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
    'optional chaining',
    `
    let obj = {
      foo: {
        bar: {
          baz: 42,
        },
      },
    };

    let baz = obj?.foo?.bar?.baz; // 42

    let safe = obj?.qux?.baz; // undefined
    `,
  ],
  [
    'nullish coalescing',
    `
    let obj = {};

    let foo = obj.foo ?? 'default';
    `,
  ],
  [
    'async await',
    `
    (async function() {
      await foo();
    }());
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
  [
    'React function component',
    `
      function Button({ type = 'button', children, ...extraProps }) {
        return (
          <button type={type} {...extraProps}>
            {children}
          </button>
        );
      }
    `,
  ],
  [
    'React class component',
    `
      import * as React from 'react';

      class Button extends React.Component {
        handleClick = async (evt) => {
          evt.preventDefault();
          await fetch('/foo');
        }

        render() {
          const { type = 'button', ...extraProps } = this.props;

          return (
            <button type={type} onClick={this.handleClick} {...extraProps}>
              {children}
            </button>
          );
        }
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

test.each(cases)('esmodules: %s', (name, input) => {
  let { code } = transform(input, {
    presets: [[preset, { modules: false, targets: { esmodules: true } }]],
  });

  expect(code).toMatchFile();
});

test.each(cases)('node: %s', (name, input) => {
  let { code } = transform(input, {
    presets: [[preset, { targets: { node: 12 } }]],
  });

  expect(code).toMatchFile();
});
