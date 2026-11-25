import os from 'node:os';
import { expect, test } from 'vitest';
import { transform } from '@babel/core';

import preset from '../index.js';
import tsPreset from '../typescript.js';

test('resolves presets and plugins independently of consumer cwd', () => {
  const isolatedRoot = os.tmpdir();

  expect(() =>
    transform('let a: string = "ok";', {
      cwd: isolatedRoot,
      root: isolatedRoot,
      filename: 'test.ts',
      presets: [tsPreset],
    }),
  ).not.toThrow();

  expect(() =>
    transform('// @flow\nlet a: string = "ok";', {
      cwd: isolatedRoot,
      root: isolatedRoot,
      presets: [[preset, { parser: 'hermes' }]],
    }),
  ).not.toThrow();
});
