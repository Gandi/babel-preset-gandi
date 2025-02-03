import { expect, test } from 'vitest';

import { transform } from '@babel/core';
import browserslist from 'browserslist';

import preset from '../index.js';

test('targets', async () => {
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

  await expect(result).toMatchFileSnapshot('./snapshots/targets.js');
});
