/**
 * [ES2020+]
 * https://babeljs.io/docs/en/babel-preset-env
 *
 * [Proposals]
 * https://babeljs.io/docs/en/babel-plugin-proposal-class-properties
 *
 * [React]
 * https://babeljs.io/docs/en/babel-preset-react
 *
 * [Flow]
 * https://babeljs.io/docs/en/babel-preset-flow
 *
 * [Other]
 * https://babeljs.io/docs/en/babel-plugin-transform-runtime
 */

/**
 * 1. Ensure all helpers are imported instead of inlined.
 *    See https://github.com/babel/babel/issues/9297#issuecomment-453750049
 *
 * 2. Presets are run in the reverse order they are defined...
 *
 * 3. Plugins are run in the order they are defined,
 *    but they are run *before* presets.
 */
module.exports = (context, options = {}) => {
  let envOpts = Object.assign(
    {
      targets: {
        browsers: ['last 2 versions', '> 1%', 'Firefox ESR', 'not dead'],
      },
      bugfixes: options.targets && options.targets.esmodules === true,
    },
    options
  );

  let runtimeOpts = {
    corejs: 2,
    helpers: true,
    regenerator: true,
    version: '7.14.0', // 1
  };

  // 2
  let presets = [
    ['@babel/preset-env', envOpts],
    '@babel/preset-react',
    '@babel/preset-flow',
  ];

  // 3
  let plugins = [['@babel/plugin-transform-runtime', runtimeOpts]];

  return {
    presets,
    plugins,
  };
};
