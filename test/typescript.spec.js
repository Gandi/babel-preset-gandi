import { expect, test, describe } from 'vitest';

import filenamify from 'filenamify';
import { transform } from '@babel/core';

import preset from '../typescript.js';

import es from './fixtures/es';
import stage4 from './fixtures/stage4';
import typescript from './fixtures/typescript';
import react from './fixtures/react';
import regressions from './fixtures/regressions';

let cases = [...es, ...typescript, ...react, ...regressions];
let filename = 'test.ts';
let compilerOptions = { sources: null };

describe('typescript', () => {
  test.for(cases)('cjsm > %s', async ([name, input], ctx) => {
    let { code } = transform(input, {
      filename,
      presets: [[preset, { compilerOptions }]],
    });

    await expect(code).toMatchFileSnapshot(
      `./snapshots/typescript/${filenamify(ctx.task.name, { replacement: '' })}.js`,
    );
  });

  test.for([...stage4, ...cases])('esm > %s', async ([name, input], ctx) => {
    let { code } = transform(input, {
      filename,
      presets: [[preset, { modules: false, compilerOptions }]],
    });

    await expect(code).toMatchFileSnapshot(
      `./snapshots/typescript/${filenamify(ctx.task.name, { replacement: '' })}.js`,
    );
  });

  test.for(cases)('node > %s', async ([name, input], ctx) => {
    let { code } = transform(input, {
      filename,
      targets: { node: 22 },
      presets: [[preset, { compilerOptions }]],
    });

    await expect(code).toMatchFileSnapshot(
      `./snapshots/typescript/${filenamify(ctx.task.name, { replacement: '' })}.js`,
    );
  });
});
