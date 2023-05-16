/**
 * [ES2020+]
 * https://babeljs.io/docs/en/babel-preset-env
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
 * Notes
 *
 * Presets are run in the reverse order they are defined.
 * Plugins are run in the order they are defined below,
 * but they are run *before* presets.
 */

/**
 * 1. Ensure all helpers are imported instead of inlined.
 *    See https://github.com/babel/babel/issues/9297#issuecomment-453750049
 *
 * 2. Temporary, see https://github.com/Gandi/babel-preset-gandi/pull/42
 */

module.exports = (context, options = {}) => {
  let envOpts = Object.assign(
    {
      targets: {
        browsers: [
          'last 2 versions',
          '> 1%',
          'not dead',
          'Firefox ESR',
          'IE 11', // 2
        ],
      },
      bugfixes: options.targets && options.targets.esmodules === true,
    },
    options,
  );

  let runtimeOpts = {
    corejs: 2,
    helpers: true,
    regenerator: true,
    version: '7.24.0', // 1
  };

  let presets = [
    ['@babel/preset-env', envOpts],
    '@babel/preset-react',
    '@babel/preset-flow',
  ];

  let plugins = [['@babel/plugin-transform-runtime', runtimeOpts]];

  return {
    presets,
    plugins,
  };
};
