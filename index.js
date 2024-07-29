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
 * [Other]
 * https://babeljs.io/docs/en/babel-plugin-transform-runtime
 */

/**
 * Notes
 *
 * Presets are run in the reverse order they are defined.
 * Plugins are run in the order they are defined below,
 * but they are run *before* presets.
 */

/**
 * 1. Ensure all helpers are imported instead of inlined.
 *    See https://github.com/babel/babel/issues/9297#issuecomment-453750049
 */

module.exports = (context, options = {}) => {
  let envOpts = {
    bugfixes: true,
    ...options,
  };

  let reactOpts = {
    useSpread: true,
    runtime: 'automatic',
  };

  let runtimeOpts = {
    corejs: 3,
    helpers: true,
    regenerator: true,
    version: '7.25.0', // 1
  };

  let presets = [
    ['@babel/preset-env', envOpts],
    ['@babel/preset-react', reactOpts],
    '@babel/preset-flow',
  ];

  let plugins = [
    'babel-plugin-syntax-hermes-parser',
    ['@babel/plugin-transform-runtime', runtimeOpts],
  ];

  return {
    presets,
    plugins,
  };
};
