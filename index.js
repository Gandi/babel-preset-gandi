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
  const defaults = {
    targets: {
      browsers: ['last 2 versions', '> 1%', 'Firefox ESR', 'not dead'],
      node: 8,
    },
    modules: false,
  };

  const presets = [
    ['@babel/preset-env', Object.assign(defaults, options)],
    '@babel/preset-react',
    '@babel/preset-flow',
  ];

  const plugins = [
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-proposal-class-properties',
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    [
      '@babel/plugin-transform-runtime',
      {
        corejs: false,
        helpers: true,
        regenerator: true,
        useESModules: true,
      },
    ],
  ];

  return {
    presets,
    plugins,
  };
};
