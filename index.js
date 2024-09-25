/**
 * [ES2022+]
 * https://babeljs.io/docs/en/babel-preset-env
 *
 * [React]
 * https://babeljs.io/docs/en/babel-preset-react
 *
 * [Flow]
 * https://babeljs.io/docs/en/babel-preset-flow
 *
 * [Hermes Parser]
 * https://github.com/facebook/hermes/blob/main/tools/hermes-parser/js/babel-plugin-syntax-hermes-parser
 *
 * [Ponyfills]
 * https://babeljs.io/docs/en/babel-plugin-transform-runtime
 */

const { declarePreset } = require('@babel/helper-plugin-utils');
const presetEnv = require('@babel/preset-env');
const presetFlow = require('@babel/preset-flow');
const presetReact = require('@babel/preset-react');
const transformRuntime = require('@babel/plugin-transform-runtime');
const syntaxHermesParser = require('babel-plugin-syntax-hermes-parser');

/**
 * [Notes]
 * Presets are run in the reverse order they are defined.
 * Plugins are run in the order they are defined below,
 * but they are run *before* presets.
 */

/**
 * 1. Ensure all helpers are imported instead of inlined.
 *    See https://github.com/babel/babel/issues/9297#issuecomment-453750049
 * 2. Will set as default from Babel 8.
 */

module.exports = declarePreset((api, options = {}) => {
  api.assertVersion(7);

  let { parser = 'babel', ...envOptions } = options;

  let envOpts = {
    bugfixes: true, // 2
    shippedProposals: true,
    ...envOptions,
  };

  let reactOpts = {
    useSpread: true, // 2
    runtime: 'automatic', // 2
  };

  let flowOpts = {
    // allowDeclareFields: true, // 2
  };

  let runtimeOpts = {
    corejs: 3,
    helpers: true,
    regenerator: true,
    version: '7.25.0', // 1
  };

  let presets = [
    [presetEnv, envOpts],
    [presetReact, reactOpts],
    [presetFlow, flowOpts],
  ];

  let plugins = [
    ...(parser === 'hermes' ? [syntaxHermesParser] : []),
    [transformRuntime, runtimeOpts],
  ];

  return {
    presets,
    plugins,
  };
});
