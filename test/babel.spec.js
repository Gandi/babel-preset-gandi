const { transform } = require('@babel/core');
const { toMatchFile } = require('jest-file-snapshot');

const preset = require('../');

const es = require('./fixtures/es');
const stage4 = require('./fixtures/stage4');
const flow = require('./fixtures/flow');
const react = require('./fixtures/react');
const regressions = require('./fixtures/regressions');

let cases = [...es, ...flow, ...react, ...regressions];

expect.extend({ toMatchFile });

describe('babel', () => {
  test.each(cases)('cjsm > %s', (name, input) => {
    let { code } = transform(input, {
      presets: [preset],
    });

    expect(code).toMatchFile();
  });

  test.each([...stage4, ...cases])('esm > %s', (name, input) => {
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
