/**
 * [ES2018+]
 * https://babeljs.io/docs/plugins/preset-env
 *
 * [Experimental]
 * https://babeljs.io/docs/plugins/syntax-dynamic-import
 * https://babeljs.io/docs/plugins/transform-object-rest-spread
 * https://babeljs.io/docs/plugins/transform-class-properties
 * https://github.com/loganfsmyth/babel-plugin-transform-decorators-legacy
 * https://babeljs.io/docs/plugins/transform-decorators
 *
 * [React]
 * https://babeljs.io/docs/plugins/preset-react
 *
 * [Flow]
 * https://babeljs.io/docs/plugins/preset-flow
 *
 * [Other]
 * https://babeljs.io/docs/plugins/transform-runtime
 */

module.exports = (context, options) => {
  const defaults = {
    targets: {
      browsers: ['Firefox ESR', 'last 2 versions', '> 1%', 'not dead'],
      node: 8,
    },
    modules: false,
  };

  const presets = [
    ['@babel/env', Object.assign(defaults, options)],
    '@babel/react',
    '@babel/flow',
  ];

  const plugins = [
    [
      '@babel/transform-runtime',
      {
        helpers: true,
        polyfill: true,
        regenerator: true,
      },
    ],
    '@babel/proposal-object-rest-spread',
    '@babel/proposal-class-properties',
    'transform-decorators-legacy',
  ];

  return {
    presets,
    plugins,
  };
};
