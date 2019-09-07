/**
 * [ES2018+]
 * https://babeljs.io/docs/en/babel-preset-env
 *
 * [Proposals]
 * https://babeljs.io/docs/en/babel-plugin-proposal-class-properties
 * https://babeljs.io/docs/en/babel-plugin-proposal-optional-chaining
 * https://babeljs.io/docs/en/babel-plugin-proposal-nullish-coalescing-operator
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
 */
module.exports = (context, options) => {
  let envOpts = Object.assign(
    {
      targets: {
        browsers: ['last 2 versions', '> 1%', 'Firefox ESR', 'not dead'],
        node: 10,
      },
    },
    options
  );

  let runtimeOpts = {
    corejs: 2,
    helpers: true,
    regenerator: true,
    useESModules: envOpts.modules === false,
    version: '7.6.0', // 1
  };

  let presets = [
    ['@babel/preset-env', envOpts],
    '@babel/preset-react',
    '@babel/preset-flow',
  ];

  let plugins = [
    '@babel/plugin-transform-flow-strip-types', // 2
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-proposal-nullish-coalescing-operator',
    ['@babel/plugin-transform-runtime', runtimeOpts],
  ];

  return {
    presets,
    plugins,
  };
};
