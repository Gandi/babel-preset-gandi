import { expect, test, describe } from 'vitest';

import filenamify from 'filenamify';
import { transform } from '@babel/core';

import preset from '../index.js';

import es from './fixtures/es';
import stage4 from './fixtures/stage4';
import flow from './fixtures/flow';
import react from './fixtures/react';
import regressions from './fixtures/regressions';

let cases = [...es, ...flow, ...react, ...regressions];

describe('babel', () => {
  test.for(cases)('cjsm > %s', async ([name, input], ctx) => {
    let { code } = transform(input, {
      presets: [preset],
    });

    await expect(code).toMatchFileSnapshot(
      `./snapshots/babel/${filenamify(ctx.task.name, { replacement: '' })}.js`,
    );
  });

  test.for([...stage4, ...cases])('esm > %s', async ([name, input], ctx) => {
    let { code } = transform(input, {
      presets: [[preset, { modules: false }]],
    });

    await expect(code).toMatchFileSnapshot(
      `./snapshots/babel/${filenamify(ctx.task.name, { replacement: '' })}.js`,
    );
  });

  test.for(cases)('node > %s', async ([name, input], ctx) => {
    let { code } = transform(input, {
      targets: { node: 22 },
      presets: [preset],
    });

    await expect(code).toMatchFileSnapshot(
      `./snapshots/babel/${filenamify(ctx.task.name, { replacement: '' })}.js`,
    );
  });
});
