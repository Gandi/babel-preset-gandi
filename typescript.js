/**
 * [ES2022+]
 * https://babeljs.io/docs/en/babel-preset-env
 *
 * [React]
 * https://babeljs.io/docs/en/babel-preset-react
 *
 * [Typescript]
 * https://babeljs.io/docs/babel-preset-typescript
 *
 * [Ponyfills]
 * https://babeljs.io/docs/en/babel-plugin-transform-runtime
 */

/**
 * [Notes]
 *
 * Presets are run in the reverse order they are defined.
 * Plugins are run in the order they are defined below,
 * but they are run *before* presets.
 */

/**
 * 1. Will be set as default from Babel 8.
 *
 * 2. Ensure all helpers are imported instead of inlined.
 *    See https://github.com/babel/babel/issues/9297#issuecomment-453750049
 *
 * 3. https://babeljs.io/docs/babel-generator#:~:text=importAttributesKeyword
 */

module.exports = (context, options = {}) => {
  let envOptions = options;

  let configOpts = {
    generatorOpts: {
      importAttributesKeyword: 'with', // 3
    },
  };

  let envOpts = {
    bugfixes: true, // 1
    ...envOptions,
  };

  let reactOpts = {
    useSpread: true, // 1
    runtime: 'automatic', // 1
  };

  let runtimeOpts = {
    corejs: 3,
    helpers: true,
    regenerator: true,
    version: '7.28.4', // 2
  };

  let typescriptOpts = {
    isTSX: true,
    allExtensions: true,
  };

  let presets = [
    ['@babel/preset-env', envOpts],
    ['@babel/preset-react', reactOpts],
    ['@babel/preset-typescript', typescriptOpts],
  ];

  let plugins = [['@babel/plugin-transform-runtime', runtimeOpts]];

  return {
    ...configOpts,
    presets,
    plugins,
  };
};
