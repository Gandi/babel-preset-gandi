/**
 * [ES2018+]
 * https://babeljs.io/docs/en/babel-preset-env
 *
 * [Proposals]
 * https://babeljs.io/docs/en/babel-plugin-syntax-dynamic-import
 * https://babeljs.io/docs/en/babel-plugin-proposal-class-properties
 * https://babeljs.io/docs/en/babel-plugin-proposal-decorators
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
    version: '7.3.0',
  };

  let presets = [
    ['@babel/preset-env', envOpts],
    '@babel/preset-react',
    '@babel/preset-flow',
  ];

  let plugins = [
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-transform-flow-strip-types',
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    ['@babel/plugin-transform-runtime', runtimeOpts],
  ];

  return {
    presets,
    plugins,
  };
};
