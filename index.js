/**
 * [ES2017+]
 * https://babeljs.io/docs/plugins/preset-env
 *
 * [Experimental]
 * https://babeljs.io/docs/plugins/transform-object-rest-spread
 * https://babeljs.io/docs/plugins/transform-class-properties
 * https://github.com/loganfsmyth/babel-plugin-transform-decorators-legacy
 * https://babeljs.io/docs/plugins/transform-decorators
 *
 * [React/Flow]
 * https://babeljs.io/docs/plugins/preset-react
 *
 * [Other]
 * https://babeljs.io/docs/plugins/transform-runtime
 */

module.exports = (context, options) => {
  const defaults = {
    targets: {
      browsers: ['Firefox ESR', 'last 2 versions', '> 1%'],
      node: 8,
    },
  };

  const presets = [['env', Object.assign(defaults, options)], 'react'];

  const plugins = [
    [
      'transform-runtime',
      {
        helpers: true,
        polyfill: true,
        regenerator: true,
      },
    ],
    'transform-class-properties',
    'transform-decorators-legacy',
    'transform-object-rest-spread',
  ];

  return {
    presets,
    plugins,
  };
};
