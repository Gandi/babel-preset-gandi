/**
 * [ES2018+]
 * https://babeljs.io/docs/en/babel-preset-env
 *
 * [Proposals]
 * https://babeljs.io/docs/en/babel-plugin-proposal-class-properties
 * https://babeljs.io/docs/en/babel-plugin-proposal-decorators
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
    version: '7.7.0', // 1
  };

  let presets = [
    ['@babel/preset-env', envOpts],
    ['@babel/preset-react', { useSpread: true }],
    '@babel/preset-flow',
  ];

  let plugins = [
    '@babel/plugin-transform-flow-strip-types',
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-proposal-nullish-coalescing-operator',
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    ['@babel/plugin-transform-runtime', runtimeOpts],
  ];

  return {
    presets,
    plugins,
  };
};
