const { transform } = require('@babel/core');
const { toMatchFile } = require('jest-file-snapshot');

const preset = require('../');

const es = require('./fixtures/es');
const flow = require('./fixtures/flow');
const react = require('./fixtures/react');
const proposals = require('./fixtures/proposals');
const regressions = require('./fixtures/regressions');

let cases = [...es, ...flow, ...react, ...proposals, ...regressions];

expect.extend({ toMatchFile });

describe('babel', () => {
  test.each(cases)('cjsm > %s', (name, input) => {
    let { code } = transform(input, {
      presets: [preset],
    });

    expect(code).toMatchFile();
  });

  test.each(cases)('esm > %s', (name, input) => {
    let { code } = transform(input, {
      presets: [[preset, { modules: false }]],
    });

    expect(code).toMatchFile();
  });

  test.each(cases)('node > %s', (name, input) => {
    let { code } = transform(input, {
      targets: { node: 22 },
      presets: [preset],
    });

    expect(code).toMatchFile();
  });
});
