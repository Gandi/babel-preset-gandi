const { transform } = require('@babel/core');
const { toMatchFile } = require('jest-file-snapshot');
const browserslist = require('browserslist');

const preset = require('../');

expect.extend({ toMatchFile });

test('targets', () => {
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
