const { transform } = require('@babel/core');
const { toMatchFile } = require('jest-file-snapshot');
const browserslist = require('browserslist');

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
      import { Component } from 'react';

      class Button extends Component {
        handleClick = async (evt) => {
          evt.preventDefault();
          await fetch('/foo');
        }

        render() {
          const { type = 'button', children, ...extraProps } = this.props;

          return (
            <button type={type} onClick={this.handleClick} {...extraProps}>
              {children}
            </button>
          );
        }
      }
    `,
  ],
  [
    'Promise.allSettled',
    `
    Promise.allSettled([
      Promise.resolve(1),
      Promise.resolve(2),
    ])
    .then((rs) => rs.forEach((r) => console.log(r.status)));
    `,
  ],
  [
    'Object.entries',
    `
    Object.entries({ a: 1 });
    `,
  ],
  [
    'Array.flatMap',
    `
    [1, 2].flatMap(x => [x * 2])
    `,
  ],
];

test.each(cases)('cjsm: %s', (name, input) => {
  let { code } = transform(input, {
    targets: { browsers: 'defaults' },
    presets: [preset],
  });

  expect(code).toMatchFile();
});

test.each(cases)('esm: %s', (name, input) => {
  let { code } = transform(input, {
    targets: { browsers: 'defaults' },
    presets: [[preset, { modules: false }]],
  });

  expect(code).toMatchFile();
});

test.each(cases)('esmodules: %s', (name, input) => {
  let { code } = transform(input, {
    targets: { browsers: 'defaults', esmodules: true },
    presets: [[preset, { modules: false }]],
  });

  expect(code).toMatchFile();
});

test.each(cases)('node: %s', (name, input) => {
  let { code } = transform(input, {
    targets: { node: 22 },
    presets: [preset],
  });

  expect(code).toMatchFile();
});

test('targets: modern', () => {
  let {
    options: { targets },
  } = transform('', {
    targets: { browsers: 'defaults', esmodules: true },
    presets: [[preset, { modules: false }]],
  });

  let browsers = browserslist('defaults and supports es6-module');

  let result = [
    '// Babel targets',
    JSON.stringify(targets, null, 2),
    '// Browerslist targets',
    JSON.stringify(browsers, null, 2),
  ].join('\n');

  expect(result).toMatchFile();
});

test('targets: legacy', () => {
  let {
    options: { targets },
  } = transform('', {
    targets: { browsers: 'defaults' },
    presets: [[preset, { modules: false }]],
  });

  let browsers = browserslist('defaults');

  let result = [
    '// Babel targets',
    JSON.stringify(targets, null, 2),
    '// Browerslist targets',
    JSON.stringify(browsers, null, 2),
  ].join('\n');

  expect(result).toMatchFile();
});
