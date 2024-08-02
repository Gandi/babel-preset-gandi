const { transform } = require('@babel/core');
const { toMatchFile } = require('jest-file-snapshot');

const preset = require('../');

const es = require('./fixtures/es');
const flow = require('./fixtures/flow');
const syntax = require('./fixtures/flow-syntax');
const react = require('./fixtures/react');
const regressions = require('./fixtures/regressions');

let cases = [...es, ...flow, ...syntax, ...react, ...regressions];

expect.extend({ toMatchFile });

describe('hermes', () => {
  test.each(cases)('cjsm > %s', (name, input) => {
    let { code } = transform(input, {
      presets: [[preset, { parser: 'hermes' }]],
    });

    expect(code).toMatchFile();
  });

  test.each(cases)('esm > %s', (name, input) => {
    let { code } = transform(input, {
      presets: [[preset, { parser: 'hermes', modules: false }]],
    });

    expect(code).toMatchFile();
  });

  test.each(cases)('node > %s', (name, input) => {
    let { code } = transform(input, {
      targets: { node: 22 },
      presets: [[preset, { parser: 'hermes' }]],
    });

    expect(code).toMatchFile();
  });
});
