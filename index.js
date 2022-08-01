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
 * 2. Plugins are run in the order defined below,
 *    but they are run *before* presets.
 *    So we need to make sure the Flow annotations are removed before
 *    the class properties plugin.
 *    This is to avoid the `undefined` properties issue with old Flow props
 *    syntax: `class A { props: Props }`.
 *
 * 3. Temporary, see https://github.com/Gandi/babel-preset-gandi/pull/42
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
          'IE 11', // 3
        ],
      },
      bugfixes: options.targets && options.targets.esmodules === true,
    },
    options
  );

  let runtimeOpts = {
    corejs: 2,
    helpers: true,
    regenerator: true,
    version: '7.18.0', // 1
  };

  let presets = [
    ['@babel/preset-env', envOpts],
    '@babel/preset-react',
    '@babel/preset-flow',
  ];

  let plugins = [
    '@babel/plugin-transform-flow-strip-types', // 2
    ['@babel/plugin-proposal-private-methods', { loose: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
    ['@babel/plugin-transform-runtime', runtimeOpts],
  ];

  return {
    presets,
    plugins,
  };
};
