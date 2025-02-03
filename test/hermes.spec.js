import { expect, test, describe } from 'vitest';

import filenamify from 'filenamify';
import { transform } from '@babel/core';

import preset from '../index.js';

import es from './fixtures/es';
import flow from './fixtures/flow';
import syntax from './fixtures/flow-syntax';
import react from './fixtures/react';
import regressions from './fixtures/regressions';

let cases = [...es, ...flow, ...syntax, ...react, ...regressions];

describe('hermes', () => {
  test.for(cases)('cjsm > %s', async ([name, input], ctx) => {
    let { code } = transform(input, {
      presets: [[preset, { parser: 'hermes' }]],
    });

    await expect(code).toMatchFileSnapshot(
      `./snapshots/hermes/${filenamify(ctx.task.name, { replacement: '' })}.js`,
    );
  });

  test.for(cases)('esm > %s', async ([name, input], ctx) => {
    let { code } = transform(input, {
      presets: [[preset, { parser: 'hermes', modules: false }]],
    });

    await expect(code).toMatchFileSnapshot(
      `./snapshots/hermes/${filenamify(ctx.task.name, { replacement: '' })}.js`,
    );
  });

  test.for(cases)('node > %s', async ([name, input], ctx) => {
    let { code } = transform(input, {
      targets: { node: 22 },
      presets: [[preset, { parser: 'hermes' }]],
    });

    await expect(code).toMatchFileSnapshot(
      `./snapshots/hermes/${filenamify(ctx.task.name, { replacement: '' })}.js`,
    );
  });
});
